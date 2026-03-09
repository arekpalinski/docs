"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathType = void 0;
exports.getPathType = getPathType;
exports.getLandingPagePath = getLandingPagePath;
exports.PathType = {
    Cloud: "CLOUD",
    Guides: "GUIDES",
    Documentation: "DOCUMENTATION",
    Templates: "TEMPLATES",
};
function getPathType(path) {
    if (path.includes("/cloud")) {
        return exports.PathType.Cloud;
    }
    if (path.includes("/guides")) {
        return exports.PathType.Guides;
    }
    if (path.includes("/templates")) {
        return exports.PathType.Templates;
    }
    return exports.PathType.Documentation;
}
function getLandingPagePath(pathType, versionLabel) {
    if (pathType === exports.PathType.Cloud) {
        return "/cloud";
    }
    if (pathType === exports.PathType.Guides) {
        return "/guides";
    }
    if (pathType === exports.PathType.Templates) {
        return "/templates";
    }
    return "/".concat(versionLabel);
}
