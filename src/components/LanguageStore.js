"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLanguage = void 0;
var react_1 = require("react");
var DEFAULT_LANGUAGE = "csharp";
var LANGUAGE_STORAGE_KEY = "docs-language";
var getLanguageFromLocalStorage = function () {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
};
var subscribe = function (callback) {
    window.addEventListener("storage", callback);
    return function () {
        window.removeEventListener("storage", callback);
    };
};
var useLanguage = function () {
    var language = (0, react_1.useSyncExternalStore)(subscribe, getLanguageFromLocalStorage, function () { return DEFAULT_LANGUAGE; });
    var setLanguage = (0, react_1.useCallback)(function (newLanguage) {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
        window.dispatchEvent(new window.Event("storage"));
    }, []);
    return { language: language, setLanguage: setLanguage };
};
exports.useLanguage = useLanguage;
