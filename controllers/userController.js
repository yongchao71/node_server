/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 22:15:40
 */
var express = require('express');
var router = express.Router();
var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");
var userService=require("./../service/userService");
var loger = require("../utils/loger").loger();



router.get('/detail',(req, res, next)=> {
    userService.detail().then(result => {
        loger.info("Users-------------->", JSON.stringify(result));
        res.send(result);
    }).catch(e=>{
       // loger.error("e-------------->", e);
        res.send({ "error": "load error" });
    });
});
router.get('/list', (req, res, next)=>{
    userService.list().then(result => {
        loger.info("Users---list----------->", JSON.stringify(result));
        res.send(result);
    })
});
router.post('/add',(req, res, next)=>{

});
router.get('/test', (req, res, next)=>{

});
router.get('/get', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;