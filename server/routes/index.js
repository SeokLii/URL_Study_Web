var express = require('express');
var mysql_odbc = require('../database/database_conn')();
// ..은 이전 상위 폴더를 가리키고 .는 해당 폴더를 가리킨다.
const router = express.Router();
const connection = mysql_odbc.init();

router.get('/', function(req, res){

  res.render('App');
});
router.get('/hi', function(req, res){

  res.render('index ');
});

module.exports = router;
