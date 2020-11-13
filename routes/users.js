var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/userCtrl')

/* GET show user dashboard */
router.get('/', userCtrl.showDashboard);

module.exports = router;
