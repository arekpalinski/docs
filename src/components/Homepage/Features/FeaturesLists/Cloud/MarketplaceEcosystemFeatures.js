"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarketplaceEcosystemFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
function MarketplaceEcosystemFeaturesGrid() {
    var marketplaceEcosystemFeatures = [
        {
            title: "Microsoft Azure Marketplace",
            icon: "azure",
            url: "/cloud/cloud-microsoft-azure-marketplace",
            description: "Subscribe via Azure billing",
        },
        {
            title: "AWS Marketplace",
            icon: "aws",
            url: "/cloud/cloud-aws-marketplace",
            description: "Subscribe via AWS billing",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Marketplace & ecosystem
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {marketplaceEcosystemFeatures.map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
