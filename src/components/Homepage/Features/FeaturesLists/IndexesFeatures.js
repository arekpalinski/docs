"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IndexesFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function IndexesFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var indexesFeatures = [
        {
            title: "Static indexes",
            icon: "index",
            url: "/".concat(activeVersion.label, "/indexes/creating-and-deploying"),
            description: "Complete control over precomputing & performance",
        },
        {
            title: "Auto indexes",
            icon: "auto-indexes",
            url: "/".concat(activeVersion.label, "/indexes/creating-and-deploying#auto-indexes"),
            description: "Self‑optimizing database with zero manual effort",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Indexes
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {indexesFeatures.map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
