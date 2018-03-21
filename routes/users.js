var express = require('express');
var router = express.Router();
var usersController=require("../controllers/usersController");
router.get('/detail', usersController.detail);
router.get('/add', usersController.add);

module.exports = router;
