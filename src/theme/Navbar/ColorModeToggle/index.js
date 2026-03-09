"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarColorModeToggle;
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var Icon_1 = require("@site/src/components/Common/Icon");
function NavbarColorModeToggle(_a) {
    var className = _a.className;
    var _b = (0, theme_common_1.useColorMode)(), colorMode = _b.colorMode, setColorMode = _b.setColorMode;
    var _c = (0, react_1.useState)(false), hasMounted = _c[0], setHasMounted = _c[1];
    (0, react_1.useEffect)(function () {
        setHasMounted(true);
    }, []);
    var isDark = colorMode === "dark";
    if (!hasMounted) {
        return (<button className={"w-8 h-8 rounded-full border border-black/10 dark:border-white/10 ".concat(className)} aria-label="Toggle mode"/>);
    }
    return (<button onClick={function () { return setColorMode(isDark ? "light" : "dark"); }} className={"relative w-8 h-8 max-w-[31.48px] max-h-[31.48px] rounded-full overflow-hidden border border-black/10 dark:border-white/10 flex items-center justify-center bg-ifm-background transition-colors duration-300 ms-3 lg:ms-0 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ".concat(className)} aria-label="Toggle mode">
            <div className="absolute top-0 left-0 w-full h-[200%] flex flex-col items-center justify-center transition-transform duration-300" style={{ transform: "translateY(".concat(isDark ? "-50%" : "0%", ")") }}>
                <div className="flex items-center justify-center h-8 text-ifm-menu">
                    <Icon_1.Icon icon="moon" size="xs"/>
                </div>

                <div className="flex items-center justify-center h-8 text-ifm-menu">
                    <Icon_1.Icon icon="sun" size="xs"/>
                </div>
            </div>
        </button>);
}
