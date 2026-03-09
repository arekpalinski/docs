"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLatestVersion = void 0;
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var useLatestVersion = function () {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return siteConfig.customFields.latestVersion;
};
exports.useLatestVersion = useLatestVersion;
