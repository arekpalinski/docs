"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocItemWrapper;
var react_1 = require("react");
var DocItem_1 = require("@theme-original/DocItem");
var DocsTopbar_1 = require("@site/src/components/DocsTopbar");
function DocItemWrapper(props) {
    var _a, _b;
    var title = (_a = props.content.metadata) === null || _a === void 0 ? void 0 : _a.title;
    var source = (_b = props.content.metadata) === null || _b === void 0 ? void 0 : _b.source;
    var frontMatter = props.content.frontMatter;
    var isDocsOrVersioned = (source === null || source === void 0 ? void 0 : source.startsWith("@site/docs/")) ||
        (source === null || source === void 0 ? void 0 : source.startsWith("@site/versioned_docs/")) ||
        (source === null || source === void 0 ? void 0 : source.startsWith("docs/")) ||
        (source === null || source === void 0 ? void 0 : source.startsWith("versioned_docs/"));
    var fileName = source === null || source === void 0 ? void 0 : source.split("/").pop();
    var isHomepage = fileName === "home.mdx";
    var isExcluded = isHomepage || fileName === "whats-new.mdx";
    var supportedLanguages = frontMatter.supported_languages;
    var showTopbar = Boolean(isDocsOrVersioned && !isExcluded);
    return (<>
            {showTopbar && <DocsTopbar_1.default title={title} supportedLanguages={supportedLanguages}/>}
            <div className="wrapper row">
                <div className="col flex-1 min-w-0">
                    <DocItem_1.default {...props}/>
                </div>
            </div>
        </>);
}
