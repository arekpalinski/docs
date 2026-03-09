"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tag;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Link_1 = require("@docusaurus/Link");
function Tag(_a) {
    var permalink = _a.permalink, count = _a.count, description = _a.description, children = _a.children, _b = _a.size, size = _b === void 0 ? "default" : _b, className = _a.className, props = __rest(_a, ["permalink", "count", "description", "children", "size", "className"]);
    var isXs = size === "xs";
    var baseClasses = (0, clsx_1.default)("inline-flex items-center select-none border cursor-pointer", "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10", "hover:bg-black/10 dark:hover:bg-white/10 hover:!no-underline", isXs
        ? ["font-medium rounded-full", "text-[11px] leading-4 h-5 px-2"]
        : ["gap-2 px-2 py-1.5 rounded-xl", "text-sm font-semibold leading-[normal]", "!transition-colors"]);
    var tagContent = (<>
            <span>{children}</span>
            {count !== undefined && (<span className={(0, clsx_1.default)("flex items-center justify-center rounded-full font-bold leading-none", "w-4 h-4 text-[9px]", "bg-black/10", "dark:bg-white/20 dark:text-white")}>
                    {count}
                </span>)}
        </>);
    if (permalink) {
        return (<Link_1.default href={permalink} rel="tag" title={description} className={(0, clsx_1.default)(baseClasses, "!text-inherit relative z-10", className)} {...props}>
                {tagContent}
            </Link_1.default>);
    }
    return (<span className={(0, clsx_1.default)(baseClasses, className)} {...props}>
            {tagContent}
        </span>);
}
