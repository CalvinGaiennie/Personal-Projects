"use strict";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //get item from array at index i
    //2
    let current = arr[i];
    // j =0
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      //while && 5 > 2
      // arr[1] = arr[0]
      arr[j + 1] = arr[j];
      // j = -1
      j--;
    }
    //array[0] = 2
    arr[j + 1] = current;
  }
  return arr;
}

const array = [5, 2, 8, 23, 65, 60];
const sorted = insertionSort(array);

console.log(sorted);
