"use strict";
//encoder
const input = document.getElementById("mce-input");
const mcbutton = document.getElementById("mce-button");
const mcoutput = document.getElementById("mce-output");

//decoder
const dinput = document.getElementById("mcd-input");
const dmcbutton = document.getElementById("mcd-button");
const dmcoutput = document.getElementById("mcd-output");

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

mcbutton.addEventListener("click", function () {
  let textmc = input.value;
  console.log(textmc);
  const encodedText = encode(textmc);
  mcoutput.innerHTML = encodedText;
});

dmcbutton.addEventListener("click", function () {
  let textmc = dinput.value;
  console.log(textmc);
  let seperated = seperateLetters(textmc);
  const decodedText = decode(seperated, code);
  dmcoutput.innerHTML = decodedText;
});
