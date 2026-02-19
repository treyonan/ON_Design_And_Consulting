"""
Node type definitions and catalog for the flow editor.
Each node type defines its category, visual style, configurable properties, and port layout.
"""

# Node category colors (matching Node-RED conventions)
COLORS = {
    "input": "#a6bbcf",
    "function": "#fdd0a2",
    "output": "#c8e6c9",
    "network": "#e2a0a0",
}

NODE_CATALOG = {
    "Inject": {
        "category": "input",
        "description": "Inject a message into the flow",
        "color": COLORS["input"],
        "properties": {
            "payload": {"type": "text", "default": "Hello World", "label": "Payload"},
            "payload_type": {
                "type": "select",
                "default": "string",
                "options": ["string", "number", "timestamp", "json"],
                "label": "Payload Type",
            },
        },
        "outputs": 1,
        "inputs": 0,
    },
    "Debug": {
        "category": "output",
        "description": "Display messages in the debug panel",
        "color": COLORS["output"],
        "properties": {
            "display": {
                "type": "select",
                "default": "payload",
                "options": ["payload", "full_message"],
                "label": "Display",
            },
        },
        "outputs": 0,
        "inputs": 1,
    },
    "Function": {
        "category": "function",
        "description": "Run custom Python code on the message",
        "color": COLORS["function"],
        "properties": {
            "code": {
                "type": "code",
                "default": "# msg['payload'] contains the input\nreturn msg",
                "label": "Python Code",
            },
        },
        "outputs": 1,
        "inputs": 1,
    },
    "Template": {
        "category": "function",
        "description": "Format output using a template string",
        "color": COLORS["function"],
        "properties": {
            "template": {
                "type": "text",
                "default": "The value is: {{payload}}",
                "label": "Template",
            },
        },
        "outputs": 1,
        "inputs": 1,
    },
    "Switch": {
        "category": "function",
        "description": "Route messages based on property values",
        "color": COLORS["function"],
        "properties": {
            "property": {"type": "text", "default": "payload", "label": "Property"},
            "condition": {
                "type": "select",
                "default": "==",
                "options": ["==", "!=", ">", "<", ">=", "<=", "contains", "is_true", "is_false"],
                "label": "Condition",
            },
            "value": {"type": "text", "default": "", "label": "Compare Value"},
        },
        "outputs": 2,
        "inputs": 1,
    },
    "Change": {
        "category": "function",
        "description": "Set, change, or delete message properties",
        "color": COLORS["function"],
        "properties": {
            "action": {
                "type": "select",
                "default": "set",
                "options": ["set", "change", "delete"],
                "label": "Action",
            },
            "property": {"type": "text", "default": "payload", "label": "Property"},
            "value": {"type": "text", "default": "", "label": "Value"},
        },
        "outputs": 1,
        "inputs": 1,
    },
    "HTTP Request": {
        "category": "network",
        "description": "Make HTTP requests",
        "color": COLORS["network"],
        "properties": {
            "method": {
                "type": "select",
                "default": "GET",
                "options": ["GET", "POST", "PUT", "DELETE", "PATCH"],
                "label": "Method",
            },
            "url": {"type": "text", "default": "", "label": "URL"},
            "headers": {"type": "text", "default": "{}", "label": "Headers (JSON)"},
        },
        "outputs": 1,
        "inputs": 1,
    },
    "Delay": {
        "category": "function",
        "description": "Delay message passing",
        "color": COLORS["function"],
        "properties": {
            "delay_sec": {"type": "number", "default": 1.0, "label": "Delay (seconds)"},
        },
        "outputs": 1,
        "inputs": 1,
    },
}


def get_node_type_for_flow(node_name):
    """Map our node category to streamlit-flow node_type for handle visibility."""
    info = NODE_CATALOG.get(node_name, {})
    cat = info.get("category", "function")
    if cat == "input":
        return "input"  # source handle only
    elif cat == "output":
        return "output"  # target handle only
    return "default"  # both handles
