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
exports.default = ColGrid;
var React = require("react");
var clsx_1 = require("clsx");
function getGridColsClass(colCount) {
    if (colCount === 1) {
        return "grid grid-cols-1";
    }
    if (colCount === 2) {
        return "grid grid-cols-1 sm:grid-cols-2";
    }
    if (colCount === 3) {
        return "grid grid-cols-1 xl:grid-cols-3";
    }
    return "";
}
function ColGrid(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.colCount, colCount = _c === void 0 ? 1 : _c, props = __rest(_a, ["children", "className", "colCount"]);
    return (<div className={(0, clsx_1.default)(getGridColsClass(colCount), "gap-4", className)} {...props}>
            {children}
        </div>);
}
