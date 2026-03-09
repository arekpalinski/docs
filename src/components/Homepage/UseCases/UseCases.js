"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UseCases;
var Heading_1 = require("@theme/Heading");
var UseCaseItem_1 = require("@site/src/components/Homepage/UseCases/UseCaseItem");
var Link_1 = require("@docusaurus/Link");
var Icon_1 = require("../../Common/Icon");
var article_cover_genai_png_1 = require("@site/static/img/ravendb/article-cover-genai.png");
var processing_invoices_article_cover_jpg_1 = require("@site/static/img/ravendb/processing-invoices-article-cover.jpg");
var useCases = [
    {
        title: "Survive the AI tidal wave with RavenDB & GenAI",
        imgSrc: article_cover_genai_png_1.default,
        description: (<>
                Learn how to harness the power of Generative AI by pairing it with a high-performance document database.
            </>),
        url: "https://ravendb.net/articles/survive-the-ai-tidal-wave-with-ravendb-genai",
    },
    {
        title: "Processing invoices using Data Subscriptions in RavenDB",
        imgSrc: processing_invoices_article_cover_jpg_1.default,
        description: <>Learn how to process invoices in asynchronous manner using the data subscriptions feature</>,
        url: "https://ravendb.net/articles/processing-invoices-using-data-subscriptions-in-ravendb",
    },
];
function UseCases() {
    return (<section className="mb-8">
            <div className="flex justify-between items-baseline">
                <Heading_1.default as="h3">Use cases</Heading_1.default>
                <Link_1.default to="https://ravendb.net/articles" className="inline-flex text-base/4 gap-2">
                    See all <Icon_1.Icon icon="newtab" size="xs"/>
                </Link_1.default>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map(function (props, idx) { return (<UseCaseItem_1.default key={idx} {...props}/>); })}
            </div>
        </section>);
}
