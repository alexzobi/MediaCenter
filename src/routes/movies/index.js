// const Router = require('koa-router');
// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';
import Router from 'koa-router';
import knex from '../../db/knex';

const extname = path.extname;
export const router = new Router();

router.get('/', async ctx => {
  const movieList = 
    await knex('Movies')
      .select('*')

  ctx.body = movieList
})

router.get('/:movieId', async ctx => {
  const fpath = path.join(__dirname, '../../../assets', ctx.path);
  const fstat = await stat(fpath);

  if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream(fpath);
  }
});

/**
 * thunkify stat
 */

function stat(file) {
  return new Promise(function(resolve, reject) {
    fs.stat(file, function(err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}

export default router;