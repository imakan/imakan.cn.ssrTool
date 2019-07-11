"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const cacheable_response_1 = __importDefault(require("cacheable-response"));
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const port = parseInt(process.env.PORT || '18002', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dir: '.', dev });
const handle = app.getRequestHandler();
const ssrCache = cacheable_response_1.default({
    ttl: 0 * 60 * 60 * 365,
    get: async ({ req, res, pagePath, queryParams }) => ({
        data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
});
const prefix = '/';
app.prepare().then(() => {
    const server = express_1.default();
    const router = express_1.default.Router();
    server.use(`${prefix}`, router);
    server.use(`${prefix}/static`, express_1.default.static('static'));
    server.use(handle);
    router.get('/', async (req, res) => {
        const pagePath = '/';
        return ssrCache({ req, res, pagePath });
    });
    // router.get('*', (req, res) => {
    //   return app.render(req, res, /);
    // });
    server.listen(port, (err) => {
        if (err)
            throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
    // createServer((req, res) => {
    //   const parsedUrl = parse(req.url!, true);
    //   const { pathname, query } = parsedUrl;
    //   if (pathname === '/a') {
    //     app.render(req, res, '/a', query);
    //   } else if (pathname === '/b') {
    //     app.render(req, res, '/b', query);
    //   } else {
    //     handle(req, res, parsedUrl);
    //   }
    // }).listen(port);
    // tslint:disable-next-line:no-console
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
//# sourceMappingURL=index.js.map