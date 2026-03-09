"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RecentGuidesList;
var react_1 = require("react");
var RecentGuidesListItem_1 = require("./RecentGuidesListItem");
function RecentGuidesList(_a) {
    var guides = _a.guides;
    return (<>
            {guides.map(function (guide, index) { return (<RecentGuidesListItem_1.default key={guide.url} {...guide} isLast={index === guides.length - 1}/>); })}
        </>);
}
