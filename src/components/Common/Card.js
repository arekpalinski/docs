"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Heading_1 = require("@theme/Heading");
var Icon_1 = require("@site/src/components/Common/Icon");
var Badge_1 = require("@site/src/components/Common/Badge");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var clsx_1 = require("clsx");
function Card(_a) {
    var title = _a.title, description = _a.description, url = _a.url, iconName = _a.iconName;
    return (<Link_1.default to={url} className="card-wrapper">
            <div className={(0, clsx_1.default)("card group flex h-full flex-col", "p-4 overflow-hidden rounded-2xl", "border border-black/10 dark:border-white/10", "bg-black/5 dark:bg-white/5", "hover:border-black/20 dark:hover:border-white/20", "hover:bg-black/10 dark:hover:bg-white/10", "!transition-all")}>
                {iconName && (<div className="flex items-center justify-center rounded-xl mb-4 bg-gradient-to-b from-[#204879] to-[#0F1425] to-[70%] aspect-[79/24] relative">
                        <Icon_1.Icon icon={iconName} size="xl" className="filter brightness-0 invert"/>
                        {!(0, isInternalUrl_1.default)(url) && (<Badge_1.default className="absolute top-2 right-2" variant="default" size="sm">
                                External
                            </Badge_1.default>)}
                    </div>)}
                <Heading_1.default as="h4" className="!mb-2">
                    {title}
                </Heading_1.default>
                <p className="!mb-0 text-sm">{description}</p>
            </div>
        </Link_1.default>);
}
