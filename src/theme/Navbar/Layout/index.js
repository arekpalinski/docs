"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarLayout;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var Translate_1 = require("@docusaurus/Translate");
var MobileSidebar_1 = require("@theme/Navbar/MobileSidebar");
var styles_module_css_1 = require("./styles.module.css");
function NavbarBackdrop(props) {
    return <div role="presentation" {...props} className={(0, clsx_1.default)("navbar-sidebar__backdrop", props.className)}/>;
}
function NavbarLayout(_a) {
    var children = _a.children;
    var _b = (0, theme_common_1.useThemeConfig)().navbar, hideOnScroll = _b.hideOnScroll, style = _b.style;
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    var _c = (0, internal_1.useHideableNavbar)(hideOnScroll), navbarRef = _c.navbarRef, isNavbarVisible = _c.isNavbarVisible;
    return (<nav ref={navbarRef} aria-label={(0, Translate_1.translate)({
            id: "theme.NavBar.navAriaLabel",
            message: "Main",
            description: "The ARIA label for the main navigation",
        })} className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.layout.navbar.container, "navbar", "navbar--fixed-top", hideOnScroll && [styles_module_css_1.default.navbarHideable, !isNavbarVisible && styles_module_css_1.default.navbarHidden], {
            "navbar--dark": style === "dark",
            "navbar--primary": style === "primary",
            "navbar-sidebar--show": mobileSidebar.shown,
        })}>
            {children}
            <NavbarBackdrop onClick={mobileSidebar.toggle}/>
            <MobileSidebar_1.default />
        </nav>);
}
