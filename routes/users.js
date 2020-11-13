const express = require('express')
router = express.Router()
const userCtrl = require('../controllers/userCtrl')

/*GET /users/ show dashboard*/
router.get('/', userCtrl.showDashboard)

router.get('/list', userCtrl.showMatchList)

module.exports = router;
