"use strict";
function search(nums, target) {
  let spot;
  const index = nums.indexOf(target);
  if (index > -1) {
    return nums.indexOf(target);
  } else {
    nums.forEach(function (number, i) {
      if (number < target) {
        console.log(number, i);
      } else {
        // what if the number needs to be last?
        spot = nums.indexOf(i);
      }
    });
  }
  return spot;
}

const array = [1, 3, 5, 9];
console.log(search(array, 10));
