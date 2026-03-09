"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LayoutWrapper;
var react_1 = require("react");
var Layout_1 = require("@theme-original/Layout");
var MarkdownImageLightbox_1 = require("@site/src/components/MarkdownImageLightbox");
function LayoutWrapper(props) {
    return (<>
            <Layout_1.default {...props}/>
            <MarkdownImageLightbox_1.default />
        </>);
}
