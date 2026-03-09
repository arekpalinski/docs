"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var DocSidebarItems_1 = require("@theme/DocSidebarItems");
var Link_1 = require("@docusaurus/Link");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var Icon_1 = require("@site/src/components/Common/Icon");
var SidebarVersionDropdown_1 = require("@site/src/components/SidebarVersionDropdown");
var pathUtils_1 = require("../../../typescript/pathUtils");
function DocSidebarMobileSecondaryMenu(_a) {
    var _b;
    var sidebar = _a.sidebar, path = _a.path;
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var latestVersion = (0, client_1.useLatestVersion)(pluginId);
    var versionLabel = (_b = activeVersion === null || activeVersion === void 0 ? void 0 : activeVersion.label) !== null && _b !== void 0 ? _b : latestVersion.label;
    var pathType = (0, pathUtils_1.getPathType)(path);
    var landingPagePath = (0, pathUtils_1.getLandingPagePath)(pathType, versionLabel);
    return (<ul className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
            <li className="menu__list-item">
                <div className="menu__list-item-collapsible">
                    <Link_1.default to={landingPagePath} className="menu__link" onClick={function () { return mobileSidebar.toggle(); }}>
                        <Icon_1.Icon icon="home" size="xs" className="me-2"/> Start
                    </Link_1.default>
                </div>
            </li>
            {pathType !== pathUtils_1.PathType.Guides && (<Link_1.default to="/guides" className="menu__link group">
                    <Icon_1.Icon icon="guides" size="xs" className="me-2"/> Guides
                    <small className="flex items-center ms-auto gap-1 text-[0.675rem]">
                        Switch <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                    </small>
                </Link_1.default>)}
            {pathType !== pathUtils_1.PathType.Documentation && (<Link_1.default to={"/".concat(versionLabel)} className="menu__link group">
                    <Icon_1.Icon icon="database" size="xs" className="me-2"/> RavenDB Docs
                    <small className="flex items-center ms-auto gap-1 text-[0.675rem]">
                        Switch <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                    </small>
                </Link_1.default>)}
            {pathType !== pathUtils_1.PathType.Cloud && (<Link_1.default to="/cloud" className="menu__link group">
                    <Icon_1.Icon icon="cloud" size="xs" className="me-2"/> RavenDB Cloud Docs
                    <small className="flex items-center ms-auto gap-1 text-[0.675rem]">
                        Switch <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                    </small>
                </Link_1.default>)}
            <Link_1.default to="https://ravendb.net/community" className="menu__link group">
                <Icon_1.Icon icon="community" size="xs" className="me-2"/> Community
                <Icon_1.Icon icon="newtab" size="xs" className="ms-auto"/>
            </Link_1.default>
            {pathType !== pathUtils_1.PathType.Cloud && pathType !== pathUtils_1.PathType.Guides && (<li className="menu__list-item">
                    <Link_1.default to={"/".concat(versionLabel, "/whats-new")} className="menu__link" onClick={function () { return mobileSidebar.toggle(); }}>
                        <Icon_1.Icon icon="star-filled" size="xs" className="me-2"/> What's new
                    </Link_1.default>
                </li>)}
            {pathType !== pathUtils_1.PathType.Guides && (<li className="menu__list-item !my-3">
                    <hr className="!my-0 !mx-3 !bg-black/10 dark:!bg-white/10"/>
                </li>)}
            {pathType !== pathUtils_1.PathType.Cloud && pathType !== pathUtils_1.PathType.Guides && <SidebarVersionDropdown_1.default />}
            {pathType !== pathUtils_1.PathType.Guides && (<DocSidebarItems_1.default items={sidebar} activePath={path} onItemClick={function (item) {
                // Mobile sidebar should only be closed if the category has a link
                if (item.type === "category" && item.href) {
                    mobileSidebar.toggle();
                }
                if (item.type === "link") {
                    mobileSidebar.toggle();
                }
            }} level={1}/>)}
        </ul>);
}
function DocSidebarMobile(props) {
    return <theme_common_1.NavbarSecondaryMenuFiller component={DocSidebarMobileSecondaryMenu} props={props}/>;
}
exports.default = react_1.default.memo(DocSidebarMobile);
