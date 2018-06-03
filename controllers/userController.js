/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-03 19:33:18
 */
var CONFIGAPI = require("./../config/remoteAPI");
var httpRequest = require("./../utils/httpRequest");

var CRESPONSE = require("../common/cresponse");
var router = require('express').Router();
var userService = require("./../service/userService");
var loger = require("../utils/loger").loger();

/**
 * 添加单挑信息
 */
router.post('/add', (req, res, next) => {
    let oUser = req.body;
    oUser = {
        AAA: "sfdgsfdg",
        Name: "撒大声地sdf山东饭馆",
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
/**
 * 批量添加
 */
router.post('/bulkadd', (req, res, next) => {
    let oUser = {
        Name: "sdf山东饭馆",
        LoginName: "itemLoginName",
        Address: "Beijing111北京" + Math.random(),
        Email: "EEE@123.com",
        CreateTime: new Date(),
        Age: 11
    }
    let aUsers = [oUser, oUser];
    userService.bulkadd(aUsers).then(result => {
        let createResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(createResult);
    }).catch(error => {
        loger.error("create error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
/**
 * 根据id删除
 */
router.delete('/:sid', (req, res, next) => {
    let sid = req.params.sid;
    userService.removebyid(sid).then(result => {
        let deleteResult = CRESPONSE.RESULT.SUCCESS(result);
        res.send(deleteResult);
    }).catch(error => {
        loger.error("delete error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
/**
 * 根据主键修改
 */
router.put('/:sid', (req, res, next) => {
    let sid = req.params.sid;
    let oUser = {
        Name: "sdf山东饭馆",
        LoginName: "itemLoginName",
        Address: "Beijing111北京" + Math.random(),
        Email: "EEE@123.com",
        CreateTime: new Date(),
        Age: 123,
        Id: sid
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
/**
 * 获取分页列表
 */
router.get('/list', (req, res, next) => {
    CRESPONSE.VALPARAM.NOTNULL(0, "请求参数不能为空");
    let pageNo = 1;
    let pageSize = 3;
    let options = { where: { id: { $gte: 21 } } };
    userService.list(options, pageNo, pageSize).then(result => {
        let searchResult = CRESPONSE.RESULT.PAGINATION(result, pageNo, pageSize);
        res.send(searchResult);
    }).catch(error => {
        loger.error("search list error-----------", error);
        let errorResult = CRESPONSE.ERROR.SERVERERROR;
        res.send(errorResult);
    });
});
/**
 * 获取所有查询结果
 */
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
/**
 * 根绝主键查询单挑信息
 */
router.get('/:sid', (req, res, next) => {
    let sid = req.params.sid;
    userService.findbyid(sid).then(result => {
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