/*
 * @Author: ZXY 
 * @Date: 2018-06-01 15:45:26 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 16:00:04
 */

var express = require('express');
var router = express.Router();
var usersController=require("../controllers/userController");
router.get('/detail', usersController.detail);
router.post('/add', usersController.add);
router.get('/test', usersController.test);
router.get('/get', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
