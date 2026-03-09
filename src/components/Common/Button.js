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
exports.default = Button;
var React = require("react");
var Link_1 = require("@docusaurus/Link");
var clsx_1 = require("clsx");
var Icon_1 = require("./Icon");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var variantClasses = {
    default: "bg-primary !text-white dark:!text-black hover:bg-primary-darker",
    secondary: "bg-gray-300 hover:bg-gray-400 dark:bg-secondary !text-black dark:hover:bg-secondary-darker",
    outline: "border !text-black border-black/25 !text-foreground hover:bg-black/5 dark:!text-white dark:border-white/25 dark:hover:bg-white/5",
    ghost: "hover:bg-muted !text-foreground",
    destructive: "bg-red-500 !text-white hover:bg-red-600",
};
var sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
};
function Button(_a) {
    var children = _a.children, url = _a.url, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.variant, variant = _c === void 0 ? "secondary" : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, iconName = _a.iconName, props = __rest(_a, ["children", "url", "className", "variant", "size", "iconName"]);
    var baseClasses = (0, clsx_1.default)("inline-flex items-center justify-center rounded-md font-medium", "!no-underline !transition-all", "disabled:opacity-50 disabled:pointer-events-none", variantClasses[variant], sizeClasses[size], className);
    if (url) {
        var isExternal = !(0, isInternalUrl_1.default)(url);
        return (<Link_1.default {...(isExternal ? { href: url } : { to: url })} className={baseClasses}>
                {children} {iconName && <Icon_1.Icon icon={iconName}/>}
                {isExternal && <Icon_1.Icon icon="newtab" className="ml-2" size="xs"/>}
            </Link_1.default>);
    }
    return (<button className={baseClasses} {...props}>
            {children} {iconName && <Icon_1.Icon icon={iconName}/>}
        </button>);
}
