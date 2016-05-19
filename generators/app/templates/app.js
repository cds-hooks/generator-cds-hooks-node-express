'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./lib/routes');

var app = express();

app.use(bodyParser.json());

app.use(cors({
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
}));

app.use('/', routes);

module.exports = app;
