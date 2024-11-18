"use strict";

//Remove Characters
const text = "Hello, World! 123 :)";
const lettersOnly = text.replace(/[^a-zA-Z]/g, "");
// ^ means we are operating on all charachters other than the ones listed
//G means global. replace all matches

console.log(lettersOnly); // Output: "HelloWorld"
