var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('orbit', { title: 'Express' });
});

router.get('/sprite', function(req, res, next) {
  res.render('sprite', { title: 'Express' });
});


module.exports = router;
