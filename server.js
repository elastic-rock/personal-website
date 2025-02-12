const express = require("express");
const app = express();
const path = require("path");
const crypto = require('crypto');
const fs = require("fs");

const port = process.env.PORT || 3000;

const navbarData = fs.readFileSync(path.join(__dirname, "components", "navbar.html"), "utf-8");
const footerData = fs.readFileSync(path.join(__dirname, "components", "footer.html"), "utf-8");

const indexData = fs.readFileSync(path.join(__dirname, "views", "index.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const appsData = fs.readFileSync(path.join(__dirname, "views", "apps.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const keepScreenOnData = fs.readFileSync(path.join(__dirname, "views", "keepscreenon.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const candleData = fs.readFileSync(path.join(__dirname, "views", "candle.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const contactData = fs.readFileSync(path.join(__dirname, "views", "contact.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const privacyData = fs.readFileSync(path.join(__dirname, "views", "privacy.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const photographyData = fs.readFileSync(path.join(__dirname, "views", "photography.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);
const errorData = fs.readFileSync(path.join(__dirname, "views", "404.html"), "utf-8").replace("{{navbar}}", navbarData).replace("{{footer}}", footerData);


app.use((req, res, next) => {
    try {
        const nonce = crypto.randomBytes(16).toString('base64');
        res.locals.nonce = nonce;

        res.set("Cache-Control", "no-cache, public");
        res.set("Content-Security-Policy", `default-src 'none'; script-src 'self' 'strict-dynamic' 'nonce-${nonce}' 'unsafe-inline' https: http:; style-src 'self'; img-src 'self'; base-uri 'none'; connect-src plausible.davidweis.eu; require-trusted-types-for 'script';`);
        res.set("X-Content-Type-Options", "nosniff");
        res.set("X-Frame-Options", "DENY");
        res.set("X-Xss-Protection", "0");
        res.set("Cross-Origin-Opener-Policy", "same-origin");
        res.set("Cross-Origin-Resource-Policy", "same-origin");
        res.set("Cross-Origin-Embedder-Policy", "require-corp");
        res.set("Referrer-Policy", "strict-origin-when-cross-origin");
        res.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
        res.removeHeader('X-Powered-By');

        if (req.originalUrl.startsWith("/.well-known/openpgpkey")) {
            res.set("Access-Control-Allow-Origin", "*")
        }
        
        next();
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at headers middleware: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    try {
        res.send(indexData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.get("/apps", (req, res) => {
    try {
        res.send(appsData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /apps: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.get("/apps/candle", (req, res) => {
    try {
        res.send(candleData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /apps/candle: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.get("/apps/keepscreenon", (req, res) => {
    try {
        res.send(keepScreenOnData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /apps/keepscreenon: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.get("/contact", (req, res) => {
    try {
        res.send(contactData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /contact: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.get("/photography", (req, res) => {
    try {
        res.send(photographyData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /photography: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.get("/privacy", (req, res) => {
    try {
        res.send(privacyData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at /privacy: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.use((req, res) => {
    try {
        res.status(404).send(errorData.replace(/{{nonce}}/g, res.locals.nonce));
    } catch (error) {
        const log = {
            severity: "ERROR",
            message: `Caught error at 404 middleware: ${error}`
        }
        console.log(JSON.stringify(log));
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    const log = {
        severity: "INFO",
        message: `Server is running on http://localhost:${port}`
    }
    console.log(JSON.stringify(log));
});