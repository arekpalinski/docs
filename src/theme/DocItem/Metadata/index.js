"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MetadataWrapper;
var react_1 = require("react");
var Metadata_1 = require("@theme-original/DocItem/Metadata");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Head_1 = require("@docusaurus/Head");
function MetadataWrapper(props) {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var metadata = (0, client_1.useDoc)().metadata;
    var docSlug = metadata.slug;
    var canonicalUrl = "".concat(siteConfig.url, "/").concat(siteConfig.customFields.latestVersion).concat(docSlug);
    if (canonicalUrl.endsWith("/") == false) {
        canonicalUrl = canonicalUrl.concat("/");
    }
    return (<>
            <Metadata_1.default {...props}/>
            <Head_1.default>
                <link rel="canonical" href={canonicalUrl}/>
            </Head_1.default>
        </>);
}
