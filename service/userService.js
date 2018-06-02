var loger = require("../utils/loger").loger();
var Models = require("../models/index");
var BaseService=require("./BaseService");
var CONSTANT=require("../config/constant");
function detail() {
    let User=new BaseService("User");
    let Belone=new BaseService("Belone");
    let Doctors=new BaseService("Doctors");
    let options={attributes:["Name","Age"],where:{id:{$gt:21}},limit: 3};
    return  User.findAll(options).then(result=>{
       // loger.info("promise result-------------",JSON.stringify(result));
       return CONSTANT.RESULT.SUCCESS(result);
    }).catch(e=>{
        loger.error("search error-----------",e);
        return CONSTANT.ERROR.SERVERERROR;
    });
}
function list(req, res, next) {
    let User=new BaseService("User");
    let pageNo=1;
    let pageSize=3;
    let options={where:{id:{$gte:21}}};
    return  User.findAndCountAll(options,pageNo,pageSize).then(result=>{
        // loger.info("promise result-------------",JSON.stringify(result));
        return CONSTANT.RESULT.PAGINATION(result,pageNo,pageSize);
     }).catch(e=>{
         loger.error("search error-----------",e);
         return CONSTANT.ERROR.SERVERERROR;
     });
}
function add(req, res, next) {
    let user = {
        Name: "sdf山东饭馆",
        LoginName:"itemLoginName",
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