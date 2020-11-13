const express = require('express')
router = express.Router()

/*GET */
router.get('/', (req,res)=>{
    return res.send('homepage')
})

module.exports = router;
