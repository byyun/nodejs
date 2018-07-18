const http = require('http'); //nodejs가 제공하는 웹서버 기능

const hostname = '127.0.0.1';
const port = 1337;
/*
http.createServer((req, res) => { //http변수가 가지고 있는 객체의 createServer 함수를 호출
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => { //서버를 만들고 해당 포트, 호스트네임에 리스닝하도록 처리
 console.log(`Server running at http://${hostname}:${port}/`);
});
*/
var server = http.createServer(function (req, res) { //해당 포트로 들어왔을때 어떤 내용을 출력할지 callback(익명함수)에서 처리
  //createServer 는 두개의 인자 값을 받는다
  //어떤 정보를 요청한 사용자에게 어떻게 응답할 것인가는 두번째 인자값으로 한다.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(port, hostname, function() { //어떤 hostname을 가진 사람을 수용할 것인지 명시
  console.log(`Server running at http://${hostname}:${port}/`);
});
//listen 작업은 시간이 걸리는 작업이므로 callback으로 비동기로 실행됨
