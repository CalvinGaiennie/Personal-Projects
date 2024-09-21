"use strict";
//Ceaser Cypher
const text =
  "Ceaser used this cypher to encode messages. Are you going to use it?";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const number = 5;

function replace(str) {
  let newStr = str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "." || str[i] == "?" || str[i] == "!" || str[i] == ",") {
      newStr = newStr.substring(0, i) + " " + newStr.substring(i + 1);
    }
  }
  return newStr;
}

function shiftLetter(letter, num) {
  const lcLetter = letter.toLowerCase();
  const index = alphabet.indexOf(lcLetter);

  // If not a letter, return the original character
  if (index === -1) return letter;

  // Shift index and wrap around using modulus for encoding
  let newIndex = (index + num) % alphabet.length;
  if (newIndex < 0) newIndex += alphabet.length;

  const newLetter = alphabet[newIndex];
  return letter === letter.toUpperCase() ? newLetter.toUpperCase() : newLetter;
}

function encoder(str, num) {
  str = replace(str);
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += shiftLetter(str[i], num);
  }
  return newStr;
}

function decoder(str, num) {
  str = replace(str);
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += shiftLetter(str[i], -num); // Reverse shift for decoding
  }
  return newStr;
}

const encoded = encoder(text, 10);
const decoded = decoder(encoded, 10);

console.log(encoded);
// console.log(decoded);
