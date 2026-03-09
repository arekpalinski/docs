"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocItemTOCDesktop;
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var TOC_1 = require("@theme/TOC");
var useFilteredToc_1 = require("@site/src/theme/DocItem/TOC/useFilteredToc");
function DocItemTOCDesktop() {
    var _a = (0, client_1.useDoc)(), toc = _a.toc, frontMatter = _a.frontMatter;
    var filteredToc = (0, useFilteredToc_1.default)(toc);
    return (<div className="sticky top-[160px]">
            <h5 className="!mb-1">In this article</h5>
            <TOC_1.default toc={filteredToc} minHeadingLevel={frontMatter.toc_min_heading_level} maxHeadingLevel={frontMatter.toc_max_heading_level} className={theme_common_1.ThemeClassNames.docs.docTocDesktop}/>
        </div>);
}
