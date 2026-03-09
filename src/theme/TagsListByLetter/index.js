"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TagsListByLetter;
var react_1 = require("react");
var theme_common_1 = require("@docusaurus/theme-common");
var Tag_1 = require("../Tag");
var Heading_1 = require("@theme/Heading");
function TagLetterEntryItem(_a) {
    var letterEntry = _a.letterEntry;
    return (<article className="flex flex-col py-6 border-b border-black/5 dark:border-white/5 last:border-0">
            <Heading_1.default as="h2" id={letterEntry.letter}>
                {letterEntry.letter}
            </Heading_1.default>
            <div className="flex flex-wrap gap-2">
                {letterEntry.tags.map(function (tag) { return (<Tag_1.default key={tag.permalink} permalink={tag.permalink} count={tag.count}>
                        {tag.label}
                    </Tag_1.default>); })}
            </div>
        </article>);
}
function TagsListByLetter(_a) {
    var tags = _a.tags;
    var letterList = (0, theme_common_1.listTagsByLetters)(tags);
    return (<section className="flex flex-col">
            {letterList.map(function (letterEntry) { return (<TagLetterEntryItem key={letterEntry.letter} letterEntry={letterEntry}/>); })}
        </section>);
}
