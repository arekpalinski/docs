"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentFrame = ContentFrame;
var clsx_1 = require("clsx");
var react_1 = require("react");
function ContentFrame(props) {
    var children = props.children, className = props.className, flush = props.flush;
    return <div className={(0, clsx_1.default)("content-frame", flush ? "" : "my-4", className)}>{children}</div>;
}
exports.default = ContentFrame;
