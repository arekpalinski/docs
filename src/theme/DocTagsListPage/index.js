"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocTagsListPage;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var TagsListByLetter_1 = require("@theme/TagsListByLetter");
var SearchMetadata_1 = require("@theme/SearchMetadata");
var Heading_1 = require("@theme/Heading");
var Icon_1 = require("@site/src/components/Common/Icon");
var DocSidebar_1 = require("@theme/DocSidebar");
var styles_module_css_1 = require("@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css");
var styles_module_css_2 = require("@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css");
var CustomBreadcrumbs_1 = require("@site/src/components/Common/CustomBreadcrumbs");
function DocTagsListPageMetadata(_a) {
    var title = _a.title;
    return (<>
            <theme_common_1.PageMetadata title={title}/>
            <SearchMetadata_1.default tag="doc_tags_list"/>
        </>);
}
function DocTagsListPageContent(_a) {
    var tags = _a.tags, title = _a.title;
    var _b = (0, react_1.useState)(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var filteredTags = tags.filter(function (tag) { return tag.label.toLowerCase().includes(searchQuery.toLowerCase()); });
    return (<theme_common_1.HtmlClassNameProvider className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.wrapper.docsPages, theme_common_1.ThemeClassNames.page.docsDocPage)}>
            <div className={styles_module_css_2.default.docRoot}>
                <aside className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarContainer, styles_module_css_1.default.docSidebarContainer)}>
                    <DocSidebar_1.default sidebar={[]} path="/guides" onCollapse={function () { }} isHidden={false}/>
                </aside>
                <main className="container padding-top--md">
                    <div className="row">
                        <main className="col">
                            <CustomBreadcrumbs_1.default items={[{ label: "Guides", href: "/guides" }, { label: "Tags" }]}/>
                            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                                <div className="flex items-center gap-4">
                                    <Heading_1.default as="h1" className="!mb-0">
                                        {title}
                                    </Heading_1.default>
                                </div>
                                <div className="relative w-full sm:max-w-[300px]">
                                    <input type="search" placeholder="Filter tags..." value={searchQuery} onChange={function (e) { return setSearchQuery(e.target.value); }} className={(0, clsx_1.default)("w-full py-2 px-4 rounded-full text-sm font-normal", "border border-black/10 dark:border-white/10", "hover:border-black/20 dark:hover:border-white/20", "outline-none focus:bg-black/5 dark:focus:bg-white/5 focus:border-black/20 dark:focus:border-white/20 transition-all")}/>
                                </div>
                            </header>
                            {filteredTags.length > 0 ? (<TagsListByLetter_1.default tags={filteredTags}/>) : (<div className="flex flex-col items-center justify-center py-16 text-center">
                                    <Icon_1.Icon icon="search" size="lg" className="opacity-20 mb-4"/>
                                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400 !mb-1">
                                        No tags found
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">
                                        Try adjusting your search filter
                                    </p>
                                </div>)}
                        </main>
                    </div>
                </main>
            </div>
        </theme_common_1.HtmlClassNameProvider>);
}
function DocTagsListPage(props) {
    var title = "Browse by topic";
    return (<>
            <DocTagsListPageMetadata {...props} title={title}/>
            <DocTagsListPageContent {...props} title={title}/>
        </>);
}
