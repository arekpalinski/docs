"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocItemTOCMobile;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var TOCCollapsible_1 = require("@theme/TOCCollapsible");
var styles_module_css_1 = require("./styles.module.css");
var useFilteredToc_1 = require("@site/src/theme/DocItem/TOC/useFilteredToc");
function DocItemTOCMobile() {
    var _a = (0, client_1.useDoc)(), toc = _a.toc, frontMatter = _a.frontMatter;
    var filteredToc = (0, useFilteredToc_1.default)(toc);
    return (<TOCCollapsible_1.default toc={filteredToc} minHeadingLevel={frontMatter.toc_min_heading_level} maxHeadingLevel={frontMatter.toc_max_heading_level} className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docTocMobile, styles_module_css_1.default.tocMobile)}/>);
}
