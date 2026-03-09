"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CloudUseCases;
var Heading_1 = require("@theme/Heading");
var UseCaseItem_1 = require("@site/src/components/Homepage/UseCases/UseCaseItem");
var Link_1 = require("@docusaurus/Link");
var Icon_1 = require("../../Common/Icon");
var connecting_c_application_article_cover_jpg_1 = require("@site/static/img/cloud/connecting-c-application-article-cover.jpg");
var connecting_nodejs_to_ravendb_article_cover_jpg_1 = require("@site/static/img/cloud/connecting-nodejs-to-ravendb-article-cover.jpg");
var cloudUseCases = [
    {
        title: "Connecting C# application to Cloud",
        imgSrc: connecting_c_application_article_cover_jpg_1.default,
        description: (<>Learn how to connect to your Cloud instance with C#, and how to confirm your connection is established.</>),
        url: "https://ravendb.net/articles/connecting-c-application-to-ravendb-cloud",
    },
    {
        title: "Connecting Node.js application to Cloud",
        imgSrc: connecting_nodejs_to_ravendb_article_cover_jpg_1.default,
        description: (<>
                Learn how to connect to your Cloud instance with Node.js, and how to confirm your connection is
                established.
            </>),
        url: "https://ravendb.net/articles/connecting-node-js-application-to-ravendb-cloud",
    },
];
function CloudUseCases() {
    return (<section className="mb-8">
            <div className="flex justify-between items-baseline">
                <Heading_1.default as="h3">Use cases</Heading_1.default>
                <Link_1.default to="https://ravendb.net/articles" className="inline-flex text-base/4 gap-2">
                    See all <Icon_1.Icon icon="newtab" size="xs"/>
                </Link_1.default>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cloudUseCases.map(function (props, idx) { return (<UseCaseItem_1.default key={idx} {...props}/>); })}
            </div>
        </section>);
}
