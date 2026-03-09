"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVersionedLink = useVersionedLink;
var client_1 = require("@docusaurus/plugin-content-docs/client");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
function useVersionedLink() {
    var _a;
    var versionMetadata = (0, client_1.useDocsVersion)();
    var activePlugin = (0, client_1.useActivePlugin)();
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var latestVersion = (_a = siteConfig.customFields) === null || _a === void 0 ? void 0 : _a.latestVersion;
    var currentPluginId = (activePlugin === null || activePlugin === void 0 ? void 0 : activePlugin.pluginId) || "default";
    var getVersionPath = function () {
        if (!versionMetadata) {
            return latestVersion;
        }
        if (versionMetadata.version === "current") {
            return versionMetadata.label;
        }
        return versionMetadata.version;
    };
    var currentVersionPath = getVersionPath();
    var getVersionedLink = function (item) {
        if (item.source !== "docs") {
            return item.link;
        }
        var link = item.link.startsWith("/") ? item.link : "/".concat(item.link);
        var hasVersionPrefix = /^\/\d+\.\d+\//.test(link);
        if (hasVersionPrefix) {
            return link;
        }
        var isUnversionedSection = /^\/(cloud|guides|templates)(\/|$)/.test(link);
        if (isUnversionedSection) {
            return link;
        }
        var versionToUse = currentPluginId === "cloud" || currentPluginId === "guides" || currentPluginId === "templates"
            ? latestVersion
            : currentVersionPath;
        return "/".concat(versionToUse).concat(link);
    };
    return { getVersionedLink: getVersionedLink };
}
