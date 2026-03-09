"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Features;
var Heading_1 = require("@theme/Heading");
var AiFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/AiFeatures");
var IndexesFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/IndexesFeatures");
var QueryingFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/QueryingFeatures");
var DocumentExtensionsFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/DocumentExtensionsFeatures");
var BackgroundTasksFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/BackgroundTasksFeatures");
var ClustersFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/ClustersFeatures");
var OngoingTasksFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/OngoingTasksFeatures");
var SecurityFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/SecurityFeatures");
var MonitoringFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/MonitoringFeatures");
var AdministrationFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/AdministrationFeatures");
var IntegrationFeatures_1 = require("@site/src/components/Homepage/Features/FeaturesLists/IntegrationFeatures");
function Features() {
    return (<section className="mb-8">
            <Heading_1.default as="h3">Browse by feature</Heading_1.default>
            <div className="mb-8">
                <AiFeatures_1.default />
            </div>
            <div className="mb-8">
                <IndexesFeatures_1.default />
            </div>
            <div className="mb-8">
                <QueryingFeatures_1.default />
            </div>
            <div className="mb-8">
                <DocumentExtensionsFeatures_1.default />
            </div>
            <div className="mb-8">
                <BackgroundTasksFeatures_1.default />
            </div>
            <div className="mb-8">
                <ClustersFeatures_1.default />
            </div>
            <div className="mb-8">
                <OngoingTasksFeatures_1.default />
            </div>
            <div className="mb-8">
                <SecurityFeatures_1.default />
            </div>
            <div className="mb-8">
                <MonitoringFeatures_1.default />
            </div>
            <div className="mb-8">
                <AdministrationFeatures_1.default />
            </div>
            <div className="mb-8">
                <IntegrationFeatures_1.default />
            </div>
        </section>);
}
