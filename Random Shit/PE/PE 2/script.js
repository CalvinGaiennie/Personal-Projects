'use strict';

var a = 1;
var b = 2;
var c = 0;
var fibonachiNum = [1, 2];
for (let i = 1; c < 4000000; i++) {
  c = a + b;
  var hold = b;
  fibonachiNum.push(c);
  a = hold;
  b = c;
}

fibonachiNum = fibonachiNum.filter(function (x) {
  return x < 4000000;
});
console.log(fibonachiNum);

fibonachiNum = fibonachiNum.filter(e => e % 2 === 0);
console.log(fibonachiNum);

const sum = fibonachiNum.reduce((acc, i) => acc + i, 0);

console.log(sum);
