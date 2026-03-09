"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CollapseButton;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Translate_1 = require("@docusaurus/Translate");
var Arrow_1 = require("@theme/Icon/Arrow");
var styles_module_css_1 = require("./styles.module.css");
function CollapseButton(_a) {
    var onClick = _a.onClick;
    return (<button type="button" title={(0, Translate_1.translate)({
            id: "theme.docs.sidebar.collapseButtonTitle",
            message: "Collapse sidebar",
            description: "The title attribute for collapse button of doc sidebar",
        })} aria-label={(0, Translate_1.translate)({
            id: "theme.docs.sidebar.collapseButtonAriaLabel",
            message: "Collapse sidebar",
            description: "The title attribute for collapse button of doc sidebar",
        })} className={(0, clsx_1.default)("button button--secondary button--outline", styles_module_css_1.default.collapseSidebarButton)} onClick={onClick}>
            <Arrow_1.default className={styles_module_css_1.default.collapseSidebarButtonIcon}/>
        </button>);
}
