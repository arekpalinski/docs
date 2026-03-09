"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocVersionBanner;
var react_1 = require("react");
var clsx_1 = require("clsx");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Translate_1 = require("@docusaurus/Translate");
var Button_1 = require("@site/src/components/Common/Button");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var theme_common_1 = require("@docusaurus/theme-common");
var Icon_1 = require("@site/src/components/Common/Icon");
function UnreleasedVersionLabel(_a) {
    var siteTitle = _a.siteTitle, versionMetadata = _a.versionMetadata;
    return (<Translate_1.default id="theme.docs.versions.unreleasedVersionLabel" description="The label used to tell the user that he's browsing an unreleased doc version" values={{
            siteTitle: siteTitle,
            versionLabel: <b>{versionMetadata.label}</b>,
        }}>
            {"This is unreleased documentation for {siteTitle} {versionLabel} version."}
        </Translate_1.default>);
}
function UnmaintainedVersionLabel(_a) {
    var siteTitle = _a.siteTitle, versionMetadata = _a.versionMetadata;
    return (<div className="flex items-start gap-2">
            <div className="text-blue-500 flex-shrink-0">
                <Icon_1.Icon icon="info" size="xs"/>
            </div>
            <div className="flex-1 min-w-0">
                <Translate_1.default id="theme.docs.versions.unmaintainedVersionLabel" description="The label used to tell the user that he's browsing an unmaintained doc version" values={{
            siteTitle: siteTitle,
            versionLabel: <b>{versionMetadata.label}</b>,
        }}>
                    {"You're currently reading RavenDB {versionLabel} Documentation."}
                </Translate_1.default>
            </div>
        </div>);
}
var BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel,
};
function BannerLabel(props) {
    var BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return <BannerLabelComponent {...props}/>;
}
function LatestVersionSuggestionLabel(_a) {
    var to = _a.to, onClick = _a.onClick;
    return (<div>
            <Button_1.default url={to} onClick={onClick} variant="outline" size="sm" className="self-start sm:self-center">
                <Translate_1.default id="theme.docs.versions.latestVersionLinkLabel" description="The label used for the latest version suggestion link label">
                    See latest version
                </Translate_1.default>
            </Button_1.default>
        </div>);
}
function DocVersionBannerEnabled(_a) {
    var className = _a.className, versionMetadata = _a.versionMetadata;
    var siteTitle = (0, useDocusaurusContext_1.default)().siteConfig.title;
    var pluginId = (0, client_1.useActivePlugin)({ failfast: true }).pluginId;
    var getVersionMainDoc = function (version) { return version.docs.find(function (doc) { return doc.id === version.mainDocId; }); };
    var savePreferredVersionName = (0, client_1.useDocsPreferredVersion)(pluginId).savePreferredVersionName;
    var _b = (0, client_1.useDocVersionSuggestions)(pluginId), latestDocSuggestion = _b.latestDocSuggestion, latestVersionSuggestion = _b.latestVersionSuggestion;
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    var latestVersionSuggestedDoc = latestDocSuggestion !== null && latestDocSuggestion !== void 0 ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
    return (<div className={(0, clsx_1.default)(className, theme_common_1.ThemeClassNames.docs.docVersionBanner, "card mb-4 gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-muted/40 p-4 transition-colors")} role="alert">
            <div className="flex items-start">
                <div className="flex grow flex-wrap flex-row justify-between items-center">
                    <div className="text-sm dark:text-gray-200">
                        <BannerLabel siteTitle={siteTitle} versionMetadata={versionMetadata}/>
                    </div>

                    <div className="mt-1 text-sm">
                        <LatestVersionSuggestionLabel versionLabel={latestVersionSuggestion.label} to={latestVersionSuggestedDoc.path} onClick={function () { return savePreferredVersionName(latestVersionSuggestion.name); }}/>
                    </div>
                </div>
            </div>
        </div>);
}
function DocVersionBanner(_a) {
    var className = _a.className;
    var versionMetadata = (0, client_1.useDocsVersion)();
    if (versionMetadata.banner) {
        return <DocVersionBannerEnabled className={className} versionMetadata={versionMetadata}/>;
    }
    return null;
}
