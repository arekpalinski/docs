"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GuidesHeader;
var react_1 = require("react");
var Heading_1 = require("@theme/Heading");
var clsx_1 = require("clsx");
function GuidesHeader() {
    return (<div className={(0, clsx_1.default)("flex flex-col gap-4 items-center justify-center text-center", "p-4 py-12 mb-8", "overflow-hidden relative rounded-xl", "border border-black/10 dark:border-white/10", "bg-[radial-gradient(50%_100%_at_0%_100%,var(--color-primary)_0%,var(--color-ifm-background-surface)_100%)] bg-no-repeat")}>
            <Heading_1.default as="h1" className="!mb-0">
                Master RavenDB
                <br />
                with step-by-step guides
            </Heading_1.default>
            <p className="!mb-0">Comprehensive guides to help you master RavenDB concepts and features</p>
        </div>);
}
