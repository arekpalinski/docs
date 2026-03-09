"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TOCCollapsibleCollapseButton;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Translate_1 = require("@docusaurus/Translate");
var styles_module_css_1 = require("./styles.module.css");
function TOCCollapsibleCollapseButton(_a) {
    var collapsed = _a.collapsed, props = __rest(_a, ["collapsed"]);
    return (<button type="button" {...props} className={(0, clsx_1.default)("clean-btn", styles_module_css_1.default.tocCollapsibleButton, !collapsed && styles_module_css_1.default.tocCollapsibleButtonExpanded, props.className)}>
            <Translate_1.default id="theme.TOCCollapsible.toggleButtonLabel" description="The label used by the button on the collapsible TOC component">
                In this article
            </Translate_1.default>
        </button>);
}
