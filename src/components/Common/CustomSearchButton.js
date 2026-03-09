"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomSearchButton;
var react_1 = require("react");
var clsx_1 = require("clsx");
var react_2 = require("@docsearch/react");
var Icon_1 = require("./Icon");
function getShortcutKey() {
    if (typeof navigator === "undefined") {
        return "Ctrl+K";
    }
    var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.platform);
    return isMac ? "⌘K" : "Ctrl+K";
}
function CustomSearchButton(_a) {
    var onClick = _a.onClick, onTouchStart = _a.onTouchStart, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver, _b = _a.translations, translations = _b === void 0 ? {} : _b;
    var buttonRef = react_1.default.useRef(null);
    var _c = (0, react_1.useState)("Ctrl+K"), shortcutKey = _c[0], setShortcutKey = _c[1];
    (0, react_1.useEffect)(function () {
        setShortcutKey(getShortcutKey());
    }, []);
    (0, react_2.useDocSearchKeyboardEvents)({
        isOpen: false,
        onOpen: onClick,
        onClose: function () { },
        searchButtonRef: buttonRef,
    });
    return (<button type="button" ref={buttonRef} className={(0, clsx_1.default)("flex items-center gap-2 text-sm cursor-pointer", "bg-ifm-background border border-black/10 p-2.5 md:py-1.5 md:pr-1.5 md:pl-3", "dark:border-white/10 text-ifm-menu justify-between rounded-[32px] hover:bg-black/5 dark:hover:bg-white/5")} aria-label={translations.buttonAriaLabel || "Search"} onClick={onClick} onTouchStart={onTouchStart} onFocus={onFocus} onMouseOver={onMouseOver}>
            <Icon_1.Icon icon="search" size="xs"/>
            <span className="hidden md:inline-flex text-ifm-menu md:text-sm/3.5 text-left w-auto">
                {translations.buttonText || "Search"}
            </span>
            <div className="hidden md:inline-flex bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-ifm-menu px-1.5 rounded-2xl text-xs font-mono">
                {shortcutKey}
            </div>
        </button>);
}
