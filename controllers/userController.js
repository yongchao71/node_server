/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 16:00:18
 */
var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");
var userService=require("./../service/userService");


function detail(req, res, next) {
    res.send({ "user": "user resul1111t" });
}

function add(req, res, next) {

}

function test(req, res, next) {

}
module.exports = {
    detail: detail,
    add: add,
    test: test
}