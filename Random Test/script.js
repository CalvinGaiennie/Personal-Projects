"use strict";
const input = document.getElementById("Input");
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const inputV = input.value;
  const inputVNumber = Number(inputV);
  const newNumber = inputVNumber + 7;
  output.innerHTML = newNumber;
});
