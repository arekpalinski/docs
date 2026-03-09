"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardWithImage;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Heading_1 = require("@theme/Heading");
var Icon_1 = require("@site/src/components/Common/Icon");
var Badge_1 = require("@site/src/components/Common/Badge");
var LazyImage_1 = require("@site/src/components/Common/LazyImage");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var clsx_1 = require("clsx");
var useTagLimit_1 = require("@site/src/hooks/useTagLimit");
var Tag_1 = require("@site/src/theme/Tag");
function CardWithImage(_a) {
    var title = _a.title, description = _a.description, imgSrc = _a.imgSrc, _b = _a.imgAlt, imgAlt = _b === void 0 ? "" : _b, url = _a.url, imgIcon = _a.imgIcon, _c = _a.tags, tags = _c === void 0 ? [] : _c, date = _a.date, _d = _a.animationDelay, animationDelay = _d === void 0 ? 0 : _d;
    var hasImage = Boolean(imgSrc);
    var hasTags = tags.length > 0;
    var hasDate = date !== undefined;
    var _e = (0, useTagLimit_1.useTagLimit)({
        tags: tags,
    }), visibleTags = _e.visibleTags, hiddenCount = _e.hiddenCount, isExpanded = _e.isExpanded, expandTags = _e.expandTags;
    return (<article className="card-wrapper group">
            <Link_1.default to={url} className={(0, clsx_1.default)("absolute inset-0 z-1", "!transition-all")}/>
            <div className={(0, clsx_1.default)("card flex h-full flex-col", "p-4 overflow-hidden rounded-2xl", "border border-black/10 dark:border-white/10", "!bg-black/5 dark:!bg-white/5 text-inherit group-hover:no-underline", "group-hover:border-black/20 dark:group-hover:border-white/20", "group-hover:!bg-black/10 dark:group-hover:!bg-white/10", "!transition-all", "animate-in fade-in slide-in-from-bottom-4")} style={{
            animationDelay: "".concat(animationDelay, "ms"),
            animationDuration: "400ms",
            animationFillMode: "backwards",
        }}>
                <div className={(0, clsx_1.default)("flex items-center justify-center", "rounded-xl mb-4 overflow-hidden", "relative aspect-[79/24]", !hasImage && "bg-gradient-to-b from-[#204879] to-[#0F1425] to-[70%]")}>
                    {hasImage ? (<LazyImage_1.default imgSrc={imgSrc} alt={imgAlt} className={(0, clsx_1.default)("pointer-events-none", "w-full h-full object-cover object-center", "!transition-transform origin-bottom", "group-hover:scale-105 group-hover:translate-y-1")}/>) : (<Icon_1.Icon icon={imgIcon !== null && imgIcon !== void 0 ? imgIcon : "default"} size="xl" className="filter brightness-0 invert !transition-transform group-hover:scale-110"/>)}
                    {!(0, isInternalUrl_1.default)(url) && (<Badge_1.default className="absolute top-2 right-2" variant="default" size="sm">
                            External
                        </Badge_1.default>)}
                </div>
                <div className="flex flex-col gap-0.5">
                    <Heading_1.default as="h4" className="!mb-0 !text-base !font-bold !leading-5 !break-normal">
                        {title}
                    </Heading_1.default>
                </div>
                <p className="!mb-0 text-sm pt-2">{description}</p>
                {(hasTags || hasDate) && (<div className="flex flex-wrap justify-between pt-2 gap-3 z-2">
                        {hasTags && (<div className="flex gap-1 items-center flex-wrap">
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
                            </div>)}
                        {hasDate && <p className="!mb-0 text-xs flex-shrink-0 leading-[20px]">{date}</p>}
                    </div>)}
            </div>
        </article>);
}
