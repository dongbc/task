var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shoppe', { title: '新店特惠' });
});


module.exports = router;