"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindPlugin = function tailwindPlugin(_context, _options) {
    return {
        name: "tailwind-plugin",
        configurePostCss: function (postcssOptions) {
            postcssOptions.plugins = [require("@tailwindcss/postcss"), require("autoprefixer")];
            return postcssOptions;
        },
    };
};
exports.default = tailwindPlugin;
