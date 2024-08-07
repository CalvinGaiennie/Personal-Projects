'use strict';
/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 
2
-digit numbers is 
9009
=
91
×
99
.

Find the largest palindrome made from the product of two 
3
-digit numbers.
*/
var result = '\n';
for (var i = 1; i < 1111; i++) {
  for (var j = 1; j < 1111; j++) {
    result += i * j + ' ';
  }
  result += '\n';
}
console.log(result);

var result1 = [];
for (var i = 1; i < 11; i++) {
  for (var j = 1; j < 11; j++) {
    const a = i * j;
    // if (a > 99 && a < 1200) {
    //   result.push(a);
    // }
    result1.push(a);
  }
}

console.log(result1);
