"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tabs;
var react_1 = require("react");
var clsx_1 = require("clsx");
var internal_1 = require("@docusaurus/theme-common/internal");
var useIsBrowser_1 = require("@docusaurus/useIsBrowser");
var styles_module_css_1 = require("./styles.module.css");
function TabList(_a) {
    var className = _a.className, block = _a.block, selectedValue = _a.selectedValue, selectValue = _a.selectValue, tabValues = _a.tabValues;
    var tabRefs = [];
    var blockElementScrollPositionUntilNextRender = (0, internal_1.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;
    var handleTabChange = function (event) {
        var newTab = event.currentTarget;
        var newTabIndex = tabRefs.indexOf(newTab);
        var newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    var handleKeydown = function (event) {
        var _a, _b;
        var focusElement = null;
        switch (event.key) {
            case "Enter": {
                handleTabChange(event);
                break;
            }
            case "ArrowRight": {
                var nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                focusElement = (_a = tabRefs[nextTab]) !== null && _a !== void 0 ? _a : tabRefs[0];
                break;
            }
            case "ArrowLeft": {
                var prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                focusElement = (_b = tabRefs[prevTab]) !== null && _b !== void 0 ? _b : tabRefs[tabRefs.length - 1];
                break;
            }
            default:
                break;
        }
        focusElement === null || focusElement === void 0 ? void 0 : focusElement.focus();
    };
    return (<ul role="tablist" aria-orientation="horizontal" className={(0, clsx_1.default)("!my-0 !px-4 flex gap-2 bg-black/6 dark:bg-white/3 border-b border-black/10 dark:border-white/10", {
            "tabs--block": block,
        }, className)}>
            {tabValues.map(function (_a) {
            var value = _a.value, label = _a.label, attributes = _a.attributes;
            return (<li 
            // TODO extract TabListItem
            role="tab" tabIndex={selectedValue === value ? 0 : -1} aria-selected={selectedValue === value} key={value} ref={function (tabControl) {
                    tabRefs.push(tabControl);
                }} onKeyDown={handleKeydown} onClick={handleTabChange} {...attributes} className={(0, clsx_1.default)("tabs__item", "flex items-center !text-sm !rounded-none !border-b cursor-pointer !pb-2.5", "border-b-transparent text-gray-500 hover:text-gray-600 hover:!bg-transparent", "dark:text-gray-300 dark:hover:text-gray-200", "!transition-all !ease-in-out !duration-300", styles_module_css_1.default.tabItem, attributes === null || attributes === void 0 ? void 0 : attributes.className, {
                    "tabs__item--active !text-primary": selectedValue === value,
                })}>
                    {label !== null && label !== void 0 ? label : value}
                </li>);
        })}
        </ul>);
}
function TabContent(_a) {
    var lazy = _a.lazy, children = _a.children, selectedValue = _a.selectedValue;
    var childTabs = (Array.isArray(children) ? children : [children]).filter(Boolean);
    if (lazy) {
        var selectedTabItem = childTabs.find(function (tabItem) { return tabItem.props.value === selectedValue; });
        if (!selectedTabItem) {
            // fail-safe or fail-fast? not sure what's best here
            return null;
        }
        return (0, react_1.cloneElement)(selectedTabItem, {
            className: (0, clsx_1.default)(selectedTabItem.props.className),
        });
    }
    return (<div className="p-4 bg-pre-background">
            {childTabs.map(function (tabItem, i) {
            return (0, react_1.cloneElement)(tabItem, {
                key: i,
                hidden: tabItem.props.value !== selectedValue,
            });
        })}
        </div>);
}
function TabsComponent(props) {
    var tabs = (0, internal_1.useTabs)(props);
    return (<div className={(0, clsx_1.default)("tabs-container overflow-hidden rounded-lg border-black/10 dark:border-white/10 border mb-6", styles_module_css_1.default.tabList)}>
            <TabList {...tabs} {...props}/>
            <TabContent {...tabs} {...props}/>
        </div>);
}
function Tabs(props) {
    var isBrowser = (0, useIsBrowser_1.default)();
    return (<TabsComponent 
    // Remount tabs after hydration
    // Temporary fix for https://github.com/facebook/docusaurus/issues/5653
    key={String(isBrowser)} {...props}>
            {(0, internal_1.sanitizeTabsChildren)(props.children)}
        </TabsComponent>);
}
