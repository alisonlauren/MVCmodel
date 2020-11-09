var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const apiPostsRouter = require('./routes/api-posts');
const apiCommentsRouter = require('./routes/api-comments')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/v1/posts', apiPostsRouter);
app.use('/api/v1/posts', apiCommentsRouter);

module.exports = app;
