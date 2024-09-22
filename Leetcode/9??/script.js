"use strict";

const x = 121;

var isPalindrome = function (x) {
  x = `${x}`;
  console.log(x);
  let newx = "";
  for (let i = 0; i < x.length; i++) {
    let a = x[i];
    newx = a + newx;
  }
  console.log(newx);
  if (newx == x && x > 0) {
    return true;
  } else {
    return false;
  }
};

isPalindrome(-23);
console.log(isPalindrome(x));
