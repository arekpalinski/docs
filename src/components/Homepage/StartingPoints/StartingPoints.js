"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StartingPoints;
var StartingPointItem_1 = require("@site/src/components/Homepage/StartingPoints/StartingPointItem");
var Heading_1 = require("@theme/Heading");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function StartingPoints() {
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var startingPoints = [
        {
            title: "Developer",
            icon: "settings",
            url: "/".concat(activeVersion.label, "/start/getting-started#documentstore"),
            description: <>Learn how to create a client, connect to the server, handle documents and more</>,
        },
        {
            title: "DevOps",
            icon: "default",
            url: "/".concat(activeVersion.label, "/start/getting-started"),
            description: <>Learn how to install RavenDB, set up a cluster, maintain the database and more</>,
        },
    ];
    return (<section className="mb-8">
            <Heading_1.default as="h3">Starting points</Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {startingPoints.map(function (props, idx) { return (<StartingPointItem_1.default key={idx} {...props}/>); })}
            </div>
        </section>);
}
