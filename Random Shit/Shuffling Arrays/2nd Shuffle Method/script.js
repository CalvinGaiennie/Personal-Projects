let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let arrayAlt = [];
let arrayy = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let arrayNames = [
  "adam",
  "ben",
  "cam",
  "dave",
  "ed",
  "fred",
  "gabe",
  "homer",
  "indigo",
  "john",
  "kyle",
  "lane",
  "max",
  "nate",
  "ophilia",
  "penelope",
  "quarx",
  "rachel",
  "sam",
  "terrance",
  "utivitch",
  "veronica",
];
let deck = [
  "2 of Hearts",
  "3 of Hearts",
  "4 of Hearts",
  "5 of Hearts",
  "6 of Hearts",
  "7 of Hearts",
  "8 of Hearts",
  "9 of Hearts",
  "10 of Hearts",
  "Jack of Hearts",
  "Queen of Hearts",
  "King of Hearts",
  "Ace of Hearts",
  "2 of Diamonds",
  "3 of Diamonds",
  "4 of Diamonds",
  "5 of Diamonds",
  "6 of Diamonds",
  "7 of Diamonds",
  "8 of Diamonds",
  "9 of Diamonds",
  "10 of Diamonds",
  "Jack of Diamonds",
  "Queen of Diamonds",
  "King of Diamonds",
  "Ace of Diamonds",
  "2 of Clubs",
  "3 of Clubs",
  "4 of Clubs",
  "5 of Clubs",
  "6 of Clubs",
  "7 of Clubs",
  "8 of Clubs",
  "9 of Clubs",
  "10 of Clubs",
  "Jack of Clubs",
  "Queen of Clubs",
  "King of Clubs",
  "Ace of Clubs",
  "2 of Spades",
  "3 of Spades",
  "4 of Spades",
  "5 of Spades",
  "6 of Spades",
  "7 of Spades",
  "8 of Spades",
  "9 of Spades",
  "10 of Spades",
  "Jack of Spades",
  "Queen of Spades",
  "King of Spades",
  "Ace of Spades",
];
// let arrayy = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const arrayy1 = [...arrayy];
const array1 = [...array];
const arrayNames1 = [...arrayNames];
const deck1 = [...deck];

function shuffle(array) {
  arrayAlt = [];
  for (i = 0; i < array.length * 10; i++) {
    randomIndex = randomNumberGenerator(array.length);
    a = randomIndex;
    value = String(array[a]);
    if (!arrayAlt.includes(value)) {
      arrayAlt.push(value);
    }
  }
  return arrayAlt;
}

function randomNumberGenerator(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}
// console.log(array1);
// array = shuffle(array);
// console.log(array);

// console.log(arrayy);
// arrayy = shuffle(arrayy);
// console.log(arrayy);

console.log(deck);
deck = shuffle(deck);
console.log(deck);
