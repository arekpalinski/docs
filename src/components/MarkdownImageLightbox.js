"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarkdownImageLightbox;
var react_1 = require("react");
var yet_another_react_lightbox_1 = require("yet-another-react-lightbox");
require("yet-another-react-lightbox/styles.css");
var captions_1 = require("yet-another-react-lightbox/plugins/captions");
var router_1 = require("@docusaurus/router");
var plugins_1 = require("yet-another-react-lightbox/plugins");
function decodeHTML(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function MarkdownImageLightbox() {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)([]), slides = _b[0], setSlides = _b[1];
    var _c = (0, react_1.useState)(0), currentIndex = _c[0], setCurrentIndex = _c[1];
    var location = (0, router_1.useLocation)();
    (0, react_1.useEffect)(function () {
        var images = Array.from(document.querySelectorAll(".theme-doc-markdown img"));
        var imageList = [];
        images.forEach(function (img, index) {
            var src = img.getAttribute("src");
            if (!src) {
                return;
            }
            var altRaw = img.getAttribute("alt") || "";
            var alt = decodeHTML(altRaw);
            imageList.push({ src: src, description: alt });
            if (img.classList.contains("lightbox-bound")) {
                return;
            }
            img.setAttribute("style", "cursor: zoom-in");
            img.classList.add("lightbox-bound");
            img.addEventListener("click", function (e) {
                e.preventDefault();
                setCurrentIndex(index);
                setOpen(true);
            });
        });
        setSlides(imageList);
    }, [location.pathname]);
    return (<yet_another_react_lightbox_1.default open={open} close={function () { return setOpen(false); }} index={currentIndex} slides={slides} plugins={[plugins_1.Share, captions_1.default]} captions={{
            descriptionTextAlign: "center",
            descriptionMaxLines: 2,
            showToggle: false,
        }}/>);
}
