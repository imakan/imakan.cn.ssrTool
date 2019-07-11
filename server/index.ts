// @ts-ignore
import cacheableResponse from 'cacheable-response';
import express from 'express';
import next from 'next';
const port = parseInt(process.env.PORT || '18002', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle: any = app.getRequestHandler();
const ssrCache = cacheableResponse({
  ttl: 0 * 60 * 60 * 365,
  get: async ({ req, res, pagePath, queryParams }: any) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }: any) => res.send(data)
});
const prefix = '/';
app.prepare().then(() => {
  const server = express();
  const router = express.Router();
  server.use(`${prefix}`, router);
  server.use(`${prefix}/static`, express.static('static'));
  server.use(handle);
  router.get('/', async (req, res) => {
    const pagePath = '/';
    return ssrCache({ req, res, pagePath });
  });
  // router.get('*', (req, res) => {
  //   return app.render(req, res, /);
  // });

  server.listen(port, (err: Error) => {
    if (err) throw err;
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
