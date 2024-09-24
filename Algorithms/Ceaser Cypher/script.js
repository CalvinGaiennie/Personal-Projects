"use strict";
//Encoder
const eCCinput = document.getElementById("cce-input");
const eCCnuminput = document.getElementById("cce#-input");
const eCCbutton = document.getElementById("cce-button");
const eCCoutput = document.getElementById("cce-output");

//decoder
const dCCinput = document.getElementById("ccd-input");
const dCCnuminput = document.getElementById("ccd#-input");
const dCCbutton = document.getElementById("ccd-button");
const dCCoutput = document.getElementById("ccd-output");

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
  const lowercaseLetter = letter.toLowerCase();
  const index = alphabet.indexOf(lowercaseLetter);
  // If not a letter, return the original character
  if (index === -1) return letter;

  // Shift index and wrap around using modulus for encoding
  let newIndex = (index + Number(num)) % alphabet.length;
  if (newIndex < 0) newIndex += alphabet.length;

  const newLetter = alphabet[newIndex];
  return letter === letter.toUpperCase() ? newLetter.toUpperCase() : newLetter;
}

function encoder(str, num) {
  str = replace(str);
  console.log(str);
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

eCCbutton.addEventListener("click", function () {
  let text = eCCinput.value;
  let num = eCCnuminput.value;
  let encoded = encoder(text, num);
  eCCoutput.innerHTML = encoded;
});

dCCbutton.addEventListener("click", function () {
  let text = dCCinput.value;
  console.log(text);
  let num = dCCnuminput.value;
  console.log(num);
  let decoded = decoder(text, num);
  dCCoutput.innerHTML = decoded;
});
