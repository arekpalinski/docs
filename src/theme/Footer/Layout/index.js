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
exports.default = FooterLayout;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var theme_common_1 = require("@docusaurus/theme-common");
var Icon_1 = require("@site/src/components/Common/Icon");
function TopLinks(_a) {
    var items = _a.items;
    return (<div className="space-y-1">
            {items.map(function (item, index) { return (<span key={index} className="text-sm flex flex-wrap gap-1">
                    {item.icon && <Icon_1.Icon icon={item.icon} size="xs" className="me-2"/>}
                    {item.context && <span>{item.context}</span>}
                    <Link_1.default to={item.href}>{item.label}</Link_1.default>
                </span>); })}
        </div>);
}
function SocialIcons(_a) {
    var items = _a.items;
    return (<div className="flex gap-2">
            {items.map(function (item, index) { return (<Link_1.default key={index} href={item.href} className="w-8 h-8 flex items-center justify-center card !rounded-lg !text-ifm-menu border border-black/10 dark:border-white/10 bg-muted/40 p-4 hover:border-black/20 dark:hover:border-white/20 !transition-all hover:!no-underline" aria-label={item.label}>
                    <Icon_1.Icon icon={item.icon} size="xs"/>
                </Link_1.default>); })}
        </div>);
}
function FooterLayout(_a) {
    var copyright = _a.copyright;
    var footer = (0, theme_common_1.useThemeConfig)().footer;
    var links = footer.links;
    var topItems = links[0].items;
    var footnoteItems = links[1].items;
    var socialItems = links[2].items;
    var footnoteSection = __spreadArray([{ label: copyright }], footnoteItems, true);
    return (<footer className="footer">
            <div>
                <TopLinks items={topItems}/>
                <hr className="!mt-6 !mb-5 !bg-black/10 dark:!bg-white/10"/>
                <div className="flex justify-between items-center gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-x-2 text-sm">
                        {footnoteSection.map(function (item, index) { return (<react_1.default.Fragment key={index}>
                                {"href" in item ? <Link_1.default to={item.href}>{item.label}</Link_1.default> : <>{item.label}</>}
                                {index !== footnoteSection.length - 1 && <span className="opacity-50">·</span>}
                            </react_1.default.Fragment>); })}
                    </div>
                    <SocialIcons items={socialItems}/>
                </div>
            </div>
        </footer>);
}
