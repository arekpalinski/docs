"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdmonitionLayout;
var react_1 = require("react");
var clsx_1 = require("clsx");
var theme_common_1 = require("@docusaurus/theme-common");
function AdmonitionContainer(_a) {
    var type = _a.type, className = _a.className, children = _a.children;
    return (<div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.common.admonition, theme_common_1.ThemeClassNames.common.admonitionType(type), className)}>
            {children}
        </div>);
}
function AdmonitionHeading(_a) {
    var title = _a.title, id = _a.id, href = _a.href;
    return (<div>
            <a id={id} href={href}>
                {title}
            </a>
        </div>);
}
function AdmonitionContent(_a) {
    var children = _a.children;
    return children ? <div>{children}</div> : null;
}
function AdmonitionLayout(props) {
    var type = props.type, title = props.title, children = props.children, className = props.className, id = props.id, href = props.href;
    return (<AdmonitionContainer type={type} className={className}>
            {title ? <AdmonitionHeading title={title} id={id} href={href}/> : null}
            <AdmonitionContent>{children}</AdmonitionContent>
        </AdmonitionContainer>);
}
