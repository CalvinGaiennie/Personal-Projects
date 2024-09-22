"use strict";
const possibleA = [];
let num = 1;

function possibleAs() {
  for (let i = 0; i < 333; i++) {
    possibleA.push(num);
    num++;
  }
}
possibleAs();

console.log(possibleA);
