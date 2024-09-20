"use strict";
const array = [5, 2, 8, 23, 65, 60, 34, 43, 22, 7, 9, 15, 13, 17, 27, 39];

function bubbleSort(arr) {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let a = arr[i];
      let b = arr[i + 1];
      arr[i] = b;
      arr[i + 1] = a;
      console.log(arr);
      n = n + 1;
    }
  }
  if (n > 1) {
    console.log("re run");
    bubbleSort(arr);
  }
  return arr;
}

const sortedArray = bubbleSort(array);
console.log(sortedArray);
