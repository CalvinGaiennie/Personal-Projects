"use strict";
const insertionSortInput = document.getElementById("is-input");
const insertionSortButton = document.getElementById("is-button");
const insertionSortOutput = document.getElementById("is-output");

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //get item from arrayis at index i
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
    //arrayis[0] = 2
    arr[j + 1] = current;
  }
  return arr;
}

const arrayis = [
  5, 984, 23, 12, 13, 1253, 1, 7, 6, 9, 345, 2, 8, 234, 89, 1, 23, 65, 60,
];

function seperateInput() {
  const inputV = insertionSortInput.value;
  let array = inputV.split(",");
  array.forEach(function (curr, i, arr) {
    curr = Number(curr);
    arr[i] = curr;
  });
  return array;
}

insertionSortButton.addEventListener("click", function () {
  let array = seperateInput();
  console.log(array);
  let sorted = insertionSort(array);
  console.log(sorted);
  insertionSortOutput.innerHTML = sorted;
});
