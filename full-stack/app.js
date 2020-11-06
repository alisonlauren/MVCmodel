var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiPostsRouter = require('./routes/api-posts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/posts', apiPostsRouter);

module.exports = app;
