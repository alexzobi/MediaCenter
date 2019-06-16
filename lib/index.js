'use strict';

var _movies = require('./routes/movies');

var Koa = require('koa');
var app = module.exports = new Koa();
var Router = require('koa-router');
var router = new Router();

var PORT = 3000;

app.use(router.routes(), router.allowedMethods());

router.use('/movies', _movies.router.routes(), _movies.router.allowedMethods());

if (!module.parent) app.listen(PORT, function () {
  return console.log('Listening on port ' + PORT + '!!!');
});