"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomBreadcrumbs;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
function CustomBreadcrumbs(_a) {
    var items = _a.items, className = _a.className;
    if (!items || items.length === 0) {
        return null;
    }
    return (<nav className={(0, clsx_1.default)("breadcrumbsContainer", theme_common_1.ThemeClassNames.docs.docBreadcrumbs, "theme-doc-breadcrumbs", className)} aria-label="Breadcrumbs">
            <ul className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
                {items.map(function (item, index) {
            var isLast = index === items.length - 1;
            return (<li key={index} className={(0, clsx_1.default)("breadcrumbs__item", {
                    "breadcrumbs__item--active": isLast,
                })} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            {!isLast && item.href ? (<Link_1.default className="breadcrumbs__link" itemProp="item" to={item.href}>
                                    <span itemProp="name">{item.label}</span>
                                </Link_1.default>) : (<span className="breadcrumbs__link breadcrumbs__link--active" itemProp="name">
                                    {item.label}
                                </span>)}
                            <meta itemProp="position" content={String(index + 1)}/>
                        </li>);
        })}
            </ul>
        </nav>);
}
