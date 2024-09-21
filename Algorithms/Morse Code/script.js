"use strict";
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

const text = "Is this morse code? You tell me.";

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function convert(text) {
  text = text.toLowerCase();
  let newString = "";
  let newSym;
  for (let i = 0; i < text.length; i++) {
    if (isLetter(text[i]) == true) {
      newSym = code[text[i]] + " ";
    } else {
      newSym = text[i] + " ";
    }

    newString = newString + newSym;
  }
  return newString;
}

const done = convert(text);
console.log(done);

//I need to write a decoder
