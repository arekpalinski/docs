"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardWithIcon;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Heading_1 = require("@theme/Heading");
var Icon_1 = require("@site/src/components/Common/Icon");
var clsx_1 = require("clsx");
function CardWithIcon(_a) {
    var title = _a.title, icon = _a.icon, description = _a.description, url = _a.url, _b = _a.animationDelay, animationDelay = _b === void 0 ? 0 : _b;
    return (<Link_1.default to={url} className="card-wrapper">
            <div className={(0, clsx_1.default)("card flex items-start gap-4", "p-4 overflow-hidden rounded-2xl", "border border-black/10 dark:border-white/10", "!bg-black/5 dark:!bg-white/5", "hover:border-black/20 dark:hover:border-white/20", "hover:!bg-black/10 dark:hover:!bg-white/10", "!transition-all", "animate-in fade-in slide-in-from-bottom-4")} style={{
            animationDelay: "".concat(animationDelay, "ms"),
            animationDuration: "400ms",
            animationFillMode: "backwards",
        }}>
                <div className="flex flex-col gap-2">
                    <Icon_1.Icon icon={icon}/>
                    <div>
                        <Heading_1.default as="h4" className="!mb-1">
                            {title}
                        </Heading_1.default>
                        <p className="!mb-0 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </Link_1.default>);
}
