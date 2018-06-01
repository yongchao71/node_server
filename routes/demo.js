/*
 * @Author: ZXY 
 * @Date: 2018-06-01 15:44:05 
 * @Last Modified by:   ZXY 
 * @Last Modified time: 2018-06-01 15:44:05 
 */

var express = require('express');
var router = express.Router();
var demoController=require("../controllers/demoController");
router.get('/sequelizetest', demoController.sequelizetest);
router.get('/detail', demoController.detail);
router.post('/add', demoController.add);
router.get('/test', demoController.test);
router.get('/get', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;