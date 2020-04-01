const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const proxy = require('express-http-proxy');
const express = require("express");

const serverPort = 3000;

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query)
});

app.prepare()
    .then(() => {
        const server = express()

        server.use('/proxy', proxy(process.env.API_DOMAIN, {
            https: true
        }));

        server.get('*', (req, res) => {
            return handler(req, res)
        });

        server.listen(serverPort, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:'+serverPort)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    });