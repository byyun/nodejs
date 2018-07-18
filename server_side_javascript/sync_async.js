var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'}); // '1'을 찍은 후 readFileSync함수에 의해 data.txt 내용이 찍힘
console.log(data);

// Async
console.log(2);
/*
var data = fs.readFile('data.txt', {encoding:'utf8'}, (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
var data = fs.readFile('data.txt', {encoding:'utf8'}, function(err, data) {
  if (err) throw err;
  console.log(3);
  console.log(data);
});
console.log(4);
//readFile 함수가 data.txt를 읽어오고, 그 작업이 끝날때 익명함수를 호출.하고, 에러가 있다면 첫번째 인자인 err에 err 노출, 성공한다면
// 두번째 인자인 data에 data.txt 값을 노출시킴.
//readFile이 실행되는 동시에 '4'가 찍히므로 순서는 2-4-3 찍힘
