"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFoundContent;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Translate_1 = require("@docusaurus/Translate");
var Heading_1 = require("@theme/Heading");
var CardWithIcon_1 = require("@site/src/components/Common/CardWithIcon");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var router_1 = require("@docusaurus/router");
function NotFoundContent(_a) {
    var _b;
    var className = _a.className;
    var pluginId = "default";
    var activeVersion = (0, client_1.useActiveDocContext)(pluginId).activeVersion;
    var latestVersion = (0, client_1.useLatestVersion)(pluginId);
    var versionLabel = (_b = activeVersion === null || activeVersion === void 0 ? void 0 : activeVersion.label) !== null && _b !== void 0 ? _b : latestVersion.label;
    var pathname = (0, router_1.useLocation)().pathname;
    var isCloudPath = pathname.includes("/cloud");
    return (<main className={(0, clsx_1.default)("container margin-vert--xl", className)}>
            <div className="row">
                <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="98" viewBox="0 0 240 98" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M119.539 0.795471C127.327 0.795471 134.024 2.67461 139.63 6.43219C145.266 10.1898 149.6 15.644 152.63 22.7955C155.66 29.9167 157.16 38.5531 157.13 48.7047C157.13 58.9166 155.615 67.6439 152.585 74.8863C149.585 82.1286 145.282 87.6589 139.676 91.4771C134.07 95.2953 127.357 97.2047 119.539 97.2047C111.721 97.1743 104.994 95.2502 99.3574 91.4322C93.7514 87.614 89.4326 82.0837 86.4023 74.8414C83.4024 67.599 81.9179 58.8864 81.9482 48.7047C81.9482 38.5531 83.4482 29.9011 86.4482 22.7496C89.4785 15.5984 93.7966 10.1594 99.4023 6.43219C105.039 2.67462 111.751 0.795476 119.539 0.795471ZM119.539 16.9322C114.236 16.9322 109.993 19.5833 106.812 24.8863C103.63 30.1893 102.023 38.1289 101.993 48.7047C101.993 55.8561 102.706 61.826 104.13 66.6138C105.584 71.3713 107.63 74.9475 110.267 77.3414C112.903 79.7048 115.994 80.8863 119.539 80.8863C124.872 80.8863 129.13 78.2047 132.312 72.8414C135.493 67.4777 137.069 59.4319 137.039 48.7047C137.039 41.644 136.312 35.7649 134.857 31.0679C133.433 26.3711 131.403 22.8407 128.767 20.4771C126.161 18.1135 123.085 16.9322 119.539 16.9322Z" fill="url(#paint0_linear_592_3318)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5 63.023H75.0459V78.7955H63.5V95.1588H44.6816V78.7955H0V63.2955L38.8633 2.06793H63.5V63.023ZM19.8184 62.2955V63.023H45.0459V23.523H44.3184L19.8184 62.2955Z" fill="url(#paint0_linear_592_3318)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M228.135 2.06793V63.023H239.681V78.7955H228.135V95.1588H209.316V78.7955H164.635V63.2955L203.499 2.06793H228.135ZM208.953 23.523L184.453 62.2955V63.023H209.681V23.523H208.953Z" fill="url(#paint0_linear_592_3318)"/>
                        <defs>
                            <linearGradient id="paint0_linear_592_3318" x1="517.932" y1="-32.4123" x2="517.932" y2="94.7306" gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--ifm-color-primary)"/>
                                <stop offset="1" stop-color="var(--ifm-color-primary-dark)" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <Heading_1.default as="h1" className="hero__title !mt-4">
                        <Translate_1.default id="theme.NotFound.title" description="The title of the 404 page">
                            Page Not Found
                        </Translate_1.default>
                    </Heading_1.default>
                    <p>
                        The page you’re looking for doesn’t exist or may have been moved.
                        <br />
                        Double-check the URL, or head back to the homepage to find what you need.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <CardWithIcon_1.default title="Homepage" description="Feeling lost? Start at the very beginning" url={isCloudPath ? "/cloud" : "/".concat(versionLabel)} icon="home"/>
                        <CardWithIcon_1.default title="Search the docs" description="There's probably an article for your issue already" url="/search" icon="search"/>
                    </div>
                </div>
            </div>
        </main>);
}
