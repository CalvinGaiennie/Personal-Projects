"use strict";
function search(nums, target) {
  let spot;
  const index = nums.indexOf(target);
  if (index > -1) {
    return index;
  }
  spot = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return (spot = i);
    }
  }
  return spot;
}

const array = [1, 3, 5, 9];
console.log(search(array));
