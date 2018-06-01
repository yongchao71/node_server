/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 22:07:58
 */
var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");
var userService=require("./../service/userService");
var loger = require("../utils/loger").loger();

function detail(req, res, next) {
    userService.detail().then(result => {
        loger.info("Users-------------->", JSON.stringify(result));
        res.send(result);
    }).catch(e=>{
       // loger.error("e-------------->", e);
        res.send({ "error": "load error" });
    });
}
function list(req, res, next) {
    userService.list().then(result => {
        loger.info("Users---list----------->", JSON.stringify(result));
        res.send(result);
    })
}
function add(req, res, next) {

}

function test(req, res, next) {

}
module.exports = {
    detail: detail,
    add: add,
    list:list,
    test: test
}