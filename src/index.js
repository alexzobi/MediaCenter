const Koa = require('koa');
const app = module.exports = new Koa();
const Router = require('koa-router');
const router = new Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'test',
  database: 'mediaCenter'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mediaCenter database!');
});

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
