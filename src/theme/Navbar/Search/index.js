"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarSearch;
var react_1 = require("react");
var clsx_1 = require("clsx");
var styles_module_css_1 = require("./styles.module.css");
function NavbarSearch(_a) {
    var children = _a.children, className = _a.className;
    return <div className={(0, clsx_1.default)(className, styles_module_css_1.default.navbarSearchContainer)}>{children}</div>;
}
