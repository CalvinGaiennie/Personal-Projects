"use strict";
var removeDuplicates = function (nums) {
  console.log(nums);
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      console.log("index", i, "index + 1:", i + 1);
      duplicates.push(i + 1);
    }
  }
  for (let i = 0; i < duplicates.length; i++) {
    let index = duplicates[i];
    console.log("index", index);
    nums.splice(index - i, 1);
  }
  console.log(duplicates);
  console.log(nums);
};

let nums = [
  0, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 8, 9, 10, 11, 12, 12,
  12, 13, 13, 13, 13, 13, 13, 13, 14, 15, 16, 16,
];
removeDuplicates(nums);
