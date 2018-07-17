var _ = require('underscore'); //언더스코어는  _(언더바)를 변수로 쓰도록 약속
var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));
