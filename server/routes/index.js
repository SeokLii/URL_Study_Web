var express = require('express');
var mysql_odbc = require('../database/database_conn')();

const router = express.Router();
const connection = mysql_odbc.init();

router.get('/', function(req, res){

  res.render('App');
});

module.exports = router;
