"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavbarItems = useNavbarItems;
exports.NavbarItems = NavbarItems;
exports.default = NavbarContent;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var NavbarItem_1 = require("@theme/NavbarItem");
var ColorModeToggle_1 = require("@theme/Navbar/ColorModeToggle");
var SearchBar_1 = require("@theme/SearchBar");
var Toggle_1 = require("@theme/Navbar/MobileSidebar/Toggle");
var Logo_1 = require("@theme/Navbar/Logo");
var Search_1 = require("@theme/Navbar/Search");
var styles_module_css_1 = require("./styles.module.css");
function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return (0, theme_common_1.useThemeConfig)().navbar.items;
}
function NavbarItems(_a) {
    var items = _a.items;
    return (<>
            {items.map(function (item, i) { return (<theme_common_1.ErrorCauseBoundary key={i} onError={function (error) {
                return new Error("A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n".concat(JSON.stringify(item, null, 2)), { cause: error });
            }}>
                    <NavbarItem_1.default {...item}/>
                </theme_common_1.ErrorCauseBoundary>); })}
        </>);
}
function NavbarContentLayout(_a) {
    var left = _a.left, right = _a.right;
    return (<div className="navbar__inner">
            <div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.layout.navbar.containerLeft, "navbar__items")}>{left}</div>
            <div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.layout.navbar.containerRight, "navbar__items navbar__items--right")}>
                {right}
            </div>
        </div>);
}
function NavbarContent() {
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    var items = useNavbarItems();
    var _a = (0, internal_1.splitNavbarItems)(items), leftItems = _a[0], rightItems = _a[1];
    var searchBarItem = items.find(function (item) { return item.type === "search"; });
    return (<NavbarContentLayout left={
        // TODO stop hardcoding items?
        <>
                    {!mobileSidebar.disabled && <Toggle_1.default />}
                    <Logo_1.default />
                    <NavbarItems items={leftItems}/>
                </>} right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
                    <NavbarItems items={rightItems}/>
                    <ColorModeToggle_1.default className={styles_module_css_1.default.colorModeToggle}/>
                    {!searchBarItem && (<Search_1.default>
                            <SearchBar_1.default />
                        </Search_1.default>)}
                </>}/>);
}
