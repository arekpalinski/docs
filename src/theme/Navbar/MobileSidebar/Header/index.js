"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarMobileSidebarHeader;
var react_1 = require("react");
var internal_1 = require("@docusaurus/theme-common/internal");
var Translate_1 = require("@docusaurus/Translate");
var ColorModeToggle_1 = require("@theme/Navbar/ColorModeToggle");
var Logo_1 = require("@theme/Navbar/Logo");
var Icon_1 = require("@site/src/components/Common/Icon");
function CloseButton() {
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    return (<button type="button" aria-label={(0, Translate_1.translate)({
            id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
            message: "Close navigation bar",
            description: "The ARIA label for close button of mobile sidebar",
        })} className="clean-btn navbar-sidebar__close" onClick={function () { return mobileSidebar.toggle(); }}>
            <Icon_1.Icon icon="close" size="sm"/>
        </button>);
}
function NavbarMobileSidebarHeader() {
    return (<div className="navbar-sidebar__brand">
            <Logo_1.default />
            <ColorModeToggle_1.default className="margin-right--md"/>
            <CloseButton />
        </div>);
}
