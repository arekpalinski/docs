"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QueryingFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function QueryingFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var queryingFeatures = [
        {
            title: "Raven Query Language",
            icon: "rql",
            url: "/".concat(activeVersion.label, "/querying/rql/what-is-rql"),
            description: "Simple yet powerful SQL-style queries",
        },
        {
            title: "Full-text search",
            icon: "full-text-search",
            url: "/".concat(activeVersion.label, "/client-api/session/querying/text-search/full-text-search"),
            description: "Cutting‑edge integrated search engine",
        },
        {
            title: "Patching",
            icon: "patch",
            url: "/".concat(activeVersion.label, "/client-api/operations/patching/single-document"),
            description: "Transform documents at scale with a script",
        },
        {
            title: "Facets",
            icon: "facets",
            url: "/".concat(activeVersion.label, "/indexes/querying/faceted-search"),
            description: "Slice and navigate through a large dataset",
        },
        {
            title: "MoreLikeThis",
            icon: "morelikethis",
            url: "/".concat(activeVersion.label, "/indexes/querying/morelikethis"),
            description: "Get similar documents based on content",
        },
        {
            title: "Spatial",
            icon: "global",
            url: "/".concat(activeVersion.label, "/indexes/querying/spatial"),
            description: "Search and sort by geographic location effortlessly",
            minimumSupportedVersion: "5.2",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Querying
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {queryingFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
