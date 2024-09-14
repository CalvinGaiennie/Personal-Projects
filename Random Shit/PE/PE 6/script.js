'use strict';
//
// The sum of the squares of the first ten natural numbers is,

// 1
// 2
// +
// 2
// 2
// +
// .
// .
// .
// +
// 10
// 2
// =
// 385.
// The square of the sum of the first ten natural numbers is,

// (
// 1
// +
// 2
// +
// .
// .
// .
// +
// 10
// )
// 2
// =
// 55
// 2
// =
// 3025.
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
// 3025
// −
// 385
// =
// 2640
// .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const numbers = [];
const squares = [];
for (var i = 0; i <= 99; i++) {
  //Creates an array of the numbers 1-100
  numbers.push(i + 1);
  //Creates an array of the Squares of numbers 1-100
  squares.push((i + 1) ** 2);
}

console.log(numbers);
console.log(squares);

//Adds all of the squares together
const sumOfSquares = squares.reduce(
  (acc, currentValue) => acc + currentValue,
  0
);

//Adds all of the numbers together then squares the total
const squareOfSum =
  numbers.reduce((acc, currentValue) => acc + currentValue, 0) ** 2;

console.log(sumOfSquares);
console.log(squareOfSum);
console.log(squareOfSum - sumOfSquares);
