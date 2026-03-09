"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LanguageSwitcher;
var react_1 = require("react");
var LanguageStore_1 = require("./LanguageStore");
var clsx_1 = require("clsx");
var languageOptions = [
    { label: "C#", value: "csharp", brand: "#9179E4" },
    { label: "Java", value: "java", brand: "#f89820" },
    { label: "Python", value: "python", brand: "#fbcb24" },
    { label: "PHP", value: "php", brand: "#8993be" },
    { label: "Node.js", value: "nodejs", brand: "#3c873a" },
];
function LanguageSwitcher(_a) {
    var supportedLanguages = _a.supportedLanguages, _b = _a.flush, flush = _b === void 0 ? false : _b;
    var _c = (0, LanguageStore_1.useLanguage)(), language = _c.language, setLanguage = _c.setLanguage;
    var isCurrentLanguageSupported = supportedLanguages.includes(language);
    var firstSupportedLanguage = supportedLanguages[0];
    (0, react_1.useEffect)(function () {
        if (!isCurrentLanguageSupported) {
            setLanguage(firstSupportedLanguage);
        }
    }, [isCurrentLanguageSupported, firstSupportedLanguage, setLanguage]);
    return (<div className={(0, clsx_1.default)("flex flex-wrap gap-2", { "mb-8": !flush })}>
            {languageOptions
            .filter(function (lang) { return supportedLanguages.includes(lang.value); })
            .map(function (lang) {
            var isActive = language === lang.value;
            return (<button key={lang.value} type="button" onClick={function () { return setLanguage(lang.value); }} className={(0, clsx_1.default)("px-3 py-1.5 rounded-md border text-sm transition-colors cursor-pointer", "border-black/10 text-gray-500 hover:bg-black/5 hover:border-black/15 hover:text-gray-600", "dark:text-gray-300 dark:border-white/10 dark:hover:text-gray-200 dark:hover:border-white/15 dark:hover:bg-white/5")} style={isActive
                    ? {
                        backgroundColor: "".concat(lang.brand, "20"),
                        color: lang.brand,
                        borderColor: lang.brand,
                    }
                    : {}}>
                            {lang.label}
                        </button>);
        })}
        </div>);
}
