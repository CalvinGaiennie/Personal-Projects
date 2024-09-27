"use strict";
const test = "()[]{}";
const test2 = "(({[]}))";
const test3 = "(({((([])))}))";
const fail1 = "(({{[[]}))";

let flip = function (s) {
  let newS = "";
  const half = s.length / 2;
  const frontHalf = s.slice(0, half);
  const backHalf = s.slice(half, s.length);
  for (let i = 0; i < half; i++) {
    let curr = "";
    if (s[i] == "(") {
      curr = ")";
    } else if (s[i] == "{") {
      curr = "}";
    } else if (s[i] == "[") {
      curr = "]";
    }
    newS = curr + newS;
  }
  console.log("string", s, frontHalf);
  console.log("newS", newS);
  console.log("Origional backHalf", backHalf);
  if (backHalf == newS) {
    return true;
  } else {
    return false;
  }
};
flip(test);
// flip(test2);
// flip(test3);
// flip(fail1);
