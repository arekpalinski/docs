"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocumentExtensionsFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function DocumentExtensionsFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var documentExtensionsFeatures = [
        {
            title: "Revisions",
            icon: "revisions",
            url: "/".concat(activeVersion.label, "/document-extensions/revisions/overview"),
            description: "Capture, track, and rewind any change",
        },
        {
            title: "Time series",
            icon: "timeseries",
            url: "/".concat(activeVersion.label, "/document-extensions/timeseries/overview"),
            description: "Store, query and aggregate timestamped data natively",
            minimumSupportedVersion: "5.0",
        },
        {
            title: "Attachments",
            icon: "attachment",
            url: "/".concat(activeVersion.label, "/document-extensions/attachments/overview"),
            description: "Attach binary files directly to documents - scalable, searchable",
        },
        {
            title: "Documents compression",
            icon: "documents-compression",
            url: "/".concat(activeVersion.label, "/server/storage/documents-compression"),
            description: "Automatically compress document content for storage savings",
            minimumSupportedVersion: "5.0",
        },
        {
            title: "Counters",
            icon: "new-counter",
            url: "/".concat(activeVersion.label, "/document-extensions/counters/overview"),
            description: "Simple, scalable, and conflict-free numeric counters",
        },
        {
            title: "Remote Attachments",
            icon: "remote-attachment",
            url: "/".concat(activeVersion.label, "/document-extensions/attachments/store-attachments/store-attachments-remote"),
            description: "Simple, scalable, and conflict-free numeric counters",
            minimumSupportedVersion: "7.2",
        },
        {
            title: "JSON Schema Validation",
            icon: "document-schema",
            url: "/".concat(activeVersion.label, "/documents/schema-validation/overview"),
            description: "Simple, scalable, and conflict-free numeric counters",
            minimumSupportedVersion: "7.2",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Document extensions
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {documentExtensionsFeatures
            .filter(function (feature) {
            return !feature.minimumSupportedVersion || feature.minimumSupportedVersion <= activeVersion.label;
        })
            .map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
