"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LanguageContent;
var react_1 = require("react");
var LanguageStore_1 = require("./LanguageStore");
function LanguageContent(_a) {
    var language = _a.language, children = _a.children;
    var current = (0, LanguageStore_1.useLanguage)().language;
    return current === language ? <>{children}</> : null;
}
