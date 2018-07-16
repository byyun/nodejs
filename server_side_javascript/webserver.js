const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => { //서버를 만들고 해당 포트, 호스트네임에 리스닝하도록 처리
 console.log(`Server running at http://${hostname}:${port}/`);
});
