"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarMobileSidebarSecondaryMenu;
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var Translate_1 = require("@docusaurus/Translate");
function SecondaryMenuBackButton(props) {
    return (<button {...props} type="button" className="clean-btn navbar-sidebar__back">
            <Translate_1.default id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel" description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
                ← Back to main menu
            </Translate_1.default>
        </button>);
}
// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
function NavbarMobileSidebarSecondaryMenu() {
    var isPrimaryMenuEmpty = (0, theme_common_1.useThemeConfig)().navbar.items.length === 0;
    var secondaryMenu = (0, internal_1.useNavbarSecondaryMenu)();
    return (<>
            {/* edge-case: prevent returning to the primaryMenu when it's empty */}
            {!isPrimaryMenuEmpty && <SecondaryMenuBackButton onClick={function () { return secondaryMenu.hide(); }}/>}
            {secondaryMenu.content}
        </>);
}
