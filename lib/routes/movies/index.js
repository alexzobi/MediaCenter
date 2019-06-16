'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _knex = require('../../db/knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Router = require('koa-router');
// const fs = require('fs');
// const path = require('path');
var extname = _path2.default.extname;
var router = exports.router = new _koaRouter2.default();

router.get('/:movieId', async function (ctx) {
  var fpath = _path2.default.join(__dirname, '../../../assets', ctx.path);
  var fstat = await stat(fpath);

  if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = _fs2.default.createReadStream(fpath);
  }
});

/**
 * thunkify stat
 */

function stat(file) {
  return new Promise(function (resolve, reject) {
    _fs2.default.stat(file, function (err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}

exports.default = router;