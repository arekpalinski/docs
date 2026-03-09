"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarMobileSidebar;
var react_1 = require("react");
var internal_1 = require("@docusaurus/theme-common/internal");
var Layout_1 = require("@theme/Navbar/MobileSidebar/Layout");
var Header_1 = require("@theme/Navbar/MobileSidebar/Header");
var PrimaryMenu_1 = require("@theme/Navbar/MobileSidebar/PrimaryMenu");
var SecondaryMenu_1 = require("@theme/Navbar/MobileSidebar/SecondaryMenu");
function NavbarMobileSidebar() {
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    (0, internal_1.useLockBodyScroll)(mobileSidebar.shown);
    if (!mobileSidebar.shouldRender) {
        return null;
    }
    return (<Layout_1.default header={<Header_1.default />} primaryMenu={<PrimaryMenu_1.default />} secondaryMenu={<SecondaryMenu_1.default />}/>);
}
