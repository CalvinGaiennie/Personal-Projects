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

//Makes an array of all 3 digit numbers
var threeDNums = [];
for (var i = 1; i < 1001; i++) {
  for (var j = 1; j < 1001; j++) {
    const a = i * j;
    //checks to make sure a is more or less than 3 digits and checks that the number generated has not already been added to our array
    if (a > 99 && a < 1000 && !threeDNums.includes(a)) {
      //adds the new number to the array
      threeDNums.push(a);
    }
  }
}
console.log(threeDNums);

//This function reverses numbers
const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

// multiples our three digit numbers against each other and adds the ones that are palindromes to a new array
var result3 = [];
for (var i = 1; i < 900; i++) {
  for (var j = 1; j < 900; j++) {
    const a = threeDNums[i] * threeDNums[j];
    if (reversedNum(a) == a) {
      result3.push(a);
    }
  }
}
console.log(Math.max(...result3));
