"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarMobileSidebarLayout;
var react_1 = require("react");
var clsx_1 = require("clsx");
var internal_1 = require("@docusaurus/theme-common/internal");
var theme_common_1 = require("@docusaurus/theme-common");
// TODO Docusaurus v4: remove temporary inert workaround
//  See https://github.com/facebook/react/issues/17157
//  See https://github.com/radix-ui/themes/pull/509
function inertProps(inert) {
    var isBeforeReact19 = parseInt(react_1.version.split(".")[0], 10) < 19;
    if (isBeforeReact19) {
        return { inert: inert ? "" : undefined };
    }
    return { inert: inert };
}
function NavbarMobileSidebarPanel(_a) {
    var children = _a.children, inert = _a.inert;
    return (<div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.layout.navbar.mobileSidebar.panel, "navbar-sidebar__item menu")} {...inertProps(inert)}>
            {children}
        </div>);
}
function NavbarMobileSidebarLayout(_a) {
    var header = _a.header, primaryMenu = _a.primaryMenu, secondaryMenu = _a.secondaryMenu;
    var secondaryMenuShown = (0, internal_1.useNavbarSecondaryMenu)().shown;
    return (<div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.layout.navbar.mobileSidebar.container, "navbar-sidebar")}>
            {header}
            <div className={(0, clsx_1.default)("navbar-sidebar__items", {
            "navbar-sidebar__items--show-secondary": secondaryMenuShown,
        })}>
                <NavbarMobileSidebarPanel inert={secondaryMenuShown}>{primaryMenu}</NavbarMobileSidebarPanel>
                <NavbarMobileSidebarPanel inert={!secondaryMenuShown}>{secondaryMenu}</NavbarMobileSidebarPanel>
            </div>
        </div>);
}
