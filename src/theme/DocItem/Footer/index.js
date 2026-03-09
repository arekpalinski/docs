"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocItemFooter;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var EditMetaRow_1 = require("@theme/EditMetaRow");
var hiddenEditPageRoutes_1 = require("@site/src/typescript/hiddenEditPageRoutes");
var LanguageStore_1 = require("@site/src/components/LanguageStore");
var SeeAlso_1 = require("@site/src/components/SeeAlso");
var Tag_1 = require("../../Tag");
var getEditUrlWithLanguage = function (url, language, supportedLanguages) {
    if (!supportedLanguages || supportedLanguages.length === 0) {
        return url;
    }
    var lastSlashIndex = url.lastIndexOf("/");
    var path = url.substring(0, lastSlashIndex + 1);
    var filename = url.substring(lastSlashIndex + 1).replace(".mdx", "");
    return "".concat(path, "_").concat(filename, "-").concat(language, ".mdx");
};
function DocItemFooter() {
    var language = (0, LanguageStore_1.useLanguage)().language;
    var metadata = (0, client_1.useDoc)().metadata;
    var editUrl = metadata.editUrl, lastUpdatedAt = metadata.lastUpdatedAt, lastUpdatedBy = metadata.lastUpdatedBy, tags = metadata.tags, permalink = metadata.permalink, frontMatter = metadata.frontMatter;
    var see_also = frontMatter.see_also;
    var isPathHidden = hiddenEditPageRoutes_1.HIDDEN_EDIT_PAGE_ROUTES.some(function (route) {
        return permalink.endsWith(route);
    });
    var canDisplayTagsRow = tags.length > 0;
    var canDisplayEditMetaRow = !!editUrl && !isPathHidden;
    var canDisplaySeeAlso = see_also && see_also.length > 0;
    if (!canDisplayTagsRow && !canDisplayEditMetaRow && !canDisplaySeeAlso) {
        return null;
    }
    return (<footer className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docFooter, "mt-4")}>
            {canDisplayTagsRow && (<div className="flex flex-wrap gap-2">
                    {tags.map(function (tag) { return (<Tag_1.default key={tag.label} permalink={tag.permalink}>
                            {tag.label}
                        </Tag_1.default>); })}
                </div>)}
            {canDisplayEditMetaRow && (<EditMetaRow_1.default className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docFooterEditMetaRow)} editUrl={getEditUrlWithLanguage(editUrl, language, metadata.frontMatter.supported_languages)} lastUpdatedAt={lastUpdatedAt} lastUpdatedBy={lastUpdatedBy}/>)}
            {canDisplaySeeAlso && <SeeAlso_1.default items={see_also} className="mb-6"/>}
        </footer>);
}
