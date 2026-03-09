"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CloudFeatures;
var Heading_1 = require("@theme/Heading");
var CoreServiceFeatures_1 = require("./FeaturesLists/Cloud/CoreServiceFeatures");
var OperationsFeatures_1 = require("./FeaturesLists/Cloud/OperationsFeatures");
var MarketplaceEcosystemFeatures_1 = require("./FeaturesLists/Cloud/MarketplaceEcosystemFeatures");
function CloudFeatures() {
    return (<section className="mb-8">
            <Heading_1.default as="h3">Browse</Heading_1.default>
            <div className="mb-8">
                <CoreServiceFeatures_1.default />
            </div>
            <div className="mb-8">
                <OperationsFeatures_1.default />
            </div>
            <div className="mb-8">
                <MarketplaceEcosystemFeatures_1.default />
            </div>
        </section>);
}
