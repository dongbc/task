var express = require('express');
var router = express.Router();
//var insert = require('conn').insert;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

//router.post('/',function(req,res){
//    var uname = req.body.userName;
//    if(uname == '1234'){
//        res.send("yes");
//    }else{
//        res.send("no");
//    }
//    
//    insert(data, function(data){
//        if(data == ){
//           
//           }
//    })
//})

module.exports = router;
