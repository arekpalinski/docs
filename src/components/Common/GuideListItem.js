"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GuideListItem;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var clsx_1 = require("clsx");
var useTagLimit_1 = require("@site/src/hooks/useTagLimit");
var Tag_1 = require("@site/src/theme/Tag");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
function GuideListItem(_a) {
    var title = _a.title, url = _a.url, _b = _a.tags, tags = _b === void 0 ? [] : _b, date = _a.date;
    var _c = (0, useTagLimit_1.useTagLimit)({
        tags: tags,
    }), visibleTags = _c.visibleTags, hiddenCount = _c.hiddenCount, isExpanded = _c.isExpanded, expandTags = _c.expandTags;
    return (<article className={(0, clsx_1.default)("flex flex-col-reverse py-3 px-2 gap-1", "border-b border-black/10 dark:border-white/10 !text-inherit", "hover:!no-underline", "group relative", "sm:flex-row sm:items-center sm:gap-4")}>
            <Link_1.default to={url} className={(0, clsx_1.default)("absolute inset-0 z-1", "!transition-all", "group-hover:bg-black/5 dark:group-hover:bg-white/5")}/>
            <div className={(0, clsx_1.default)("flex flex-col flex-1 flex-wrap justify-between min-w-0 gap-1", "lg:flex-row lg:items-center lg:flex-nowrap")}>
                <p className={(0, clsx_1.default)("!mb-0 font-semibold leading-5", "sm:shrink")}>{title}</p>
                <div className={(0, clsx_1.default)("flex gap-1 items-center flex-wrap whitespace-normal z-2", "sm:shrink-0")}>
                    {visibleTags.map(function (tag) { return (<Tag_1.default key={tag.label} size="xs" permalink={tag.permalink}>
                            {tag.label}
                        </Tag_1.default>); })}
                    {!isExpanded && hiddenCount > 0 && (<Tag_1.default size="xs" onClick={function (e) {
                e.preventDefault();
                e.stopPropagation();
                expandTags();
            }} title="Show all tags">
                            +{hiddenCount} more
                        </Tag_1.default>)}
                </div>
            </div>
            {date && (<p className={(0, clsx_1.default)("!mb-0 text-xs", "overflow-hidden truncate sm:text-right whitespace-normal", "shrink-0")}>
                    {!(0, isInternalUrl_1.default)(url) && "External • "}
                    {date}
                </p>)}
        </article>);
}
