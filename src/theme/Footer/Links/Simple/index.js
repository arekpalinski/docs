"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLinksSimple;
var react_1 = require("react");
var clsx_1 = require("clsx");
var LinkItem_1 = require("@theme/Footer/LinkItem");
function Separator() {
    return <span className="footer__link-separator">·</span>;
}
function SimpleLinkItem(_a) {
    var item = _a.item;
    return item.html ? (<span className={(0, clsx_1.default)("footer__link-item", item.className)} 
    // Developer provided the HTML, so assume it's safe.
    dangerouslySetInnerHTML={{ __html: item.html }}/>) : (<LinkItem_1.default item={item}/>);
}
function FooterLinksSimple(_a) {
    var links = _a.links;
    return (<div className="footer__links text--center">
            <div className="footer__links">
                {links.map(function (item, i) { return (<react_1.default.Fragment key={i}>
                        <SimpleLinkItem item={item}/>
                        {links.length !== i + 1 && <Separator />}
                    </react_1.default.Fragment>); })}
            </div>
        </div>);
}
