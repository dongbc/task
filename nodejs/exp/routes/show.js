var express = require('express');
var router = express.Router();

/* GET show page. */
router.get('/', function(req, res, next) {
  res.render('show', { title: '商品展示' });
});


module.exports = router;