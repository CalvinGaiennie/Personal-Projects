'use strict';
const multiplesOf5 = [];
for (let i = 0; i < 200; i++) {
  const currentNumber = i * 5;
  multiplesOf5.push(currentNumber);
}

const multiplesOf3 = [];
for (let i = 0; i < 334; i++) {
  const currentNumber = i * 3;
  multiplesOf3.push(currentNumber);
}

const set = new Set(multiplesOf5.concat(multiplesOf3));

let newArray = [...set];

console.log(newArray.length);
const sum = newArray.reduce((acc, i) => acc + i, 0);

console.log(sum);
