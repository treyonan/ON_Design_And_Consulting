"""
Custom Flow Editor — a Node-RED-inspired visual flow builder built with Streamlit.
Run with:  streamlit run app.py
"""

import json
import os
import tempfile
from uuid import uuid4

import streamlit as st
from streamlit_flow import streamlit_flow
from streamlit_flow.elements import StreamlitFlowNode, StreamlitFlowEdge
from streamlit_flow.state import StreamlitFlowState
from streamlit_flow.layouts import ManualLayout

from nodes import NODE_CATALOG, get_node_type_for_flow
from engine import FlowEngine

APP_DIR = os.path.dirname(os.path.abspath(__file__))
FLOWS_DIR = os.path.join(APP_DIR, "flows")
DEFAULT_FLOW = os.path.join(FLOWS_DIR, "demo_math.json")


# ── pure helpers (no st calls) ──────────────────────────────────────

def _node_label(node_type, config):
    """Build a display label for a node from its current config."""
    label = f"**{node_type}**"
    if node_type == "Inject":
        val = config.get("payload", "")
        ptype = config.get("payload_type", "string")
        label += f"\n\n`{val}` ({ptype})"
    elif node_type == "Debug":
        label += f"\n\n`{config.get('display', 'payload')}`"
    elif node_type == "Function":
        snippet = config.get("code", "").split("\n")[0][:30]
        label += f"\n\n`{snippet}...`"
    elif node_type == "Template":
        label += f"\n\n`{config.get('template', '')[:35]}`"
    elif node_type == "Switch":
        prop = config.get("property", "payload")
        cond = config.get("condition", "==")
        val = config.get("value", "")
        label += f"\n\n`{prop} {cond} {val}`"
    elif node_type == "Change":
        label += f"\n\n`{config.get('action', 'set')} {config.get('property', 'payload')}`"
    elif node_type == "HTTP Request":
        label += f"\n\n`{config.get('method', 'GET')} {config.get('url', '')[:25]}`"
    elif node_type == "Delay":
        label += f"\n\n`{config.get('delay_sec', 1)}s`"
    return label


def _load_flow_from_file(path):
    """Parse a saved flow JSON and return (StreamlitFlowState, node_configs)."""
    with open(path, "r") as f:
        data = json.load(f)
    nodes = [
        StreamlitFlowNode(
            id=nd["id"],
            pos=tuple(nd["pos"]),
            data=nd["data"],
            node_type=nd.get("node_type", "default"),
            source_position=nd.get("source_position", "right"),
            target_position=nd.get("target_position", "left"),
            connectable=True, deletable=True, selectable=True, draggable=True,
            style=nd.get("style", {}),
        )
        for nd in data.get("nodes", [])
    ]
    edges = [
        StreamlitFlowEdge(
            id=ed.get("id", f"{ed['source']}-{ed['target']}"),
            source=ed["source"], target=ed["target"], animated=True,
        )
        for ed in data.get("edges", [])
    ]
    return StreamlitFlowState(nodes, edges), data.get("configs", {})


def _make_node(node_name, x=100, y=100):
    """Create a StreamlitFlowNode + default config dict."""
    info = NODE_CATALOG[node_name]
    node_id = str(uuid4())
    config = {"_type": node_name}
    for prop_name, prop_info in info["properties"].items():
        config[prop_name] = prop_info["default"]
    node = StreamlitFlowNode(
        id=node_id, pos=(x, y),
        data={"content": _node_label(node_name, config)},
        node_type=get_node_type_for_flow(node_name),
        source_position="right", target_position="left",
        connectable=True, deletable=True, selectable=True, draggable=True,
        style={
            "background": info["color"], "border": "2px solid #555",
            "borderRadius": "8px", "padding": "8px 14px",
            "fontSize": "14px", "fontWeight": "600",
            "minWidth": "100px", "textAlign": "center",
        },
    )
    return node, node_id, config


def _sync_node_labels():
    """Update every canvas node's label to match its current config."""
    for node in st.session_state.flow_state.nodes:
        cfg = st.session_state.node_configs.get(node.id)
        if cfg:
            node.data["content"] = _node_label(cfg.get("_type", ""), cfg)


# ── main app ────────────────────────────────────────────────────────

