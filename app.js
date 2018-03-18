var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var resHeader=require('./config/resHeader');
var registorRoutes=require("./config/registorRoutes");
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(resHeader);
registorRoutes(app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("ffffffffffffffffff--------------");
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.messageAA ="这是一个错误的请求";
  console.log("get code error-----");
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
