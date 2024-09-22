"use strict";
const nums = [1, 5, 4, 7, 9];
const target = 11;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let tar = target - nums[i];
    let index = nums.indexOf(tar);
    if (index != -1 && i != index) {
      let answer = [index, i];
      return answer;
    }
  }
};

console.log(twoSum(nums, target));
