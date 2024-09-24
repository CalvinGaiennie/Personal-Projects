"use strict";

const text =
  "Ceaser used this cypher to encode messages. Are you going to use it?";

//
const rminput = document.getElementById("rme-input");
const rmbutton = document.getElementById("rme-button");
const rmoutput = document.getElementById("rme-output");
//
const drminput = document.getElementById("rmd-input");
const drmbutton = document.getElementById("rmd-button");
const drmoutput = document.getElementById("rmd-output");

// const pairs = [
//   { a, n },
//   { b, o },
//   { c, p },
//   { d, q },
//   { e, r },
//   { f, s },
//   { g, t },
//   { h, u },
//   { i, v },
//   { j, w },
//   { k, x },
//   { l, y },
//   { m, z },
//   { n, a },
//   { o, b },
//   { p, c },
//   { q, d },
//   { r, e },
//   { s, f },
//   { t, g },
//   { u, h },
//   { v, i },
//   { w, j },
//   { x, k },
//   { y, l },
//   { z, m },
// ];
const pairsO = {
  a: "n",
  b: "o",
  c: "p",
  d: "q",
  e: "r",
  f: "s",
  g: "t",
  h: "u",
  i: "v",
  j: "w",
  k: "x",
  l: "y",
  m: "z",
  n: "a",
  o: "b",
  p: "c",
  q: "d",
  r: "e",
  s: "f",
  t: "g",
  u: "h",
  v: "i",
  w: "j",
  x: "k",
  y: "l",
  z: "m",
};
function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function reflect(letter) {
  let newLetter;
  if (isLetter(letter) == true) {
    newLetter = pairsO[letter];
  } else return letter;
  return newLetter;
}

function reflectText(text) {
  text = text.toLowerCase();
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    const newLetter = reflect(text[i]);
    newText = newText + newLetter;
  }
  return newText;
}

rmbutton.addEventListener("click", function () {
  let text = rminput.value;
  let reflectedText = reflectText(text);
  rmoutput.innerHTML = reflectedText;
});

//////

function unReflect(letter) {
  let obj = pairsO;
  let newLetter;
  if (isLetter(letter) == true) {
    newLetter = Object.keys(obj).find((i) => obj[i] === value);
  } else return letter;
  return newLetter;
}

function unReflectText(text) {
  text = text.toLowerCase();
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    const newLetter = reflect(text[i]);
    newText = newText + newLetter;
  }
  return newText;
}

drmbutton.addEventListener("click", function () {
  let text = drminput.value;
  let reflectedText = unReflectText(text);
  drmoutput.innerHTML = reflectedText;
});
