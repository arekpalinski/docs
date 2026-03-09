"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarMobilePrimaryMenu;
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var NavbarItem_1 = require("@theme/NavbarItem");
function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return (0, theme_common_1.useThemeConfig)().navbar.items;
}
// The primary menu displays the navbar items
function NavbarMobilePrimaryMenu() {
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    // TODO how can the order be defined for mobile?
    // Should we allow providing a different list of items?
    var items = useNavbarItems();
    return (<ul className="menu__list">
            {items.map(function (item, i) { return (<NavbarItem_1.default mobile {...item} onClick={function () { return mobileSidebar.toggle(); }} key={i}/>); })}
        </ul>);
}
