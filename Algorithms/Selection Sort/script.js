"use strict";

const selectionSortInput = document.getElementById("ss-input");
const selectionSortButton = document.getElementById("ss-button");
const selectionSortOutput = document.getElementById("ss-output");

function findSmallest(ar) {
  let smallest = Math.min(...ar);
  return smallest;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sarr = arr.slice(i);
    const one = sarr[0];
    const smallest = findSmallest(sarr); //2
    const indexOfSmallest = sarr.indexOf(smallest); //1
    arr[i] = smallest;
    arr[indexOfSmallest + i] = one;
  }
  return arr;
}

function seperateInputSS() {
  const inputV = selectionSortInput.value;
  let array = inputV.split(",");
  array.forEach(function (curr, i, arr) {
    curr = Number(curr);
    arr[i] = curr;
  });
  return array;
}

selectionSortButton.addEventListener("click", function () {
  let array = seperateInputSS();
  console.log(array);
  let sorted = selectionSort(array);
  console.log(sorted);
  selectionSortOutput.innerHTML = sorted;
});
