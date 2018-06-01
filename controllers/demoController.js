/*
 * @Author: ZXY 
 * @Date: 2018-06-01 15:43:54 
 * @Last Modified by:   ZXY 
 * @Last Modified time: 2018-06-01 15:43:54 
 */

var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");
var loger = require("../utils/loger").loger();
var sequelize = require("../dao/sequelize/sqBase").sequelize;
var Models=require("../models/index");
var Users = require("../dao/sequelize/sqBase").Users;

function sequelizetest(req, res, next) {

    console.log("Models------------------",Models,Models.Users);

    
let user={
    Name:"sdf山东饭馆",
    Address:"Beijing111北京",
    Email:"EEE@123.com",
    Age:11
}

Models.Users.create(user).then(result=>{
    loger.info("create users------------------",JSON.stringify(result));
}).catch(e=>{
    loger.error("create user error---------",e);
});

    // Users.findAll({attributes:["Name","Age"]}) .then(result=>{
    //     loger.info("----find result-----",JSON.stringify(result));
    //   //  loger.info("----find name-----",result);
    //     res.send({result:result});
    // }).catch(e=>{
    //  loger.error("e----------------->",e);
    //  res.send({result:e});
    // });


    Models.Users.findAll({attributes:["Name","Age","email"]}).then(result=>{
        loger.info("----find result-----",JSON.stringify(result));
        res.send({result:result});
    }).catch(e=>{
        loger.error("e----------------->",e);
        res.send({result:e});
    });
    
}

function detail(req, res, next) {
    let aaa = 23;
    loger.info("detail-----", req.session);
    let user = req.session.user || "no user";
    user += Math.random(100).toFixed(2);
    res.send({
        "user": user
    });
}

function add(req, res, next) {
    let aaa = 23;
    loger.info("add-----", req.session);
    loger.info(req.body);
    req.session.user = req.query.uname || "00";
    res.send({
        "hhhhhh": "hjgjhgdfgh枯干古jhg"
    });
}

function test(req, res, next) {

    let getUrl = `${CONFIGAPI.product.list}?unionid=oDOgS0kCV5its31fROZtbdqcpMAE&test=測試`;

    let pdata = {
        unionid: "oDOgS0kCV5its31fROZtbdqcpMAE",
        test: "測試"
    };
    let getUrl2 = CONFIGAPI.product.list;
    let postUrl = `${CONFIGAPI.users.add}?unionid=oDOgS0kCV5its31fROZtbdqcpMAE&test=測試`;
    let oParams = {
        //url:getUrl,
        url: postUrl,
        method: "POST",
        body: {
            unionid: "oDOgS0kCV5its31fROZtbdqcpMAE",
            AAA: "sdfgsdfg"
        }
    };
    // httpRequest.Request(oParams).then(result=>{
    //     console.log("result-------------",typeof(result),Array.isArray(result),result.length);
    //     console.log("result-------------",result[1]);
    //     res.send(result[1]);
    // });
    httpRequest.Get(getUrl2, pdata).then(result => {
        console.log("result-------------", typeof (result), Array.isArray(result), result.length);
        console.log("result-------------", result[1]);
        res.send(result[1]);
    });
    //res.send("this is test data..");
}
module.exports = {
    sequelizetest: sequelizetest,
    detail: detail,
    add: add,
    test: test
}