const express = require('express');
const mysql = require('mysql');

const indexRouter = require('./routes/index');

const app = express();

// interlink router
app.use(indexRouter);

/** 현재 실행한 파일의 이름과 Path*/
//console.log('finaname : ' + __filename);

/** 현재 실행한 파일의 Path */
//console.log('dirname : ' + __dirname);

const port = 3002;


// 1. http 모듈을 이용한 웹서버
// var http = require('http');
// var server = http.createServer();
// server.listen(port, host, 50000, function(){
//    console.log('');
// });

// 2. express를 이용한 웹서버
// const express = require('express');
// const app = express();
app.listen(port, ()=>console.log(`Listening on port ${port}`));
