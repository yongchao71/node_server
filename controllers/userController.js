/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-03 18:14:10
 */
var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");

var CRESPONSE = require("../common/cresponse");
var router = require('express').Router();
var userService = require("./../service/userService");
var loger = require("../utils/loger").loger();

router.post('/add', (req, res, next) => {
    let oUser = {
        Name: "sdf山东饭馆",
        LoginName: "itemLoginName",
        Address: "Beijing111北京" + Math.random(),
        Email: "EEE@123.com",
        CreateTime: new Date(),
        Age: 11
    }
    userService.add(oUser).then(result => {
        let createResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(createResult);
    }).catch(error => {
        loger.error("create error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
router.post('/bulkadd', (req, res, next) => {
    let oUser = {
        Name: "sdf山东饭馆",
        LoginName: "itemLoginName",
        Address: "Beijing111北京" + Math.random(),
        Email: "EEE@123.com",
        CreateTime: new Date(),
        Age: 11
    }
    let aUsers=[oUser,oUser];
    userService.bulkadd(aUsers).then(result => {
        let createResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(createResult);
    }).catch(error => {
        loger.error("create error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
router.delete('/:uid', (req, res, next) => {
    let uid = req.params.uid;
    userService.removebyid(uid).then(result => {
        let deleteResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(deleteResult);
    }).catch(error => {
        loger.error("delete error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
router.put('/:uid', (req, res, next) => {
    let uid = req.params.uid;
    let oUser = {
        Name: "sdf山东饭馆",
        LoginName: "itemLoginName",
        Address: "Beijing111北京" + Math.random(),
        Email: "EEE@123.com",
        CreateTime: new Date(),
        Age: 123,
        Id: uid
    }
    userService.updatebyid(oUser).then(result => {
        let updateResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(updateResult);
    }).catch(error => {
        loger.error("update error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
router.get('/list', (req, res, next) => {
    CRESPONSE.VALPARAM.NOTNULL(0, "请求参数不能为空");
    let pageNo = 1;
    let pageSize = 3;
    let options = { where: { id: { $gte: 21 } } };
    userService.list(options, pageNo, pageSize).then(result => {
        let searchResult = CRESPONSE.RESULT.PAGINATION(result,pageNo,pageSize);
        res.send(searchResult);
    }).catch(error => {
        loger.error("search list error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
router.get('/listall', (req, res, next) => {
    CRESPONSE.VALPARAM.NOTNULL(0, "请求参数不能为空");
    let options = { where: { id: { $gte: 21 } } };
    userService.listall(options).then(result => {
        let searchResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(searchResult);
    }).catch(error => {
        loger.error("search list error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
router.get('/:uid', (req, res, next) => {
    let uid = req.params.uid;
    userService.findbyid(uid).then(result => {
        let searchResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(searchResult);
    }).catch(error => {
        loger.error("search error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});

router.get('/get', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;