"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var Links_1 = require("@theme/Footer/Links");
var Logo_1 = require("@theme/Footer/Logo");
var Copyright_1 = require("@theme/Footer/Copyright");
var Layout_1 = require("@theme/Footer/Layout");
function Footer() {
    var footer = (0, theme_common_1.useThemeConfig)().footer;
    if (!footer) {
        return null;
    }
    var copyright = footer.copyright, links = footer.links, logo = footer.logo, style = footer.style;
    return (<Layout_1.default style={style} links={links && links.length > 0 && <Links_1.default links={links}/>} logo={logo && <Logo_1.default logo={logo}/>} copyright={copyright && <Copyright_1.default copyright={copyright}/>}/>);
}
exports.default = react_1.default.memo(Footer);
