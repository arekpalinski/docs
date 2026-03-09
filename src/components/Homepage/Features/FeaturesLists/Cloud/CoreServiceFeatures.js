"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CoreServiceFeaturesGrid;
var Heading_1 = require("@theme/Heading");
var FeatureItem_1 = require("@site/src/components/Homepage/Features/FeatureItem");
function CoreServiceFeaturesGrid() {
    var coreServiceFeatures = [
        {
            title: "Tiers and Instances",
            icon: "dbgroup",
            url: "/cloud/cloud-instances",
            description: "Pick Free, Development, or Production-graded products, with premium or standard storage options",
        },
        {
            title: "Pricing, Payment and Billing",
            icon: "price-tag",
            url: "/cloud/cloud-pricing-payment-billing",
            description: "Learn more about on-demand & yearly pricing, billing, and payment configuration",
        },
    ];
    return (<>
            <Heading_1.default as="h4" className="!mb-2">
                Core service
            </Heading_1.default>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {coreServiceFeatures.map(function (props, idx) { return (<FeatureItem_1.default key={idx} {...props}/>); })}
            </div>
        </>);
}
