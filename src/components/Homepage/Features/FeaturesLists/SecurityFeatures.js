"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SecurityFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function SecurityFeaturesGrid() {
    var pluginId = "default";
    var minimumCategorySupportedVersion = "4.0";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    if (minimumCategorySupportedVersion > activeVersion.label) {
        return null;
    }
    var securityFeatures = [
        {
            title: "Certificates",
            icon: "certificate",
            url: "/".concat(activeVersion.label, "/server/security/overview"),
            description: "Secure your server with X.509 certificates and fine-grained access control",
            minimumSupportedVersion: "4.0",
        },
        {
            title: "Encryption",
            icon: "encryption",
            url: "/".concat(activeVersion.label, "/server/security/encryption/encryption-at-rest"),
            description: "Transparent at-rest & in-transit, data security without code changes",
            minimumSupportedVersion: "4.0",
        },
        {
            title: "Audit Log",
            icon: "audit-logs",
            url: "/".concat(activeVersion.label, "/server/security/audit-log/audit-log-overview"),
            description: "Record who connected and what they did - built-in audit trail.",
            minimumSupportedVersion: "5.4",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Security
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {securityFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
