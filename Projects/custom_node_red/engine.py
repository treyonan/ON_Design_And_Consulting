"""
Flow execution engine.
Traverses the node graph starting from Inject nodes, executing each node
and passing messages downstream along connected edges.
"""

import json
import time
import requests
from datetime import datetime


class FlowEngine:
    def __init__(self, nodes, edges, node_configs):
        """
        Args:
            nodes: list of dicts with 'id' and 'node_type' keys
            edges: list of dicts with 'source' and 'target' keys
            node_configs: dict mapping node_id -> {property: value, '_type': 'NodeTypeName'}
        """
        self.nodes = {n["id"]: n for n in nodes}
        self.edges = edges
        self.node_configs = node_configs
        self.debug_output = []
        self.execution_log = []

    def _downstream(self, node_id):
        """Get IDs of nodes connected to the output of node_id."""
        return [e["target"] for e in self.edges if e["source"] == node_id]

    def _find_inject_nodes(self):
        """Find all Inject nodes (flow entry points)."""
        return [
            nid for nid, n in self.nodes.items()
            if n.get("node_type") == "Inject"
        ]

    # ── node executors ──────────────────────────────────────────────

    def _exec_inject(self, config, msg):
        payload_type = config.get("payload_type", "string")
        payload = config.get("payload", "")

        if payload_type == "timestamp":
            payload = datetime.now().isoformat()
        elif payload_type == "number":
            try:
                payload = float(payload)
            except (ValueError, TypeError):
                payload = 0
        elif payload_type == "json":
            try:
                payload = json.loads(payload)
            except (json.JSONDecodeError, TypeError):
                payload = {}

        return {"payload": payload}

    def _exec_debug(self, config, msg):
        display = config.get("display", "payload")
        if display == "payload":
            self.debug_output.append(str(msg.get("payload", "")))
        else:
            self.debug_output.append(json.dumps(msg, indent=2, default=str))
        return None  # terminal node

    def _exec_function(self, config, msg):
        code = config.get("code", "return msg")
        try:
            indented = "\n".join(f"    {line}" for line in code.splitlines())
            func_code = f"def _user_func(msg):\n{indented}\n"
            local_ns = {"msg": dict(msg), "json": json, "datetime": datetime}
            exec(func_code, local_ns)  # noqa: S102
            result = local_ns["_user_func"](dict(msg))
            return result if isinstance(result, dict) else msg
        except Exception as e:
            self.debug_output.append(f"[Function error] {e}")
            return msg

    def _exec_template(self, config, msg):
        template = config.get("template", "{{payload}}")
        result = template
        for key, value in msg.items():
            result = result.replace("{{" + key + "}}", str(value))
        msg["payload"] = result
        return msg

    def _exec_switch(self, config, msg):
        prop = config.get("property", "payload")
        condition = config.get("condition", "==")
        value = config.get("value", "")
        msg_value = str(msg.get(prop, ""))

        match = False
        if condition == "==":
            match = msg_value == value
        elif condition == "!=":
            match = msg_value != value
        elif condition in (">", "<", ">=", "<="):
            try:
                a, b = float(msg_value), float(value)
                match = {">": a > b, "<": a < b, ">=": a >= b, "<=": a <= b}[condition]
            except (ValueError, TypeError):
                pass
        elif condition == "contains":
            match = value in msg_value
        elif condition == "is_true":
            match = bool(msg.get(prop))
        elif condition == "is_false":
            match = not bool(msg.get(prop))

        msg["_switch_result"] = match
        return msg

    def _exec_change(self, config, msg):
        action = config.get("action", "set")
        prop = config.get("property", "payload")
        value = config.get("value", "")

        if action == "set":
            msg[prop] = value
        elif action == "change":
            if prop in msg:
                msg[prop] = value
        elif action == "delete":
            msg.pop(prop, None)
        return msg

    def _exec_http(self, config, msg):
        method = config.get("method", "GET")
        url = config.get("url", "") or msg.get("url", "")
        headers = {}
        try:
            headers = json.loads(config.get("headers", "{}"))
        except (json.JSONDecodeError, TypeError):
            pass

        if not url:
            self.debug_output.append("[HTTP Request] No URL provided")
            return msg

        try:
            body = msg.get("payload") if method in ("POST", "PUT", "PATCH") else None
            resp = requests.request(method, url, headers=headers, json=body, timeout=10)
            msg["payload"] = resp.text
            msg["statusCode"] = resp.status_code
            try:
                msg["payload"] = resp.json()
            except (ValueError, TypeError):
                pass
        except Exception as e:
            msg["payload"] = str(e)
            msg["statusCode"] = 0
            self.debug_output.append(f"[HTTP error] {e}")
        return msg

    def _exec_delay(self, config, msg):
        delay = float(config.get("delay_sec", 1))
        time.sleep(min(delay, 10))  # safety cap
        return msg

    # ── dispatcher ──────────────────────────────────────────────────

    _EXECUTORS = {
        "Inject": "_exec_inject",
        "Debug": "_exec_debug",
        "Function": "_exec_function",
        "Template": "_exec_template",
        "Switch": "_exec_switch",
        "Change": "_exec_change",
        "HTTP Request": "_exec_http",
        "Delay": "_exec_delay",
    }

    def _execute_node(self, node_id, msg):
        node = self.nodes[node_id]
        node_type = node.get("node_type", "Unknown")
        config = self.node_configs.get(node_id, {})
        self.execution_log.append(f"  -> {node_type} [{node_id[:8]}]")

        executor = self._EXECUTORS.get(node_type)
        if executor:
            return getattr(self, executor)(config, msg)
        return msg

    def _traverse(self, node_id, msg):
        if node_id not in self.nodes:
            return
        result = self._execute_node(node_id, msg)
        if result is None:
            return

        downstream = self._downstream(node_id)
        node_type = self.nodes[node_id].get("node_type")

        # Switch routing: 1st edge = True path, 2nd edge = False path
        if node_type == "Switch" and len(downstream) >= 2:
            matched = result.get("_switch_result", False)
            if matched:
                self.execution_log.append(f"     Switch -> TRUE path")
                self._traverse(downstream[0], dict(result))
            else:
                self.execution_log.append(f"     Switch -> FALSE path")
                self._traverse(downstream[1], dict(result))
        else:
            for target_id in downstream:
                self._traverse(target_id, dict(result))

    # ── public API ──────────────────────────────────────────────────

    def run(self):
        """Execute the full flow starting from all Inject nodes."""
        self.debug_output = []
        self.execution_log = []

        starts = self._find_inject_nodes()
        if not starts:
            self.debug_output.append(
                "No Inject nodes found. Add an Inject node to start the flow."
            )
            return

        for start_id in starts:
            self.execution_log.append(f"Flow started at Inject [{start_id[:8]}]")
            self._traverse(start_id, {})
