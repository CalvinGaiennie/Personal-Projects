'use strict';

// var result = '\n';
// for (var i = 1; i < 11; i++) {
//   for (var j = 1; j < 11; j++) {
//     result += i * j + ' ';
//   }
//   result += '\n';
// }

// console.log(result);

//////////////////////////////////////////////////
// var result2 = 'x ';
// for (var i = 0; i < 11; i++) {
//   for (var j = 0; j < 11; j++) {
//     if (i == 0 && j > 0) {
//       result2 += '[' + j + ']';
//     } else if (j == 0 && i > 0) {
//       result2 += '[' + i + '] ';
//     } else if (i > 0 && j > 0) {
//       result2 += i * j + ' ';
//     }
//   }
//   result2 += '\n';
// }

// console.log(result2);

const SDN = [];
var result = '\n';
for (var i = 1; i < 10; i++) {
  for (var j = 1; i < 10; j++) {
    // const a = SDN.push(i * j);
    // console.log(a);
    result += i * j + '';
  }
  result += '\n';
}

console.log(result);
console.log(SDN);

// for (let i = 1; i < 9; i++) {
//   SDN.push(i + 1);
// }
