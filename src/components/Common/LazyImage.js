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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LazyImage;
var react_1 = require("react");
var clsx_1 = require("clsx");
var ThemedImage_1 = require("@theme/ThemedImage");
function LazyImage(_a) {
    var imgSrc = _a.imgSrc, src = _a.src, _b = _a.alt, alt = _b === void 0 ? "" : _b, className = _a.className, style = _a.style, props = __rest(_a, ["imgSrc", "src", "alt", "className", "style"]);
    var _c = (0, react_1.useState)(false), isLoaded = _c[0], setIsLoaded = _c[1];
    var imgRef = (0, react_1.useRef)(null);
    // Check if image is already loaded after hydration
    (0, react_1.useEffect)(function () {
        var _a;
        if ((_a = imgRef.current) === null || _a === void 0 ? void 0 : _a.complete) {
            setIsLoaded(true);
        }
    }, []);
    var sources = getSources({ imgSrc: imgSrc, src: src });
    return (<span className={(0, clsx_1.default)("relative overflow-hidden inline-block w-full", className)} style={__assign(__assign({}, style), { minHeight: !isLoaded ? "100px" : undefined })}>
            {!isLoaded && <span className="absolute inset-0 skeleton rounded-[inherit] z-10" aria-hidden="true"/>}
            <ThemedImage_1.default {...props} ref={imgRef} sources={sources} alt={alt} className={(0, clsx_1.default)(className, "transition-opacity duration-300", !isLoaded ? "opacity-0" : "opacity-100")} onLoad={function () { return setIsLoaded(true); }} onError={function () { return setIsLoaded(true); }} loading="lazy"/>
        </span>);
}
function getSources(_a) {
    var imgSrc = _a.imgSrc, src = _a.src;
    if (src) {
        return {
            light: src,
            dark: src,
        };
    }
    if (typeof imgSrc === "string") {
        return {
            light: imgSrc,
            dark: imgSrc,
        };
    }
    return imgSrc;
}
