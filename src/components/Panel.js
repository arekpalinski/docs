"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = Panel;
var clsx_1 = require("clsx");
var react_1 = require("react");
var Heading_1 = require("@theme/Heading");
function Panel(props) {
    var children = props.children, className = props.className, flush = props.flush, heading = props.heading, _a = props.headingLevel, headingLevel = _a === void 0 ? 2 : _a;
    var headingTag = "h".concat(headingLevel);
    var id = heading
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/^-|-$/g, "");
    return (<section className={(0, clsx_1.default)("panel", flush ? "" : "my-4", className)}>
            <Heading_1.default as={headingTag} id={id} className="panel__heading">
                {heading}
            </Heading_1.default>
            <div className="panel__body">{children}</div>
        </section>);
}
exports.default = Panel;
