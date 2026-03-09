"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AiFeaturesGrid;
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var Heading_1 = require("@theme/Heading");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function AiFeaturesGrid() {
    var pluginId = "default";
    var minimumCategorySupportedVersion = "7.0";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    if (minimumCategorySupportedVersion > activeVersion.label) {
        return null;
    }
    var aiFeatures = [
        {
            title: "AI agents",
            icon: "ai-agents",
            url: "/".concat(activeVersion.label, "/ai-integration/ai-agents/start"),
            description: "Database-native agents that query & act safely",
            minimumSupportedVersion: "7.1",
        },
        {
            title: "Vector search",
            icon: "vector-search",
            url: "/".concat(activeVersion.label, "/ai-integration/vector-search/start"),
            description: "Find contextually relevant data",
            minimumSupportedVersion: "7.0",
        },
        {
            title: "GenAI tasks",
            icon: "genai",
            url: "/".concat(activeVersion.label, "/ai-integration/gen-ai-integration/start"),
            description: "Empower your application using intelligent task",
            minimumSupportedVersion: "7.1",
        },
        {
            title: "Embeddings generation",
            icon: "ai-etl",
            url: "/".concat(activeVersion.label, "/ai-integration/generating-embeddings/start"),
            description: "Automatically turn your data into AI-ready vectors",
            minimumSupportedVersion: "7.0",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                AI
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {aiFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
