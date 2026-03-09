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
exports.default = Badge;
var React = require("react");
var clsx_1 = require("clsx");
var Icon_1 = require("./Icon");
var variantClasses = {
    default: "bg-primary-light/80 backdrop-blur-xs text-white border border-primary/10 dark:text-black",
    secondary: "bg-gray-200/70 backdrop-blur-xs text-black dark:bg-secondary/70 dark:text-black border border-gray-300/10 dark:border-secondary/10",
    outline: "bg-stone-100/30 backdrop-blur-xs text-black border border-black/70",
    success: "bg-green-300/80 backdrop-blur-xs text-green-950 border border-green-400/10",
    warning: "bg-orange-300/80 backdrop-blur-xs text-orange-950 border border-orange-400/10",
    destructive: "bg-red-300/80 backdrop-blur-xs text-red-950 border border-red-400/10",
};
var sizeClasses = {
    sm: "text-[11px] leading-4 h-5 px-2",
    md: "text-xs leading-5 h-6 px-2.5",
};
function Badge(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.variant, variant = _c === void 0 ? "secondary" : _c, _d = _a.size, size = _d === void 0 ? "sm" : _d, iconName = _a.iconName, _e = _a.iconPosition, iconPosition = _e === void 0 ? "left" : _e, props = __rest(_a, ["children", "className", "variant", "size", "iconName", "iconPosition"]);
    var baseClasses = (0, clsx_1.default)("inline-flex items-center gap-1 select-none", "font-medium", "rounded-full", variantClasses[variant], sizeClasses[size], className);
    var iconElement = iconName ? <Icon_1.Icon icon={iconName} size="xs" className="shrink-0"/> : null;
    return (<span className={baseClasses} {...props}>
            {iconElement && iconPosition === "left" && iconElement}
            <span>{children}</span>
            {iconElement && iconPosition === "right" && iconElement}
        </span>);
}
