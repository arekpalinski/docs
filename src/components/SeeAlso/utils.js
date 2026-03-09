"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePath = exports.getIconName = void 0;
var getIconName = function (source) {
    switch (source) {
        case "docs":
            return "document2";
        case "cloud":
            return "cloud";
        case "guides":
            return "guides";
        case "external":
            return "newtab";
        default:
            return "document";
    }
};
exports.getIconName = getIconName;
var parsePath = function (path) {
    var _a;
    var parts = path ? path.split(">") : [];
    var mainCategory = ((_a = parts[0]) === null || _a === void 0 ? void 0 : _a.trim()) || path;
    var restOfPath = parts.length > 1
        ? parts
            .slice(1)
            .map(function (p) { return p.trim(); })
            .join(" > ")
        : "";
    return { mainCategory: mainCategory, restOfPath: restOfPath, fullPath: path };
};
exports.parsePath = parsePath;
