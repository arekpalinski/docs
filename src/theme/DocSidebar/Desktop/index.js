"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var Logo_1 = require("@theme/Logo");
var CollapseButton_1 = require("@theme/DocSidebar/Desktop/CollapseButton");
var Content_1 = require("@theme/DocSidebar/Desktop/Content");
var styles_module_css_1 = require("./styles.module.css");
var Link_1 = require("@docusaurus/Link");
var SidebarVersionDropdown_1 = require("@site/src/components/SidebarVersionDropdown");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var Icon_1 = require("@site/src/components/Common/Icon");
var pathUtils_1 = require("../../../typescript/pathUtils");
function DocSidebarDesktop(_a) {
    var _b;
    var path = _a.path, sidebar = _a.sidebar, onCollapse = _a.onCollapse, isHidden = _a.isHidden;
    var _c = (0, theme_common_1.useThemeConfig)(), hideOnScroll = _c.navbar.hideOnScroll, hideable = _c.docs.sidebar.hideable;
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var latestVersion = (0, client_1.useLatestVersion)(pluginId);
    var versionLabel = (_b = activeVersion === null || activeVersion === void 0 ? void 0 : activeVersion.label) !== null && _b !== void 0 ? _b : latestVersion.label;
    var pathType = (0, pathUtils_1.getPathType)(path);
    var landingPagePath = (0, pathUtils_1.getLandingPagePath)(pathType, versionLabel);
    return (<div className={(0, clsx_1.default)(styles_module_css_1.default.sidebar, hideOnScroll && styles_module_css_1.default.sidebarWithHideableNavbar, isHidden && styles_module_css_1.default.sidebarHidden)}>
            {hideOnScroll && <Logo_1.default tabIndex={-1} className={styles_module_css_1.default.sidebarLogo}/>}
            <div className="menu thin-scrollbar menu_Y1UP shrink-0 !grow-0">
                <div className="menu__list-item-collapsible">
                    <Link_1.default to={landingPagePath} className="menu__link">
                        <Icon_1.Icon icon="home" size="xs" className="me-2"/> Start
                    </Link_1.default>
                </div>
                {pathType !== pathUtils_1.PathType.Guides && (<Link_1.default to="/guides" className="menu__link group">
                        <Icon_1.Icon icon="guides" size="xs" className="me-2"/> Guides
                        <small className="flex items-center ms-auto gap-1 text-[0.675rem] opacity-0 group-hover:opacity-100 !transition-all">
                            Switch <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                        </small>
                    </Link_1.default>)}
                {pathType !== pathUtils_1.PathType.Documentation && (<Link_1.default to={"/".concat(versionLabel)} className="menu__link group">
                        <Icon_1.Icon icon="database" size="xs" className="me-2"/> RavenDB Docs
                        <small className="flex items-center ms-auto gap-1 text-[0.675rem] opacity-0 group-hover:opacity-100 !transition-all">
                            Switch <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                        </small>
                    </Link_1.default>)}
                {pathType !== pathUtils_1.PathType.Cloud && (<Link_1.default to="/cloud" className="menu__link group">
                        <Icon_1.Icon icon="cloud" size="xs" className="me-2"/> RavenDB Cloud Docs
                        <small className="flex items-center ms-auto gap-1 text-[0.675rem] opacity-0 group-hover:opacity-100 !transition-all">
                            Switch <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                        </small>
                    </Link_1.default>)}
                <Link_1.default to="https://ravendb.net/community" className="menu__link group">
                    <Icon_1.Icon icon="community" size="xs" className="me-2"/> Community
                    <Icon_1.Icon icon="newtab" size="xs" className="ms-auto opacity-0 group-hover:opacity-100 !transition-all"/>
                </Link_1.default>
                {pathType === pathUtils_1.PathType.Documentation && (<Link_1.default to={"/".concat(versionLabel, "/whats-new")} className="menu__link">
                        <Icon_1.Icon icon="star-filled" size="xs" className="me-2"/> What's new
                    </Link_1.default>)}
            </div>
            {pathType !== pathUtils_1.PathType.Guides && <hr className="!my-0 !mx-3 !bg-black/10 dark:!bg-white/10"/>}
            {pathType === pathUtils_1.PathType.Documentation && <SidebarVersionDropdown_1.default />}
            {pathType !== pathUtils_1.PathType.Guides && <Content_1.default path={path} sidebar={sidebar}/>}
            {hideable && <CollapseButton_1.default onClick={onCollapse}/>}
        </div>);
}
exports.default = react_1.default.memo(DocSidebarDesktop);
