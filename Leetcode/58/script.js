"use strict";
function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function lengthOfLastWord(s) {
  let newS = "";
  let words = s.split(" ");
  let newWords = [];
  words.forEach(function (word, i, words) {
    newS = "";
    for (let j = 0; j < word.length; j++) {
      if (isLetter(word[j])) {
        newS = newS + word[j];
      }
    }
    if (newS.length > 0) {
      newWords.push(newS);
    }
  });
  console.log("words", words);
  console.log("newWords", newWords);
  let indexOfLastWord = newWords.length - 1;
  let lastWord = newWords[indexOfLastWord];
  return lastWord.length;
}

let text = "Hello, how many words is this.";
let text1 = "Hello, how many words is t.";
let text2 = "Hello, how many words is th.";
let text3 = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(text));
console.log(lengthOfLastWord(text1));
console.log(lengthOfLastWord(text2));
console.log(lengthOfLastWord(text3));
