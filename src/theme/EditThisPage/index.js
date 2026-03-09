"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditThisPage;
var react_1 = require("react");
var Icon_1 = require("@site/src/components/Common/Icon");
var Link_1 = require("@docusaurus/Link");
function EditThisPage(_a) {
    var editUrl = _a.editUrl;
    return (<div className="me-auto">
            <Link_1.default className="inline-flex items-center gap-2 text-sm leading-none" to={editUrl}>
                <Icon_1.Icon icon="edit" size="xs"/>
                Edit on GitHub
            </Link_1.default>
        </div>);
}
