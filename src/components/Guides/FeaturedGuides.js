"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeaturedGuides;
var react_1 = require("react");
var CardWithImage_1 = require("../Common/CardWithImage");
var Heading_1 = require("@theme/Heading");
var useGlobalData_1 = require("@docusaurus/useGlobalData");
function FeaturedGuides(_a) {
    var guidesTitles = _a.guidesTitles;
    var pluginData = (0, useGlobalData_1.usePluginData)("recent-guides-plugin");
    var allGuides = (pluginData === null || pluginData === void 0 ? void 0 : pluginData.guides) || [];
    var featuredGuides = (0, react_1.useMemo)(function () {
        if (!guidesTitles) {
            return allGuides.slice(0, 2);
        }
        var filtered = guidesTitles
            .map(function (title) { return allGuides.find(function (guide) { return guide.title === title; }); })
            .filter(function (guide) { return guide !== undefined; })
            .slice(0, 2);
        return filtered;
    }, [allGuides, guidesTitles]);
    return (<div className="flex flex-col gap-6">
            <Heading_1.default as="h2" className="!mb-0">
                Featured guides
            </Heading_1.default>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredGuides.map(function (guide, index) { return (<CardWithImage_1.default key={guide.permalink} title={guide.title} description={guide.description} imgSrc={guide.image} imgIcon={guide.icon} url={guide.externalUrl || guide.permalink} tags={guide.tags} animationDelay={index * 50}/>); })}
            </div>
        </div>);
}
