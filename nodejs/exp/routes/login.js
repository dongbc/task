var express = require('express');
var router = express.Router();
var db = require('../models/conn');
/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.post('/',function(req,res,next){
    var tel = req.body.phone;
    var sql = "select * from users where phone = "+tel;
    db.query(sql,function(err,rows){
        if(err){
            res.send(err);
        }else{
            if(typeof(rows[0]) == 'object'){
                console.log(sql);
                res.send(rows);
            }else{
                var add = "insert into users (phone) values ("+ tel +")";
                db.query(add,function(err,rows){
                    if(err){
                        res.send(err);
                    }else{
                        console.log(add);
                        res.send(rows);
                    }
                })
            }
        }
    })
})

module.exports = router;