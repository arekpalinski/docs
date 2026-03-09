"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocSidebarDesktopContent;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var Translate_1 = require("@docusaurus/Translate");
var DocSidebarItems_1 = require("@theme/DocSidebarItems");
var styles_module_css_1 = require("./styles.module.css");
function useShowAnnouncementBar() {
    var isActive = (0, internal_1.useAnnouncementBar)().isActive;
    var _a = (0, react_1.useState)(isActive), showAnnouncementBar = _a[0], setShowAnnouncementBar = _a[1];
    (0, internal_1.useScrollPosition)(function (_a) {
        var scrollY = _a.scrollY;
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [isActive]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent(_a) {
    var path = _a.path, sidebar = _a.sidebar, className = _a.className;
    var showAnnouncementBar = useShowAnnouncementBar();
    return (<nav aria-label={(0, Translate_1.translate)({
            id: "theme.docs.sidebar.navAriaLabel",
            message: "Docs sidebar",
            description: "The ARIA label for the sidebar navigation",
        })} className={(0, clsx_1.default)("menu thin-scrollbar", styles_module_css_1.default.menu, showAnnouncementBar && styles_module_css_1.default.menuWithAnnouncementBar, className)}>
            <ul className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
                <DocSidebarItems_1.default items={sidebar} activePath={path} level={1}/>
            </ul>
        </nav>);
}
