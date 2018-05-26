var express = require('express');
var router = express.Router();
var sequeController=require("../controllers/sequeController");
router.get('/detail', sequeController.detail);
router.get('/add', sequeController.add);
router.get('/update', sequeController.update);
router.get('/list', sequeController.list);
router.get('/remove', sequeController.remove);

module.exports = router;