"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterCopyright;
var react_1 = require("react");
function FooterCopyright(_a) {
    var copyright = _a.copyright;
    return (<div className="footer__copyright" 
    // Developer provided the HTML, so assume it's safe.
    dangerouslySetInnerHTML={{ __html: copyright }}/>);
}
