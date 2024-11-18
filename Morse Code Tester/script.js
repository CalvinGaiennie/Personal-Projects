"use strict";

//Elements
const exampleText = document.getElementById("example-text");
const loadText = document.getElementById("load-text");
const submitAnswer = document.getElementById("submit-answer");
const textInput = document.getElementById("text-input");

//Data
const quotes = ["hey there fella", "how are you", "hmmmm"];
const code = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

//Dynamic Data
let currentQuote;
let quoteEncoded;

//Functions
function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function encode(text) {
  text = text.toLowerCase();
  let newString = "";
  let newSym;
  for (let i = 0; i < text.length; i++) {
    if (isLetter(text[i]) == true) {
      newSym = code[text[i]] + " ";
    } else if (text[i] == " " || text[i] == ",") {
      newSym = text[i] + " ";
    } else {
      newSym = " ... - --- .--.";
    }

    newString = newString + newSym;
  }
  return newString;
}

function seperateLetters(str) {
  let words = str.split(" ");
  return words;
}

function decode(arr, obj) {
  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value != "") {
      const key = Object.keys(obj).find((i) => obj[i] === value);
      newString = newString + key;
    } else {
      const key = " ";
      newString = newString + key;
    }
  }
  return newString;
}

//Event Listeners
loadText.addEventListener("click", function () {
  let min = 0;
  let max = quotes.length;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  currentQuote = quotes[randomNumber];
  quoteEncoded = encode(quotes[randomNumber]);

  exampleText.innerHTML = currentQuote;
});

submitAnswer.addEventListener("click", function () {
  const userText = textInput.value;
  console.log(userText);
  console.log(quoteEncoded);
  if (userText == quoteEncoded) {
    console.log("sucess");
  }
});
