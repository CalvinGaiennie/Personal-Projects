"use strict";
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

var addTwoNumbers = function (l1, l2) {
  let l1FS = "";
  let l2FS = "";

  console.log(l1);

  if (Array.isArray(l1)) {
    l1.forEach((el) => (l1FS = el + l1FS));
  } else {
    console.log("THIS IS NOT AN ARRAY");
  }
  if (Array.isArray(l2)) {
    l2.forEach((el) => (l2FS = el + l2FS));
  } else {
    console.log("THIS IS NOT AN ARRAY");
  }

  let sum = Number(l1FS) + Number(l2FS);

  let sumArray = sum.toString().split("").reverse().map(Number);

  for (let i = 0; i < sum.length; i++) {
    let el = sum[i];
    sumArray.push(Number(el));
  }
  console.log(sumArray);
  return sumArray;
};

addTwoNumbers(l1, l2);

let list = [1, 2, 3, 4, 5];