def main():
    st.set_page_config(
        page_title="Flow Editor", page_icon="🔴",
        layout="wide", initial_sidebar_state="expanded",
    )

    # ── session state init ──────────────────────────────────────────
    if "flow_state" not in st.session_state:
        if os.path.exists(DEFAULT_FLOW):
            st.session_state.flow_state, st.session_state.node_configs = (
                _load_flow_from_file(DEFAULT_FLOW)
            )
        else:
            st.session_state.flow_state = StreamlitFlowState([], [])
            st.session_state.node_configs = {}

    if "node_configs" not in st.session_state:
        st.session_state.node_configs = {}
    if "debug_output" not in st.session_state:
        st.session_state.debug_output = []
    if "execution_log" not in st.session_state:
        st.session_state.execution_log = []

    # ── sidebar: palette + config panel ────────────────────────────
    with st.sidebar:
        st.markdown("## Node Palette")
        st.caption("Click a node type to add it to the canvas.")

        categories = {}
        for name, info in NODE_CATALOG.items():
            categories.setdefault(info["category"], []).append(name)

        for cat, names in categories.items():
            with st.expander(cat.replace("_", " ").title(), expanded=True):
                cols = st.columns(2)
                for i, name in enumerate(names):
                    if cols[i % 2].button(
                        f"+ {name}", key=f"add_{name}",
                        help=NODE_CATALOG[name]["description"],
                        use_container_width=True,
                    ):
                        offset = len(st.session_state.flow_state.nodes) * 40
                        node, nid, cfg = _make_node(name, x=150 + offset, y=150 + offset)
                        st.session_state.flow_state.nodes.append(node)
                        st.session_state.node_configs[nid] = cfg
                        st.rerun()

        st.divider()
        selected_id = st.session_state.flow_state.selected_id
        if selected_id and selected_id in st.session_state.node_configs:
            config = st.session_state.node_configs[selected_id]
            node_type = config.get("_type", "Unknown")
            st.markdown(f"### Configure: {node_type}")
            st.caption(f"ID: `{selected_id[:12]}...`")

            if node_type in NODE_CATALOG:
                for prop_name, prop_info in NODE_CATALOG[node_type]["properties"].items():
                    key = f"cfg_{selected_id}_{prop_name}"
                    if prop_info["type"] == "text":
                        config[prop_name] = st.text_input(
                            prop_info["label"],
                            value=config.get(prop_name, prop_info["default"]), key=key,
                        )
                    elif prop_info["type"] == "number":
                        config[prop_name] = st.number_input(
                            prop_info["label"],
                            value=float(config.get(prop_name, prop_info["default"])), key=key,
                        )
                    elif prop_info["type"] == "select":
                        options = prop_info["options"]
                        current = config.get(prop_name, prop_info["default"])
                        idx = options.index(current) if current in options else 0
                        config[prop_name] = st.selectbox(
                            prop_info["label"], options=options, index=idx, key=key,
                        )
                    elif prop_info["type"] == "code":
                        config[prop_name] = st.text_area(
                            prop_info["label"],
                            value=config.get(prop_name, prop_info["default"]),
                            height=180, key=key,
                        )
        elif selected_id:
            st.info("Selected an edge. Click a node to configure it.")
        else:
            st.info("Click a node on the canvas to configure it.")

    # ── header ──────────────────────────────────────────────────────
    st.markdown(
        "<h1 style='margin-bottom:0'>Flow Editor</h1>"
        "<p style='color:gray;margin-top:0'>Visual flow programming — drag, connect, run</p>",
        unsafe_allow_html=True,
    )

    # ── toolbar ─────────────────────────────────────────────────────
    tool_cols = st.columns([1, 1, 1, 1.5, 2.5])

    with tool_cols[0]:
        run_clicked = st.button("▶ Run Flow", type="primary", use_container_width=True)
    with tool_cols[1]:
        clear_clicked = st.button("Clear All", use_container_width=True)
    with tool_cols[2]:
        save_clicked = st.button("Save Flow", use_container_width=True)
    with tool_cols[3]:
        saved_flows = sorted(
            [f for f in os.listdir(FLOWS_DIR) if f.endswith(".json")]
        ) if os.path.isdir(FLOWS_DIR) else []
        if saved_flows:
            selected_flow = st.selectbox(
                "Load saved flow",
                options=[""] + saved_flows,
                format_func=lambda x: "-- Load a saved flow --" if x == ""
                    else x.replace(".json", "").replace("_", " ").title(),
                key="flow_picker", label_visibility="collapsed",
            )
            if selected_flow and selected_flow != st.session_state.get("_loaded_flow"):
                st.session_state.flow_state, st.session_state.node_configs = (
                    _load_flow_from_file(os.path.join(FLOWS_DIR, selected_flow))
                )
                st.session_state.debug_output = []
                st.session_state.execution_log = []
                st.session_state._loaded_flow = selected_flow
                st.rerun()
    with tool_cols[4]:
        uploaded = st.file_uploader("Load", type="json", label_visibility="collapsed")

    # ── canvas ──────────────────────────────────────────────────────
    _sync_node_labels()

    st.session_state.flow_state = streamlit_flow(
        "flow_canvas",
        st.session_state.flow_state,
        height=500, fit_view=True,
        show_controls=True, show_minimap=True,
        allow_new_edges=True, animate_new_edges=True,
        get_node_on_click=True, get_edge_on_click=True,
        enable_pane_menu=True, enable_node_menu=True, enable_edge_menu=True,
        hide_watermark=True, pan_on_drag=True, allow_zoom=True, min_zoom=0.2,
        layout=ManualLayout(),
        style={"backgroundColor": "#1a1a2e", "borderRadius": "8px"},
    )

    # ── toolbar actions ─────────────────────────────────────────────
    if run_clicked:
        nodes_data = [
            {"id": n.id, "node_type": st.session_state.node_configs.get(n.id, {}).get("_type", "Unknown")}
            for n in st.session_state.flow_state.nodes
        ]
        edges_data = [
            {"source": e.source, "target": e.target}
            for e in st.session_state.flow_state.edges
        ]
        engine = FlowEngine(nodes_data, edges_data, st.session_state.node_configs)
        engine.run()
        st.session_state.debug_output = engine.debug_output
        st.session_state.execution_log = engine.execution_log

    if clear_clicked:
        st.session_state.flow_state = StreamlitFlowState([], [])
        st.session_state.node_configs = {}
        st.session_state.debug_output = []
        st.session_state.execution_log = []
        st.rerun()

    if save_clicked:
        flow_data = {
            "nodes": [
                {"id": n.id, "pos": list(n.pos), "data": n.data,
                 "node_type": n.node_type, "source_position": n.source_position,
                 "target_position": n.target_position, "style": n.style}
                for n in st.session_state.flow_state.nodes
            ],
            "edges": [
                {"id": e.id, "source": e.source, "target": e.target}
                for e in st.session_state.flow_state.edges
            ],
            "configs": st.session_state.node_configs,
        }
        st.download_button(
            "Download flow.json", json.dumps(flow_data, indent=2),
            "flow.json", "application/json",
        )

    if uploaded is not None:
        try:
            tmp = os.path.join(tempfile.gettempdir(), "uploaded_flow.json")
            with open(tmp, "wb") as f:
                f.write(uploaded.read())
            st.session_state.flow_state, st.session_state.node_configs = (
                _load_flow_from_file(tmp)
            )
            st.toast("Flow loaded successfully!")
            st.rerun()
        except Exception as e:
            st.error(f"Failed to load flow: {e}")

    # ── output panels ───────────────────────────────────────────────
    out_col1, out_col2 = st.columns(2)
    with out_col1:
        st.markdown("### Debug Output")
        if st.session_state.debug_output:
            for msg in st.session_state.debug_output:
                st.code(msg, language="text")
        else:
            st.caption("Run the flow to see debug output here.")
    with out_col2:
        st.markdown("### Execution Log")
        if st.session_state.execution_log:
            st.code("\n".join(st.session_state.execution_log), language="text")
        else:
            st.caption("Execution trace will appear here after running.")

    node_count = len(st.session_state.flow_state.nodes)
    edge_count = len(st.session_state.flow_state.edges)
    st.caption(f"Canvas: {node_count} nodes, {edge_count} edges")


if __name__ == "__main__":
    main()
else:
    main()
