var express = require('express');
var router = express.Router();
const User = require('../models/User')
const Match = require('../models/Match')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/***
 * db testing
 */
router.get('/add', (req,res) => {
  let match = new Match({
    mName: req.query.mName,
    mDescription: req.query.mDescription
  })

  match.save().then(()=>{
    console.log('done')
  })
})

module.exports = router;
