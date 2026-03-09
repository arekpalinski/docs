"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocsRoot;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var renderRoutes_1 = require("@docusaurus/renderRoutes");
var Layout_1 = require("@theme/Layout");
function DocsRoot(props) {
    return (<theme_common_1.HtmlClassNameProvider className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.wrapper.docsPages)}>
            <Layout_1.default>{(0, renderRoutes_1.default)(props.route.routes)}</Layout_1.default>
        </theme_common_1.HtmlClassNameProvider>);
}
