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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fs_1 = require("fs");
var gray_matter_1 = require("gray-matter");
var yaml = require("js-yaml");
function getFiles(dir, files) {
    if (files === void 0) { files = []; }
    var fileList = fs_1.default.readdirSync(dir);
    for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
        var file = fileList_1[_i];
        var name_1 = path_1.default.join(dir, file);
        if (fs_1.default.statSync(name_1).isDirectory()) {
            getFiles(name_1, files);
        }
        else {
            files.push(name_1);
        }
    }
    return files;
}
var recentGuidesPlugin = function recentGuidesPlugin(context, _options) {
    return {
        name: "recent-guides-plugin",
        loadContent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var guidesDir, tagsYmlPath, predefinedTags, fileContent, tagCounts, files, guides, allTags;
                return __generator(this, function (_a) {
                    guidesDir = path_1.default.join(context.siteDir, "guides");
                    if (!fs_1.default.existsSync(guidesDir)) {
                        return [2 /*return*/, []];
                    }
                    tagsYmlPath = path_1.default.join(guidesDir, "tags.yml");
                    predefinedTags = {};
                    if (fs_1.default.existsSync(tagsYmlPath)) {
                        try {
                            fileContent = fs_1.default.readFileSync(tagsYmlPath, "utf8");
                            predefinedTags = yaml.load(fileContent) || {};
                        }
                        catch (e) {
                            // eslint-disable-next-line no-console
                            console.error("Failed to load tags.yml", e);
                        }
                    }
                    tagCounts = {};
                    files = getFiles(guidesDir)
                        .filter(function (f) { return /\.(md|mdx)$/.test(f); })
                        .filter(function (f) {
                        var relativePath = path_1.default.relative(guidesDir, f);
                        var normalized = relativePath.split(path_1.default.sep).join("/");
                        return normalized !== "home.mdx";
                    });
                    guides = files.map(function (filePath) {
                        var fileContent = fs_1.default.readFileSync(filePath, "utf-8");
                        var data = (0, gray_matter_1.default)(fileContent).data;
                        var stats = fs_1.default.statSync(filePath);
                        var relativePath = path_1.default.relative(guidesDir, filePath);
                        var relativePathNormalized = relativePath.split(path_1.default.sep).join("/");
                        var baseName = relativePathNormalized.replace(/\.(md|mdx)$/, "");
                        var slug = baseName.endsWith("/index") ? baseName.replace(/\/index$/, "") : baseName;
                        var permalink = "/guides/".concat(slug === "index" ? "" : slug);
                        var externalUrl = data.externalUrl || data.external_url;
                        var frontmatterDate = data.publishedAt;
                        var lastUpdatedAt;
                        if (frontmatterDate) {
                            var millis = null;
                            if (typeof frontmatterDate === "string") {
                                var parsed = Date.parse(frontmatterDate);
                                if (!Number.isNaN(parsed)) {
                                    millis = parsed;
                                }
                            }
                            else if (frontmatterDate instanceof Date) {
                                millis = frontmatterDate.getTime();
                            }
                            else if (typeof frontmatterDate === "number") {
                                millis = frontmatterDate > 1e12 ? frontmatterDate : frontmatterDate * 1000;
                            }
                            lastUpdatedAt = millis ? Math.floor(millis / 1000) : Math.floor(stats.mtimeMs / 1000);
                        }
                        else {
                            lastUpdatedAt = Math.floor(stats.mtimeMs / 1000);
                        }
                        var tags = data.tags || [];
                        if (!Array.isArray(tags)) {
                            tags = [];
                        }
                        tags.forEach(function (tag) {
                            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                        });
                        var formattedTags = tags.map(function (tag) {
                            var definedTag = predefinedTags[tag];
                            if (definedTag) {
                                return {
                                    label: definedTag.label,
                                    permalink: path_1.default.posix.join("/guides/tags", definedTag.permalink || tag.toLowerCase()),
                                };
                            }
                            return {
                                label: tag,
                                permalink: "/guides/tags/".concat(tag.toLowerCase().replace(/\s+/g, "-")),
                            };
                        });
                        return {
                            id: path_1.default.basename(filePath, path_1.default.extname(filePath)),
                            title: data.title || path_1.default.basename(filePath, path_1.default.extname(filePath)),
                            permalink: data.slug || permalink,
                            tags: formattedTags,
                            lastUpdatedAt: lastUpdatedAt,
                            description: data.description,
                            image: data.image,
                            icon: data.icon,
                            externalUrl: externalUrl,
                        };
                    });
                    allTags = Object.entries(predefinedTags).map(function (_a) {
                        var key = _a[0], value = _a[1];
                        return (__assign(__assign({}, value), { key: key, count: tagCounts[key] || 0 }));
                    });
                    return [2 /*return*/, {
                            guides: guides.sort(function (a, b) { return b.lastUpdatedAt - a.lastUpdatedAt; }),
                            tags: allTags,
                        }];
                });
            });
        },
        contentLoaded: function (_a) {
            return __awaiter(this, arguments, void 0, function (_b) {
                var setGlobalData;
                var content = _b.content, actions = _b.actions;
                return __generator(this, function (_c) {
                    setGlobalData = actions.setGlobalData;
                    setGlobalData(content);
                    return [2 /*return*/];
                });
            });
        },
    };
};
exports.default = recentGuidesPlugin;
