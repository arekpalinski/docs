"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLinksMultiColumn;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
var LinkItem_1 = require("@theme/Footer/LinkItem");
function ColumnLinkItem(_a) {
    var _b;
    var item = _a.item;
    return item.html ? (<li className={(0, clsx_1.default)("footer__item", item.className)} 
    // Developer provided the HTML, so assume it's safe.
    dangerouslySetInnerHTML={{ __html: item.html }}/>) : (<li key={(_b = item.href) !== null && _b !== void 0 ? _b : item.to} className="footer__item">
            <LinkItem_1.default item={item}/>
        </li>);
}
function Column(_a) {
    var column = _a.column;
    return (<div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.layout.footer.column, "col footer__col", column.className)}>
            <div className="footer__title">{column.title}</div>
            <ul className="footer__items clean-list">
                {column.items.map(function (item, i) { return (<ColumnLinkItem key={i} item={item}/>); })}
            </ul>
        </div>);
}
function FooterLinksMultiColumn(_a) {
    var columns = _a.columns;
    return (<div className="row footer__links">
            {columns.map(function (column, i) { return (<Column key={i} column={column}/>); })}
        </div>);
}
