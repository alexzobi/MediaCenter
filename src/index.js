const Koa = require('koa');
const app = module.exports = new Koa();
const Router = require('koa-router');
const router = new Router();

import { router as Movies } from './routes/movies';

const PORT = 3000

app.use(
  router.routes(),
  router.allowedMethods()
)

router.use(
  '/movies', 
  Movies.routes(),
  Movies.allowedMethods()
)


if (!module.parent) app.listen(PORT, ()=> console.log(`Listening on port ${PORT}!!!`));
