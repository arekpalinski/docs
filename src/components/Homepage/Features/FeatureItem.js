"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeatureItem;
var CardWithIcon_1 = require("@site/src/components/Common/CardWithIcon");
function FeatureItem(props) {
    var title = props.title, icon = props.icon, description = props.description, url = props.url;
    return <CardWithIcon_1.default title={title} icon={icon} description={description} url={url}/>;
}
