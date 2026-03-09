"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
exports.default = SearchBar;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Head_1 = require("@docusaurus/Head");
var Link_1 = require("@docusaurus/Link");
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var client_1 = require("@docusaurus/theme-search-algolia/client");
var Translate_1 = require("@docusaurus/Translate");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var SearchTranslations_1 = require("@theme/SearchTranslations");
var react_2 = require("@docsearch/react");
var CustomSearchButton_1 = require("@site/src/components/Common/CustomSearchButton");
var DocSearchModal = null;
function importDocSearchModalIfNeeded() {
    if (DocSearchModal) {
        return Promise.resolve();
    }
    return Promise.all([
        Promise.resolve().then(function () { return require("@docsearch/react/modal"); }),
        Promise.resolve().then(function () { return require("@docsearch/react/style"); }),
        Promise.resolve().then(function () { return require("./styles.css"); }),
    ]).then(function (_a) {
        var Modal = _a[0].DocSearchModal;
        DocSearchModal = Modal;
    });
}
function useNavigator(_a) {
    var externalUrlRegex = _a.externalUrlRegex;
    var history = (0, router_1.useHistory)();
    var navigator = (0, react_1.useState)(function () {
        return {
            navigate: function (params) {
                // Algolia results could contain URL's from other domains which cannot
                // be served through history and should navigate with window.location
                if ((0, theme_common_1.isRegexpStringMatch)(externalUrlRegex, params.itemUrl)) {
                    window.location.href = params.itemUrl;
                }
                else {
                    history.push(params.itemUrl);
                }
            },
        };
    })[0];
    return navigator;
}
function useTransformSearchClient() {
    var docusaurusVersion = (0, useDocusaurusContext_1.default)().siteMetadata.docusaurusVersion;
    return (0, react_1.useCallback)(function (searchClient) {
        searchClient.addAlgoliaAgent("docusaurus", docusaurusVersion);
        return searchClient;
    }, [docusaurusVersion]);
}
function useTransformItems(props) {
    var processSearchResultUrl = (0, client_1.useSearchResultUrlProcessor)();
    var transformItems = (0, react_1.useState)(function () {
        return function (items) {
            return props.transformItems
                ? // Custom transformItems
                    props.transformItems(items)
                : // Default transformItems
                    items.map(function (item) { return (__assign(__assign({}, item), { url: processSearchResultUrl(item.url) })); });
        };
    })[0];
    return transformItems;
}
function useResultsFooterComponent(_a) {
    var closeModal = _a.closeModal;
    return (0, react_1.useMemo)(function () {
        return function (_a) {
            var state = _a.state;
            return <ResultsFooter state={state} onClose={closeModal}/>;
        };
    }, [closeModal]);
}
function Hit(_a) {
    var hit = _a.hit, children = _a.children;
    return <Link_1.default to={hit.url}>{children}</Link_1.default>;
}
function ResultsFooter(_a) {
    var state = _a.state, onClose = _a.onClose;
    var createSearchLink = (0, theme_common_1.useSearchLinkCreator)();
    return (<Link_1.default to={createSearchLink(state.query)} onClick={onClose}>
            <Translate_1.default id="theme.SearchBar.seeAll" values={{ count: state.context.nbHits }}>
                {"See all {count} results"}
            </Translate_1.default>
        </Link_1.default>);
}
function useSearchParameters(_a) {
    var _b, _c;
    var contextualSearch = _a.contextualSearch, props = __rest(_a, ["contextualSearch"]);
    function mergeFacetFilters(f1, f2) {
        var normalize = function (f) { return (typeof f === "string" ? [f] : f); };
        return __spreadArray(__spreadArray([], normalize(f1), true), normalize(f2), true);
    }
    var contextualSearchFacetFilters = (0, client_1.useAlgoliaContextualFacetFilters)();
    var configFacetFilters = (_c = (_b = props.searchParameters) === null || _b === void 0 ? void 0 : _b.facetFilters) !== null && _c !== void 0 ? _c : [];
    var facetFilters = contextualSearch
        ? // Merge contextual search filters with config filters
            mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
        : // ... or use config facetFilters
            configFacetFilters;
    // We let users override default searchParameters if they want to
    return __assign(__assign({}, props.searchParameters), { facetFilters: facetFilters });
}
function DocSearch(_a) {
    var _b, _c, _d;
    var externalUrlRegex = _a.externalUrlRegex, props = __rest(_a, ["externalUrlRegex"]);
    var navigator = useNavigator({ externalUrlRegex: externalUrlRegex });
    var searchParameters = useSearchParameters(__assign({}, props));
    var transformItems = useTransformItems(props);
    var transformSearchClient = useTransformSearchClient();
    var searchContainer = (0, react_1.useRef)(null);
    // TODO remove "as any" after React 19 upgrade
    var searchButtonRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = (0, react_1.useState)(undefined), initialQuery = _f[0], setInitialQuery = _f[1];
    var prepareSearchContainer = (0, react_1.useCallback)(function () {
        if (!searchContainer.current) {
            var divElement = document.createElement("div");
            searchContainer.current = divElement;
            document.body.insertBefore(divElement, document.body.firstChild);
        }
    }, []);
    var openModal = (0, react_1.useCallback)(function () {
        prepareSearchContainer();
        importDocSearchModalIfNeeded().then(function () { return setIsOpen(true); });
    }, [prepareSearchContainer]);
    var closeModal = (0, react_1.useCallback)(function () {
        var _a;
        setIsOpen(false);
        (_a = searchButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setInitialQuery(undefined);
    }, []);
    var handleInput = (0, react_1.useCallback)(function (event) {
        if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
            // ignore browser's ctrl+f
            return;
        }
        // prevents duplicate key insertion in the modal input
        event.preventDefault();
        setInitialQuery(event.key);
        openModal();
    }, [openModal]);
    var resultsFooterComponent = useResultsFooterComponent({ closeModal: closeModal });
    (0, react_2.useDocSearchKeyboardEvents)({
        isOpen: isOpen,
        onOpen: openModal,
        onClose: closeModal,
        onInput: handleInput,
        searchButtonRef: searchButtonRef,
    });
    return (<>
            <Head_1.default>
                {/* This hints the browser that the website will load data from Algolia,
and allows it to preconnect to the DocSearch cluster. It makes the first
query faster, especially on mobile. */}
                <link rel="preconnect" href={"https://".concat(props.appId, "-dsn.algolia.net")} crossOrigin="anonymous"/>
            </Head_1.default>

            <CustomSearchButton_1.default onTouchStart={importDocSearchModalIfNeeded} onFocus={importDocSearchModalIfNeeded} onMouseOver={importDocSearchModalIfNeeded} onClick={openModal} translations={(_b = props.translations) === null || _b === void 0 ? void 0 : _b.button}/>

            {isOpen &&
            DocSearchModal &&
            searchContainer.current &&
            (0, react_dom_1.createPortal)(<DocSearchModal onClose={closeModal} initialScrollY={window.scrollY} initialQuery={initialQuery} navigator={navigator} transformItems={transformItems} hitComponent={Hit} transformSearchClient={transformSearchClient} {...(props.searchPagePath && {
                resultsFooterComponent: resultsFooterComponent,
            })} placeholder={SearchTranslations_1.default.placeholder} {...props} translations={(_d = (_c = props.translations) === null || _c === void 0 ? void 0 : _c.modal) !== null && _d !== void 0 ? _d : SearchTranslations_1.default.modal} searchParameters={searchParameters}/>, searchContainer.current)}
        </>);
}
function SearchBar() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return <DocSearch {...siteConfig.themeConfig.algolia}/>;
}
