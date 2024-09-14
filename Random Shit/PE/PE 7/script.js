// 'use strict';
// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the
// 10001st prime number?
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var testNum = 6;
var d = [];
var noD = [];
const primeNums = [1];

for (var i = 0; primeNums.length < 10003; i++) {
  noD = [];
  d = [];

  //this for loop will check the test number against every number in the nums array
  for (var j = 0; j <= nums.length; j++) {
    if (testNum % j == 0) {
      noD.push(j);
    } else {
      d.push(j);
    }
  }
  if (noD.length == 2) {
    primeNums.push(testNum);
  }
  console.log(primeNums.length);
  console.log(primeNums[primeNums.length - 1]);
  //the outer loop will continue to lengthen the numbers array and up the test number until it has found the ammount of prime numbers we want it to find
  nums.push(1 + nums[nums.length - 1]);
  testNum++;
}

console.log(d);
console.log(noD);
console.log(primeNums);
console.log(primeNums[10002]);
