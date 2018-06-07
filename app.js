/*
 * @Author: ZXY 
 * @Date: 2018-04-15 12:02:01 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-03 00:02:29
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var resHeader=require('./config/resHeader');
var registorRoutes=require("./config/registorRoutes");

const restc = require('restc');

const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');

const log4js= require('./utils/loger');
const webrequest = log4js.loger("webrequest");
const errorlogger = log4js.loger('error');

const seq=require("./dao/sequelize/sqBase");

var app = express();
log4js.useLogger(app,webrequest);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
let upperBound = '50mb';
app.use(restc.express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: upperBound, extended: true, parameterLimit: 100000000}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(resHeader);

//定义签名
const secret = 'salt';
//生成token
const token = jwt.sign({
    name: 123
}, secret, {
    expiresIn:  30 //秒到期时间
});
// app.use(expressJwt ({
//   secret:  secret 
// }).unless({
//   path: ['/login', '/seque/list']  //除了这些地址，其他的URL都需要验证
// }));



jwt.verify(token, secret, function (err, decoded) {
  if (!err){
   // webrequest.info("token----decode--------------",decoded,decoded.name);  
   }
})



app.use(session({
    name:"aiychao",
    secret: 'sessiontest',
    resave: true,
    saveUninitialized:true
}));

/**
 * 请求全局过滤
 */
app.use(function(req, res, next) {
  next();
});

registorRoutes(app);
/**
 * 页面不存在
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
//拦截器
app.use(function(err, req, res, next) {
  //console.log(err);
  errorlogger.error("---------=-=-==================-=-=-=-=---------------",JSON.stringify(err));
  errorlogger.error(req.method,req.url,err.status);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  errorlogger.error(err);
  // render the error page
  res.status(err.status || 500);
  //res.render('error');
    if (err.name === 'UnauthorizedError') {   
        res.status(401).send('无效token');
     }else{
       res.send(err);
     }
});

module.exports = app;
