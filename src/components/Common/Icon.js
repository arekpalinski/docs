"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = Icon;
var react_1 = require("react");
var clsx_1 = require("clsx");
function Icon(_a) {
    var icon = _a.icon, _b = _a.size, size = _b === void 0 ? "sm" : _b, className = _a.className;
    var iconBase64 = require("@site/static/icons/".concat(icon, ".svg")).default;
    var sizeClass = getSizeClass(size);
    return (<div dangerouslySetInnerHTML={{
            __html: getSvg(iconBase64, sizeClass),
        }} className={(0, clsx_1.default)(className)}/>);
}
function getSvg(base64String, sizeClass) {
    var svgContent = atob(base64String.split("base64,")[1]);
    var sanitizedSvg = svgContent.replace(/fill="[^"]*"/g, 'fill="currentColor"');
    var svgWithClasses = sanitizedSvg.replace(/<svg([^>]*)>/, "<svg$1 class=\"".concat(sizeClass, " \">"));
    return svgWithClasses;
}
function getSizeClass(size) {
    switch (size) {
        case "xs":
            return "w-4 h-4";
        case "sm":
            return "w-6 h-6";
        case "md":
            return "w-8 h-8";
        case "lg":
            return "w-10 h-10";
        case "xl":
            return "w-12 h-12";
        default:
            return "w-6 h-6";
    }
}
