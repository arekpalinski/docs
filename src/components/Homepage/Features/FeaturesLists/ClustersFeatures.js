"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClustersFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function ClustersFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var clustersFeatures = [
        {
            title: "Sharding",
            icon: "sharding",
            url: "/".concat(activeVersion.label, "/sharding/overview"),
            description: "Partition dozens of terabytes across nodes for extreme scale",
            minimumSupportedVersion: "6.0",
        },
        {
            title: "Cluster-wide tasks",
            icon: "cluster-wide-tasks",
            url: "/".concat(activeVersion.label, "/server/clustering/distribution/highly-available-tasks"),
            description: "Cluster-wide, auto‑failover tasks (backup, ETL, subscriptions)",
        },
        {
            title: "Cluster-wide transactions",
            icon: "cluster-wide-transactions",
            url: "/".concat(activeVersion.label, "/server/clustering/cluster-transactions"),
            description: "Partition-tolerant ACID writes across a cluster",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Clusters
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {clustersFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
