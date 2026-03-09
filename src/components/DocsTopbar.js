"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocsTopbar;
var react_1 = require("react");
var clsx_1 = require("clsx");
var LanguageSwitcher_1 = require("@site/src/components/LanguageSwitcher");
function DocsTopbar(_a) {
    var title = _a.title, supportedLanguages = _a.supportedLanguages;
    var _b = (0, react_1.useState)(false), isVisible = _b[0], setIsVisible = _b[1];
    var _c = (0, react_1.useState)(false), isCollapsed = _c[0], setIsCollapsed = _c[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var scrollThreshold = 250;
            setIsVisible(scrollTop >= scrollThreshold);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (window.innerWidth < 768) {
            setIsCollapsed(true);
        }
    }, []);
    if (!supportedLanguages || supportedLanguages.length === 0) {
        return null;
    }
    return (<div className={(0, clsx_1.default)("sticky top-[71.46px] z-30", "rounded-xl", "!transition-all", {
            "max-h-[60px] opacity-100": isVisible,
            "max-h-0 opacity-0 hidden": !isVisible,
        })}>
            <div className="row">
                <div className="col min-[1640px]:!p-0">
                    <div className={(0, clsx_1.default)("w-full p-2", "flex justify-between flex-wrap items-center", "rounded-xl", "border border-black/10 dark:border-white/10", "backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#1b1b1d]/40 bg-white/90 dark:bg-[#1b1b1d]/90", "shadow-xl/30", "!transition-all", {
            "gap-2": !isCollapsed,
        })}>
                        <div className="flex justify-between items-center gap-2 truncate">
                            <div className="text-base font-medium truncate" title={title}>
                                {title}
                            </div>
                            <button className={(0, clsx_1.default)("md:hidden ms-auto", "p-1 rounded", "hover:bg-black/5 dark:hover:bg-white/5", "!transition-all")} onClick={function () { return setIsCollapsed(!isCollapsed); }} aria-label={isCollapsed ? "Show language switcher" : "Hide language switcher"}>
                                <svg className={(0, clsx_1.default)("w-4 h-4", "!transition-transform", {
            "rotate-180": isCollapsed,
        })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <LanguageSwitcher_1.default supportedLanguages={supportedLanguages} flush/>
                        </div>
                        <div className={(0, clsx_1.default)("md:hidden", "!transition-all", {
            "max-h-0 opacity-0 overflow-hidden": isCollapsed,
            "opacity-100": !isCollapsed,
        })}>
                            <LanguageSwitcher_1.default supportedLanguages={supportedLanguages} flush/>
                        </div>
                    </div>
                </div>
                <div className="col col--3 lg:block"></div>
            </div>
        </div>);
}
