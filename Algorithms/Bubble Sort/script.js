"use strict";
const bubbleSortInput = document.getElementById("bs-input");
const bubbleSortButton = document.getElementById("bs-button");
const bubbleSortOutput = document.getElementById("bs-output");

function seperateInputBS() {
  const inputV = bubbleSortInput.value;
  console.log(inputV);
  let array = inputV.split(",");
  array.forEach(function (curr, i, arr) {
    curr = Number(curr);
    arr[i] = curr;
  });
  return array;
}
'1,2,1,2,12,243'
[1,2,1,2,12,]
function bubbleSort(arr) {
  let n = 0;
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let a = arr[i];
      let b = arr[i + 1];
      arr[i] = b;
      arr[i + 1] = a;
      n = n + 1;
    }
  }
  if (n > 0) {
    bubbleSort(arr);
  }
  return arr;
}

bubbleSortButton.addEventListener("click", function () {
  const arrayBS = seperateInputBS();
  const sortedArray = bubbleSort(arrayBS);
  bubbleSortOutput.innerHTML = sortedArray;
});
