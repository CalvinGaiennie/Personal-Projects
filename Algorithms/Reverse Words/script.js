"use strict";
//Ceaser Cypher
const text =
  "Ceaser used this cypher to encode messages. Are you going to use it?";

function seperate(str) {
  let words = str.split(" ");
  return words;
}

function reverseString(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString = str[i] + newString;
  }
  return newString;
}

function encodeText(text) {
  let seperatedText = seperate(text);
  console.log(seperatedText);
  let newText = "";
  seperatedText.forEach(function (word, index) {
    word = word.toLowerCase();
    let rword = reverseString(word);
    newText = newText + rword + " ";
    console.log(newText);
  });
  return newText;
}
const newStr = seperate(text);

// console.log(reverseString("happy"));

console.log(encodeText(text));
