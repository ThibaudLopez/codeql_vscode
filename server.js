/*
$ node server.js
http://localhost:8080/hello
*/
'use strict';
var express = require('express');
var routes = require('./routes/index.js');
var app = express();
app.get('/hello', routes.hello);
var server = app.listen(8080);
