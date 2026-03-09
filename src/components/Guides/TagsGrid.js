"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TagsGrid;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var useGlobalData_1 = require("@docusaurus/useGlobalData");
var Heading_1 = require("@theme/Heading");
var Tag_1 = require("../../theme/Tag");
var Icon_1 = require("../Common/Icon");
function TagsGrid() {
    var pluginData = (0, useGlobalData_1.usePluginData)("recent-guides-plugin");
    var tags = ((pluginData === null || pluginData === void 0 ? void 0 : pluginData.tags) || [])
        .filter(function (tag) { return tag.count > 0; })
        .sort(function () { return Math.random() - 0.5; })
        .slice(0, 25);
    return (<div className="flex flex-col gap-6">
            <div className="flex items-center justify-between shrink-0">
                <Heading_1.default as="h2" className="!mb-0">
                    Browse by topic
                </Heading_1.default>
                <Link_1.default to="/guides/tags" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline group">
                    See all
                    <Icon_1.Icon icon="arrow-thin-right" size="xs"/>
                </Link_1.default>
            </div>
            <div className="flex flex-wrap gap-2 overflow-hidden max-h-[230px] md:max-h-[115px]">
                {tags.map(function (tag) { return (<Tag_1.default key={tag.key} permalink={"/guides/tags".concat(tag.permalink)} count={tag.count}>
                        {tag.label}
                    </Tag_1.default>); })}
            </div>
        </div>);
}
