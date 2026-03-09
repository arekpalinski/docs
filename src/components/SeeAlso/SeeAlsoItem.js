"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeeAlsoItem = SeeAlsoItem;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Icon_1 = require("@site/src/components/Common/Icon");
var utils_1 = require("./utils");
var clsx_1 = require("clsx");
var useVersionedLink_1 = require("./useVersionedLink");
function SeeAlsoItem(_a) {
    var item = _a.item;
    var iconName = (0, utils_1.getIconName)(item.source);
    var _b = (0, utils_1.parsePath)(item.path), mainCategory = _b.mainCategory, restOfPath = _b.restOfPath, fullPath = _b.fullPath;
    var getVersionedLink = (0, useVersionedLink_1.useVersionedLink)().getVersionedLink;
    return (<Link_1.default href={getVersionedLink(item)} className={(0, clsx_1.default)("flex items-center py-3 px-2 gap-4", "border-b border-black/10 dark:border-white/10 !text-inherit", "hover:!no-underline", "group relative", "!transition-all", "hover:bg-black/5 dark:hover:bg-white/5")}>
            <div className="flex items-center gap-2 flex-1 min-w-0">
                <Icon_1.Icon icon={iconName} size="xs"/>
                <span className={(0, clsx_1.default)("!mb-0 text-base font-semibold leading-5", "overflow-hidden truncate whitespace-nowrap")} title={item.title}>
                    {item.title}
                </span>
            </div>
            <div className="text-xs text-right truncate relative text-black/60 dark:text-white/60" title={fullPath}>
                <span className="hidden sm:inline-flex truncate">{mainCategory}</span>
                {restOfPath && (<span className="hidden md:inline-flex path-collapse text-black/40 dark:text-white/40">
                        {" > "}
                        {restOfPath}
                    </span>)}
            </div>
        </Link_1.default>);
}
