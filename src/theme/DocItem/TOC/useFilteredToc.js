"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useFilteredToc;
var LanguageStore_1 = require("@site/src/components/LanguageStore");
var react_1 = require("react");
// By default, Markdown headings within hideable areas are added to the TOC.
// With our current language switching implementation, this leads to default TOC being filled with headings from
// *all* languages, instead of only currently selected one. To tackle this, we filter out TOC ourselves.
//
// As per https://github.com/facebook/docusaurus/issues/3915#issuecomment-2052403930,
// the TOC is computed statically at MDX compilation time, which means we can't do this via React.
//
// Docusaurus team has an open issue for this problem:
// https://github.com/facebook/docusaurus/issues/6201
function useFilteredToc(originalToc) {
    var language = (0, LanguageStore_1.useLanguage)().language;
    var _a = (0, react_1.useState)([]), filteredToc = _a[0], setFilteredToc = _a[1];
    (0, react_1.useEffect)(function () {
        setFilteredToc(getFilteredToc(originalToc));
    }, [language, originalToc]);
    return filteredToc;
}
function getFilteredToc(originalToc) {
    var uniqueIds = new Set(originalToc.map(function (item) { return item.id; }));
    var markdownEl = document.querySelector(".theme-doc-markdown");
    if (!markdownEl) {
        return originalToc;
    }
    var filteredToc = [];
    uniqueIds.forEach(function (id) {
        // eslint-disable-next-line no-undef
        var headingEl = markdownEl.querySelector("#".concat(CSS.escape(id)));
        if (headingEl) {
            filteredToc.push(originalToc.find(function (item) { return item.id === id; }));
        }
    });
    return filteredToc;
}
