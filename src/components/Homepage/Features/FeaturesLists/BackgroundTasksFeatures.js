"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BackgroundTasksFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function BackgroundTasksFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var backgroundTasksFeatures = [
        {
            title: "Expiration",
            icon: "document-expiration",
            url: "/".concat(activeVersion.label, "/server/extensions/expiration"),
            description: "Automatically scheduled documents cleanup",
        },
        {
            title: "Refresh",
            icon: "document-refresh",
            url: "/".concat(activeVersion.label, "/server/extensions/refresh"),
            description: "Automatically re-trigger your documents",
        },
        {
            title: "Archival",
            icon: "data-archival",
            url: "/".concat(activeVersion.label, "/data-archival/overview"),
            description: "Retain old documents access while boosting performance",
            minimumSupportedVersion: "6.0",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Background tasks
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {backgroundTasksFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
