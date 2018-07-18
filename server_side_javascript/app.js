var express = require('express'); //모듈은 함수
var app = express(); //객체 생성
app.set('view engine', 'jade'); //사용할 템플릿 엔진을 Express에게 알리는 명령. jade라는 확장 파일을 세팅
app.set('views', './views') // jade 를 사용할 views 템플릿 디렉토리를 지정 해주어야함.
app.locals.pretty = true; // jade 문법은 들여쓰기에 의해 코드가 작성되는데 그것을 자동으로 이쁘게 만들어주도록 세팅
app.use(express.static('public')); //public라는 디렉토리를 정적인 파일이 위치한 디렉토리로 지정.
//사용자가 웹서버에 접속할때는 get, post 방식이 존재
app.get('/', function(req, res) { //사용자가 홈으로 접속했을때, 실행시킨 get 메소드를 통해서 두번째 인자로 전달한 익명함수가 실행되도록 약속
  res.send('Hello home page'); //사용자가 첫번째 매개변수로 사용자가 요청한 request 객체를 전달하고, 두번째 인자 요청에 대한 응답에 대한 객체를 전달하도록 약속
});
app.get('/template', function(req, res) {
  res.render('temp', {time:Date(), _title:'Jade'}); //템플릿엔진을 사용하는 템플릿 소스를 읽어옴(렌더링), temp파일을 웹페이지로 렌더링해서 전송한다는 뜻
  //temp라는 템플릿을 호출해서 렌더링한 결과를 사용자에게 response 한다.
  //temp.jade안에서 사용할 변수(time, _title)를 지정하여 렌더링한다.
})
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0; i < 5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
      ${lis}
      </ul>
      ${time}
    </body>
  </html>`;
  res.send(output);
});
app.get('/route', function(req, res) {
  res.send('Hello Route, <img src="/Tulips.jpg">' )
});
app.get('/login', function(req, res) {
  res.send('Login please!');
});
app.listen(3000, function(){ //3000번 포트로 리스닝 시킴
  console.log('Connect 3000 port!');
});
//어떠한 경로로 들어왔을때 어떤 경로를 실행할 것인가를 get 메소드가 결정(연결)한다.
//get이라는 메소드를 라우터라고 부른다. 라우터가하는 일을 라우팅이라고 하고
//길을 찾는다라는 뜻
