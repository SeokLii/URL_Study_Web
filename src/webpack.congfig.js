const path = require('path');

module.exports = {
  name : '', //원하는 이름
  mode : 'development', //실 서비스 : production
  devtool : 'eval', //빠르게 개발한다. 실서비스 : hidden-source-map
  resolve : { //확장자를 연결해준다.
    extensions : ['.js', '.jsx']
  },

  //입력
  entry : {
    app : [''],
  },

  //모듈 적용
  module : {
    //규칙(배열)
    rules : [{
      test: /\.jsx?$/, //규칙을 적용할 파일, 정규표현식(js and jsx)
      loader : 'babel-loader', //babel 적용하겠다.
      //babel의 옵션
      options : {
        //github.com/browserslist 에서 지원가능한 브라우저 리스트 확인이 가능하다.
        presets : ['@babel/preset-env', '@babel/preset-react'], //preset == pligins 모음
        // 아래처럼 더 자세하게 설정이 가능하다.
        // presets : [
        //   ['@babel/preset-env', {
        //     targets : {
        //       browsers : ['> 5% in KR', 'last 2 chrome versions'], //한국에서 5% 점유율 이상의
        //     },
        //   }],
        //   '@babel/preset-react',
        // ],
        //plugins : [react-hot-loader/babel //webpack 자동 빌더
        //],
      },
    }],
  },

  //출력
  output : {
    path : path.join(__dirname, '/public'),
    filename : 'bundle.js'
    //,publicPath: '/dist/'
    //가상경로 설정 app.use('/dist', express.static(__dirname + '/dist')); 동일

  },
};
