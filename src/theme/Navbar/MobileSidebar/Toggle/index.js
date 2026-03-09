"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MobileSidebarToggle;
var react_1 = require("react");
var internal_1 = require("@docusaurus/theme-common/internal");
var Translate_1 = require("@docusaurus/Translate");
var Icon_1 = require("@site/src/components/Common/Icon");
function MobileSidebarToggle() {
    var _a = (0, internal_1.useNavbarMobileSidebar)(), toggle = _a.toggle, shown = _a.shown;
    return (<button onClick={toggle} aria-label={(0, Translate_1.translate)({
            id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
            message: "Toggle navigation bar",
            description: "The ARIA label for hamburger menu button of mobile navigation",
        })} aria-expanded={shown} className="navbar__toggle clean-btn" type="button">
            <Icon_1.Icon icon="menu" size="sm"/>
        </button>);
}
