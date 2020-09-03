var express = require('express');
const { response } = require('express');
var mysql_odbc = require('../database/database_conn')();
// ..은 이전 상위 폴더를 가리키고 .는 해당 폴더를 가리킨다.
const router = express.Router();
const connection = mysql_odbc.init();

router.get('/hello', function(req, res){
 
  var sql = "select * from board";
  var sql2 = "select * from card";
  connection.query(sql, function (err, rows) {
    connection.query(sql2, function(err, rows2){
      res.send({board : rows, card : rows2});
    })
  });
});

router.get('/test', function(req, res){
 
  var sql = "select * from test";
  connection.query(sql, function (err, rows) {
      res.send(rows);
  });
});

router.post('/update', function(req, res){
  console.log(req);
  // if(Object.keys(req.query).length != 0){
  //   //console.log(req.query);
  //   //console.log(req.query.data);
  // }
  
});

module.exports = router;
