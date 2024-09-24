"use strict";

function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = "";
  let currLetter = "";
  let currLetterArray = [];
  let currLetterI = 0;
  let matches = 0;
  for (let i = 0; i < strs[0].length; i++) {
    //adds the first letter of every word into an array and sets the first letter of the first word as currLetter
    strs.forEach((curr, j) => {
      if (j == 0) {
        currLetter = curr[currLetterI];
      }
      currLetterArray.push(curr[currLetterI]);
    });
    // console.log(currLetterArray);

    //checks to see if the first letter in every word equals the current Letter
    for (let k = 0; k < currLetterArray.length; k++) {
      if (currLetterArray[k] == currLetter) {
        // console.log("Word", k, "Matches");
        matches = matches + 1;
      }
    }
    //If every letter matched the current letter then this adds that letter to the prefix
    if (matches == strs.length) {
      prefix = prefix + currLetter;
    } else {
      return prefix;
    }
    //Reset constants
    currLetterArray = [];
    matches = 0;
    currLetterI = currLetterI + 1;
  }
  return prefix;
}

let array = ["hey", "hello", "helium"];
let array1 = ["owl", "outlook", "om", "optimus"];
let array2 = ["herehere", "here", "heres", "herewego"];
let array3 = ["cir", "car"];
console.log(longestCommonPrefix(array));
console.log(longestCommonPrefix(array1));
console.log(longestCommonPrefix(array2));
console.log(longestCommonPrefix(array3));
