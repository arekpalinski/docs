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
exports.default = FooterLinkItem;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Link_1 = require("@docusaurus/Link");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var ExternalLink_1 = require("@theme/Icon/ExternalLink");
function FooterLinkItem(_a) {
    var item = _a.item;
    var to = item.to, href = item.href, label = item.label, prependBaseUrlToHref = item.prependBaseUrlToHref, className = item.className, props = __rest(item, ["to", "href", "label", "prependBaseUrlToHref", "className"]);
    var toUrl = (0, useBaseUrl_1.default)(to);
    var normalizedHref = (0, useBaseUrl_1.default)(href, { forcePrependBaseUrl: true });
    return (<Link_1.default className={(0, clsx_1.default)("footer__link-item", className)} {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
            to: toUrl,
        })} {...props}>
            {label}
            {href && !(0, isInternalUrl_1.default)(href) && <ExternalLink_1.default />}
        </Link_1.default>);
}
