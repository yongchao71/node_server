/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-05-27 15:55:30
 */
var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");
var loger = require("../utils/loger").loger();
var Models = require("../models/index");

function detail(req, res, next) {
    Models.User.findOne().then(result => {
        loger.info("Users-------------->", JSON.stringify(result));
    });
    res.send({ "user": "user result" });
}
function add(req, res, next) {
    let user = {
        Name: "sdf山东饭馆",
        Address: "Beijing111北京"+Math.random(),
        Email: "EEE@123.com",
        CreateTime: new Date(),
        Age: 11
    }

    Models.User.create(user).then(result => {
        loger.info("create users------------------", JSON.stringify(result));
        res.send({ "user": result });
    }).catch(e => {
        loger.error("create user error---------", e);
        res.send({ "error": e });
    });
}
function update(req, res, next) {
    Models.User.update({
        LoginName: "登录名24352345"
    }, {
            where: {
                Id: 21
            }
        }).then(result => {
            loger.info(result);
            res.send({ "user": JSON.stringify(result)});
        }).catch(e => {

            loger.error("e----------------->", e);
            res.send({ "error": e });
        });
}
function list(req, res, next) {
    // Models.Users.findAll({ attributes: ["Name", "Age", "email"] }).then(result => {
    //     loger.info("----find result-----", JSON.stringify(result));
    //     res.send({ result: result });
    // }).catch(e => {
    //     loger.error("e----------------->", e);
    //     res.send({ result: e });
    // });

    // Models.User.findAll({include:Models.Belone}).then(result=>{
    //     loger.info("Users result----------",JSON.stringify(result));
    // }).catch(e=>{
    //     loger.error("e-----------------",e);
    // });


    
    Models.User.findAll({include:Models.Role}).then(result=>{
        loger.info("Users role result----------",JSON.stringify(result));
    }).catch(e=>{
        loger.error("e-----------------",e);
    });

    Models.Belone.findAll({include:Models.User}).then(result=>{
       // loger.info("belone result----------",JSON.stringify(result));
        res.send({ result: result });
    }).catch(e=>{
        loger.error("e-----------------",e);
        res.send({ result: e });
    });



    // Models.Users.findAndCountAll({
    //     where:{Name:"sdf山东饭馆"},
    //     order: [['CreateTime', 'ASC']],
    //     offset: 0, 
    //     limit: 3
    //   })
    //   .then(function (result) {
    //     loger.info("----find result-----", JSON.stringify(result));
    //     res.send({ result: result });
    //   })
    //   .catch(e => {
    //     loger.error("e----------------->", e);
    //     res.send({ result: e });
    // });
}
function remove(req, res, next) {
    Models.User.destroy({          where: {
        Id: 27
    }}).then(result => {
        loger.info("Users-------------->", JSON.stringify(result));
    });
    res.send({ "user": "user result" });
}

module.exports = {
    detail: detail,
    add: add,
    update: update,
    list: list,
    remove: remove
}