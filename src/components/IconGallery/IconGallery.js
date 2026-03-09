"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IconGallery;
var react_1 = require("react");
var IconGalleryCard_1 = require("./IconGalleryCard");
var iconName_1 = require("@site/src/typescript/iconName");
function IconGallery() {
    var iconNames = (0, react_1.useMemo)(function () {
        return __spreadArray([], iconName_1.ALL_ICON_NAMES, true).sort();
    }, []);
    return (<div className="icon-gallery mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {iconNames.map(function (iconName) { return (<IconGalleryCard_1.default key={iconName} iconName={iconName}/>); })}
            </div>
        </div>);
}
