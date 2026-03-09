"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MonitoringFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function MonitoringFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var monitoringFeatures = [
        {
            title: "Cluster dashboard",
            icon: "cluster-dashboard",
            url: "/".concat(activeVersion.label, "/studio/cluster/cluster-dashboard/cluster-dashboard-overview"),
            description: "Customizable live view of your cluster's health and performance",
        },
        {
            title: "SNMP monitoring",
            icon: "snmp",
            url: "/".concat(activeVersion.label, "/server/administration/snmp/snmp-overview"),
            description: "Easily expose RavenDB metrics to Zabbix/Datadog/PTRG",
        },
        {
            title: "Telegraf and Grafana",
            icon: "telegraf-and-grafana",
            url: "/".concat(activeVersion.label, "/server/administration/monitoring/telegraf"),
            description: "Effortlessly push RavenDB metrics into your dashboards via plugin",
            minimumSupportedVersion: "5.2",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Monitoring
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {monitoringFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
