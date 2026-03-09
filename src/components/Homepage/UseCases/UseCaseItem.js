"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UseCaseItem;
var CardWithImage_1 = require("@site/src/components/Common/CardWithImage");
function UseCaseItem(props) {
    var title = props.title, url = props.url, description = props.description, imgSrc = props.imgSrc, imgAlt = props.imgAlt;
    return <CardWithImage_1.default title={title} description={description} url={url} imgSrc={imgSrc} imgAlt={imgAlt}/>;
}
