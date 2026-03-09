"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LayoutSwitcher;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Icon_1 = require("@site/src/components/Common/Icon");
function LayoutSwitcher(_a) {
    var layoutMode = _a.layoutMode, onLayoutChange = _a.onLayoutChange;
    return (<div className={(0, clsx_1.default)("relative w-fit ms-auto", "border border-black/10 dark:border-white/10", "flex gap-1 items-center p-1 rounded-3xl shrink-0")}>
            <div className={(0, clsx_1.default)("absolute top-1 h-[32px] w-[32px]", "bg-black/5 dark:bg-white/5", "rounded-3xl", "!transition-all", "border border-black/10 dark:border-white/10")} style={{
            left: layoutMode === "grid" ? "4px" : "40px",
        }}/>
            <button onClick={function () { return onLayoutChange("grid"); }} className={(0, clsx_1.default)("relative z-10", "flex items-center justify-center p-1 rounded-3xl w-[32px] h-[32px]", "border-0 cursor-pointer", "!transition-all", layoutMode === "grid" ? "opacity-100" : "opacity-50 hover:opacity-75")} title="Grid view">
                <Icon_1.Icon icon="layout-grid" size="xs"/>
            </button>
            <button onClick={function () { return onLayoutChange("list"); }} className={(0, clsx_1.default)("relative z-10", "flex items-center justify-center p-1 rounded-3xl w-[32px] h-[32px]", "border-0 cursor-pointer", "!transition-all", layoutMode === "list" ? "opacity-100" : "opacity-50 hover:opacity-75")} title="List view">
                <Icon_1.Icon icon="layout-list" size="xs"/>
            </button>
        </div>);
}
