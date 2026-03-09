"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Index;
var react_1 = require("react");
var Translate_1 = require("@docusaurus/Translate");
var theme_common_1 = require("@docusaurus/theme-common");
var Layout_1 = require("@theme/Layout");
var Content_1 = require("@theme/NotFound/Content");
function Index() {
    var title = (0, Translate_1.translate)({
        id: "theme.NotFound.title",
        message: "Page Not Found",
    });
    return (<>
            <theme_common_1.PageMetadata title={title}/>
            <Layout_1.default>
                <Content_1.default />
            </Layout_1.default>
        </>);
}
