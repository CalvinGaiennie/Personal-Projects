"use strict";

const text =
  "Ceaser used this cypher to encode messages. Are you going to use it?";

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
  console.log(text);
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    const newLetter = reflect(text[i]);
    newText = newText + newLetter;
    console.log(newText);
  }
  return newText;
}

const stuff = reflectText(text);
console.log(stuff);
