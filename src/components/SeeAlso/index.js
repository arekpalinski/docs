"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SeeAlso;
var react_1 = require("react");
var clsx_1 = require("clsx");
var SeeAlsoItem_1 = require("./SeeAlsoItem");
function SeeAlso(_a) {
    var items = _a.items, className = _a.className;
    if (!items || items.length === 0) {
        return null;
    }
    return (<div className={(0, clsx_1.default)("flex flex-col gap-4 items-start pt-8 w-full", className)}>
            <h3 className="text-xl font-bold !mb-0 text-[var(--ifm-font-color-base)]">See also</h3>
            <div className="flex flex-col w-full">
                {items.map(function (item, idx) { return (<SeeAlsoItem_1.SeeAlsoItem key={idx} item={item}/>); })}
            </div>
        </div>);
}
