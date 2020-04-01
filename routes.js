const routes = (module.exports = require('next-routes')());

routes
    .add('home', '/', 'index')
    .add('contact', '/contact', 'contact')
    .add('over-ons', '/over-ons', 'over-ons')
    .add('offerte-aanvraag', '/offerte-aanvraag', 'offerte-aanvraag')
    .add('meest-gestelde-vragen', '/meest-gestelde-vragen', 'meest-gestelde-vragen')
    .add('services.index', '/diensten/', 'diensten')
    .add('services.content-ontwikkeling', '/diensten/content-ontwikkeling', 'content-ontwikkeling')
    .add('services.internet-marketing', '/diensten/internet-marketing', 'internet-marketing')
    .add('services.web-hosting', '/diensten/web-hosting', 'web-hosting')
    .add('services.webshops', '/diensten/webshops', 'webshops')
    .add('services.websites', '/diensten/websites', 'websites')
    .add('services.websoftware', '/diensten/websoftware', 'websoftware')
    .add('references.index', '/referenties', 'referenties')
// .add('references.show', '/referenties/:id', '/referenties/')