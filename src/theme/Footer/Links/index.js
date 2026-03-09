"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLinks;
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var MultiColumn_1 = require("@theme/Footer/Links/MultiColumn");
var Simple_1 = require("@theme/Footer/Links/Simple");
function FooterLinks(_a) {
    var links = _a.links;
    return (0, theme_common_1.isMultiColumnFooterLinks)(links) ? (<MultiColumn_1.default columns={links}/>) : (<Simple_1.default links={links}/>);
}
