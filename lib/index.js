'use strict';

var _movies = require('./routes/movies');

var Koa = require('koa');
var app = module.exports = new Koa();
var Router = require('koa-router');
var router = new Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'test',
  database: 'mediaCenter'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to mediaCenter database!');
});

var PORT = 3000;

app.use(router.routes(), router.allowedMethods());

router.use('/movies', _movies.router.routes(), _movies.router.allowedMethods());

if (!module.parent) app.listen(PORT, function () {
  return console.log('Listening on port ' + PORT + '!!!');
});