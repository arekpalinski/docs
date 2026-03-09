"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RecentGuides;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Heading_1 = require("@theme/Heading");
var Icon_1 = require("@site/src/components/Common/Icon");
var RecentGuidesList_1 = require("./RecentGuidesList");
var clsx_1 = require("clsx");
var useGlobalData_1 = require("@docusaurus/useGlobalData");
function getRelativeTime(timestampSeconds) {
    var diffInSeconds = Math.floor(Date.now() / 1000 - timestampSeconds);
    var intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
    ];
    for (var _i = 0, intervals_1 = intervals; _i < intervals_1.length; _i++) {
        var interval = intervals_1[_i];
        var count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            var label = count === 1 ? interval.label : "".concat(interval.label, "s");
            return "".concat(count, " ").concat(label, " ago");
        }
    }
    return "Just now";
}
function RecentGuides() {
    var pluginData = (0, useGlobalData_1.usePluginData)("recent-guides-plugin");
    var docs = (pluginData === null || pluginData === void 0 ? void 0 : pluginData.guides) || [];
    var recentGuides = docs
        .filter(function (doc) { return doc.id !== "home"; })
        .map(function (doc) { return ({
        title: doc.title || doc.id,
        url: doc.externalUrl || doc.permalink,
        tags: doc.tags || [],
        time: doc.lastUpdatedAt ? getRelativeTime(doc.lastUpdatedAt) : "Recently",
        lastUpdatedAt: doc.lastUpdatedAt || 0,
    }); })
        .slice(0, 10);
    return (<div className="flex flex-col gap-6 xl:h-[0px] xl:min-h-full">
            <div className="flex flex-wrap items-center justify-between shrink-0">
                <Heading_1.default as="h2" className="!mb-0">
                    Recent guides
                </Heading_1.default>
                <Link_1.default to="/guides/all" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline group">
                    See all
                    <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                </Link_1.default>
            </div>
            <div className={(0, clsx_1.default)("border border-black/10 dark:border-white/10 rounded-2xl bg-black/5 dark:bg-white/5", "overflow-y-auto flex flex-col flex-1 min-h-0", "scrollbar-thin scrollbar-thumb-black/10 dark:scrollbar-thumb-white/10 scrollbar-track-transparent")}>
                <RecentGuidesList_1.default guides={recentGuides}/>
            </div>
        </div>);
}
