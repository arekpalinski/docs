"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTagLimit = useTagLimit;
var react_1 = require("react");
function useTagLimit(_a) {
    var tags = _a.tags, _b = _a.defaultLimit, defaultLimit = _b === void 0 ? 3 : _b;
    var _c = (0, react_1.useState)(false), isExpanded = _c[0], setIsExpanded = _c[1];
    var _d = (0, react_1.useState)(defaultLimit), limit = _d[0], setLimit = _d[1];
    var visibleTags = isExpanded ? tags : tags.slice(0, limit);
    var hiddenCount = tags.length - visibleTags.length;
    var expandTags = function () {
        setIsExpanded(true);
        setLimit(tags.length);
    };
    return {
        visibleTags: visibleTags,
        hiddenCount: hiddenCount,
        isExpanded: isExpanded,
        expandTags: expandTags,
    };
}
