const express = require('express')
router = express.Router()

/*GET */
router.get('/', (req,res)=>{
    return res.render('home')
})

module.exports = router;
