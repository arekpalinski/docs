"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AllGuidesPage;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var SearchMetadata_1 = require("@theme/SearchMetadata");
var Heading_1 = require("@theme/Heading");
var CardWithImage_1 = require("@site/src/components/Common/CardWithImage");
var GuideListItem_1 = require("@site/src/components/Common/GuideListItem");
var LayoutSwitcher_1 = require("@site/src/components/Common/LayoutSwitcher");
var useGlobalData_1 = require("@docusaurus/useGlobalData");
var DocSidebar_1 = require("@theme/DocSidebar");
var styles_module_css_1 = require("@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css");
var styles_module_css_2 = require("@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css");
var Layout_1 = require("@theme/Layout");
var CustomBreadcrumbs_1 = require("@site/src/components/Common/CustomBreadcrumbs");
function AllGuidesPageMetadata() {
    return (<>
            <theme_common_1.PageMetadata title="All Guides" description="Browse all available guides"/>
            <SearchMetadata_1.default tag="all_guides"/>
        </>);
}
function AllGuidesPageContent() {
    var guidesData = (0, useGlobalData_1.usePluginData)("recent-guides-plugin");
    var _a = (0, react_1.useState)("grid"), layoutMode = _a[0], setLayoutMode = _a[1];
    var guides = (guidesData === null || guidesData === void 0 ? void 0 : guidesData.guides) || [];
    var sortedGuides = (0, react_1.useMemo)(function () {
        return __spreadArray([], guides, true).filter(function (guide) { return guide.id !== "home"; }).sort(function (a, b) { return b.lastUpdatedAt - a.lastUpdatedAt; });
    }, [guides]);
    return (<theme_common_1.HtmlClassNameProvider className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.wrapper.docsPages, theme_common_1.ThemeClassNames.page.docsDocPage)}>
            <div className={styles_module_css_2.default.docRoot}>
                <aside className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarContainer, styles_module_css_1.default.docSidebarContainer)}>
                    <DocSidebar_1.default sidebar={[]} path="/guides" onCollapse={function () { }} isHidden={false}/>
                </aside>
                <main className="container padding-top--md">
                    <div className="row">
                        <main className="col">
                            <CustomBreadcrumbs_1.default items={[{ label: "Guides", href: "/guides" }, { label: "All Guides" }]}/>
                            <div className="flex flex-col gap-8 mb-8">
                                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <Heading_1.default as="h1" className="!mb-0">
                                            All Guides
                                        </Heading_1.default>
                                        <span className={(0, clsx_1.default)("flex items-center justify-center rounded-full font-bold leading-none", "w-8 h-8 text-[12px]", "bg-black/10", "dark:bg-white/20 dark:text-white")}>
                                            {sortedGuides.length}
                                        </span>
                                    </div>
                                    <LayoutSwitcher_1.default layoutMode={layoutMode} onLayoutChange={setLayoutMode}/>
                                </header>
                                <div className="relative">
                                    {layoutMode === "grid" ? (<div className={(0, clsx_1.default)("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", "animate-in fade-in")}>
                                            {sortedGuides.map(function (guide, index) {
                var formattedDate = guide.lastUpdatedAt
                    ? new Date(guide.lastUpdatedAt * 1000).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })
                    : undefined;
                return (<CardWithImage_1.default key={guide.id} title={guide.title} description={guide.description} url={guide.externalUrl || guide.permalink} imgSrc={guide.image} imgIcon={guide.icon} tags={guide.tags} date={formattedDate} animationDelay={index * 50}/>);
            })}
                                        </div>) : (<div className={(0, clsx_1.default)("flex flex-col", "animate-in fade-in")}>
                                            {sortedGuides.map(function (guide, index) {
                var formattedDate = guide.lastUpdatedAt
                    ? new Date(guide.lastUpdatedAt * 1000).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })
                    : undefined;
                return (<div key={guide.id} className="animate-in fade-in slide-in-from-left-4" style={{
                        animationDelay: "".concat(index * 30, "ms"),
                        animationDuration: "300ms",
                        animationFillMode: "backwards",
                    }}>
                                                        <GuideListItem_1.default title={guide.title} url={guide.externalUrl || guide.permalink} tags={guide.tags} date={formattedDate}/>
                                                    </div>);
            })}
                                        </div>)}
                                </div>
                            </div>
                        </main>
                    </div>
                </main>
            </div>
        </theme_common_1.HtmlClassNameProvider>);
}
function AllGuidesPage() {
    return (<Layout_1.default>
            <AllGuidesPageMetadata />
            <AllGuidesPageContent />
        </Layout_1.default>);
}
