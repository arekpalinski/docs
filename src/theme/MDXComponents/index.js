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
Object.defineProperty(exports, "__esModule", { value: true });
var MDXComponents_1 = require("@theme-original/MDXComponents");
var MDXImg_1 = require("./MDXImg");
exports.default = __assign(__assign({}, MDXComponents_1.default), { img: MDXImg_1.default });
