var express = require('express');
var router = express.Router();
var usersController=require("../controllers/usersController");
router.get('/detail', usersController.detail);
router.post('/add', usersController.add);
router.get('/test', usersController.test);
router.get('/get', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
