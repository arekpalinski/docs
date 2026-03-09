"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RecentGuidesListItem;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Heading_1 = require("@theme/Heading");
var Tag_1 = require("../../theme/Tag");
var clsx_1 = require("clsx");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var useTagLimit_1 = require("@site/src/hooks/useTagLimit");
function RecentGuidesListItem(_a) {
    var title = _a.title, tags = _a.tags, time = _a.time, url = _a.url, isLast = _a.isLast;
    var _b = (0, useTagLimit_1.useTagLimit)({
        tags: tags,
    }), visibleTags = _b.visibleTags, hiddenCount = _b.hiddenCount, isExpanded = _b.isExpanded, expandTags = _b.expandTags;
    return (<div className={(0, clsx_1.default)("relative group p-4 flex flex-col gap-1 cursor-pointer !transition-colors", "text-base !text-inherit", "hover:bg-black/5 dark:hover:bg-white/5", !isLast && "border-b border-black/10 dark:border-white/10")}>
            <Heading_1.default as="h6" className="!mb-0 !font-bold !text-inherit">
                <Link_1.default to={url} className="!text-inherit no-underline hover:!no-underline after:absolute after:inset-0 block truncate w-full" title={title}>
                    {title}
                </Link_1.default>
            </Heading_1.default>
            <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-1 justify-between pointer-events-none">
                <div className="flex gap-1 relative flex-wrap flex-1 min-w-0">
                    {visibleTags.map(function (tag) { return (<Tag_1.default key={tag.label} permalink={tag.permalink} size="xs" className="pointer-events-auto">
                            {tag.label}
                        </Tag_1.default>); })}
                    {!isExpanded && hiddenCount > 0 && (<Tag_1.default size="xs" onClick={function (e) {
                e.preventDefault();
                e.stopPropagation();
                expandTags();
            }} title="Show all tags" className="pointer-events-auto">
                            +{hiddenCount} more
                        </Tag_1.default>)}
                </div>
                <span className="text-xs shrink-0">
                    {!(0, isInternalUrl_1.default)(url) && "External • "}
                    {time}
                </span>
            </div>
        </div>);
}
