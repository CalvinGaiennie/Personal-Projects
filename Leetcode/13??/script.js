"use strict";
const object = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

// 80%

var romanToInt = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let curr = object[s[i]];
    let prev = object[s[i - 1]];
    if (
      (curr == 5 && prev == "1") ||
      (curr == 50 && prev == "10") ||
      (curr == 500 && prev == "100")
    ) {
      curr = curr * 0.6;
    } else if (
      (curr == 10 && prev == "1") ||
      (curr == 100 && prev == "10") ||
      (curr == 1000 && prev == "100")
    ) {
      curr = curr * 0.8;
    }
    arr.push(curr);
  }
  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);
  return sum;
};

romanToInt("III");
romanToInt("IV");
romanToInt("V");

romanToInt("LVIII");

romanToInt("MCMXCIV");
