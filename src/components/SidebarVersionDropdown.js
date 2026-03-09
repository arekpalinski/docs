"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomVersionDropdown;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var client_1 = require("@docusaurus/plugin-content-docs/client");
function CustomVersionDropdown() {
    var _a;
    var pluginId = "default";
    var versions = (0, client_1.useVersions)(pluginId);
    var latestVersion = (0, client_1.useLatestVersion)(pluginId);
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var wrapperRef = (0, react_1.useRef)(null);
    var buttonRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(null), buttonWidth = _c[0], setButtonWidth = _c[1];
    (0, react_1.useEffect)(function () {
        var updateWidth = function () {
            if (buttonRef.current) {
                setButtonWidth(buttonRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return function () { return window.removeEventListener("resize", updateWidth); };
    }, []);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            var _a;
            if (!((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    var currentLabel = (_a = activeVersion === null || activeVersion === void 0 ? void 0 : activeVersion.label) !== null && _a !== void 0 ? _a : latestVersion.label;
    return (<div ref={wrapperRef} className="relative w-full px-4 my-2">
            <span className="text-xs text-ifm-menu mb-1">Documentation version</span>
            <button ref={buttonRef} onClick={function () { return setOpen(function (o) { return !o; }); }} className="w-full flex justify-between items-center rounded-md border border-black/10 dark:border-white/10 px-3 text-sm py-2 bg-transparent text-ifm-menu hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer !transition-all">
                <span>{currentLabel}.x</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                </svg>
            </button>
            <div className={"absolute mt-1 z-50 rounded-md border border-black/10 dark:border-white/10 bg-ifm-background shadow-lg max-h-[400px] overflow-auto p-1 text-sm !transition-all !transition-duration-200 ease-out origin-top ".concat(open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none")} style={{ width: buttonWidth !== null && buttonWidth !== void 0 ? buttonWidth : "100%" }}>
                <ul className="!p-0 !m-0">
                    {versions.map(function (version) { return (<li key={version.name} className="rounded-sm overflow-hidden">
                            <Link_1.default to={version.path} className="menu__link" onClick={function () { return setOpen(false); }}>
                                {version.label}.x
                            </Link_1.default>
                        </li>); })}
                </ul>
            </div>
        </div>);
}
