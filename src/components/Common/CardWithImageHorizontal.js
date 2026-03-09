"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardWithImageHorizontal;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Heading_1 = require("@theme/Heading");
var Badge_1 = require("@site/src/components/Common/Badge");
var LazyImage_1 = require("@site/src/components/Common/LazyImage");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var clsx_1 = require("clsx");
function CardWithImageHorizontal(_a) {
    var title = _a.title, description = _a.description, imgSrc = _a.imgSrc, _b = _a.imgAlt, imgAlt = _b === void 0 ? "" : _b, url = _a.url;
    return (<Link_1.default to={url} className="card-wrapper">
            <div className={(0, clsx_1.clsx)("card group !grid grid-cols-1 xl:grid-cols-[120px_1fr]", "items-center gap-4 p-4", "overflow-hidden rounded-2xl", "border border-black/10 dark:border-white/10", "!transition-all", "!bg-black/5 dark:!bg-white/5", "hover:border-black/20 dark:hover:border-white/20", "hover:!bg-black/10 dark:hover:!bg-white/10")}>
                <div className={(0, clsx_1.clsx)("aspect-[537/281] xl:max-w-[120px]", "overflow-hidden rounded-xl", "relative flex items-center")}>
                    <LazyImage_1.default imgSrc={imgSrc} alt={imgAlt} className={(0, clsx_1.clsx)("pointer-events-none", "w-full h-auto object-contain", "!transition-transform origin-bottom", "group-hover:scale-105")}/>
                    {!(0, isInternalUrl_1.default)(url) && (<Badge_1.default className="absolute top-2 right-2" variant="default" size="sm">
                            External
                        </Badge_1.default>)}
                </div>
                <div className="flex flex-col min-w-0 justify-center gap-1">
                    <Heading_1.default as="h4" className="!mb-0">
                        {title}
                    </Heading_1.default>
                    <p className="!mb-0 text-sm">{description}</p>
                </div>
            </div>
        </Link_1.default>);
}
