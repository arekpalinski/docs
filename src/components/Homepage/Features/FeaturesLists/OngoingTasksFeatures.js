"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OngoingTasksFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function OngoingTasksFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var ongoingTasksFeatures = [
        {
            title: "Replication",
            icon: "external-replication",
            url: "/".concat(activeVersion.label, "/server/clustering/replication/replication-overview"),
            description: "Keeps your clusters in sync for high availability",
        },
        {
            title: "Subscriptions",
            icon: "subscriptions",
            url: "/".concat(activeVersion.label, "/client-api/data-subscriptions/what-are-data-subscriptions"),
            description: "Subscribe to defined documents, trigger your worker routines on field updates",
        },
        {
            title: "Periodic backups",
            icon: "periodic-backup",
            url: "/".concat(activeVersion.label, "/server/ongoing-tasks/backup-overview"),
            description: "Scheduled full & incremental backups",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Ongoing tasks
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ongoingTasksFeatures.map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
