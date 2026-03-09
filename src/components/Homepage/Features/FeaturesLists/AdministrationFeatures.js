"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdministrationFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function AdministrationFeaturesGrid() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var administrationFeatures = [
        {
            title: "Studio",
            icon: "studio",
            url: "/".concat(activeVersion.label, "/studio/overview"),
            description: "State-of-the-art admin interface bundled in every RavenDB license",
        },
        {
            title: "RavenCLI",
            icon: "raven-cli",
            url: "/".concat(activeVersion.label, "/server/administration/cli"),
            description: "Simple yet powerful shell tool for server admin",
        },
        {
            title: "NLog",
            icon: "nlog",
            url: "/".concat(activeVersion.label, "/server/troubleshooting/logging#configuring-and-using-nlog"),
            description: "Seamless NLog integration to route RavenDB logs anywhere",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Administration
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {administrationFeatures.map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
