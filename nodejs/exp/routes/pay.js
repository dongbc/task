var express = require('express');
var router = express.Router();

/* GET pay page. */
router.get('/', function(req, res, next) {
  res.render('pay', { title: '支付' });
});


module.exports = router;