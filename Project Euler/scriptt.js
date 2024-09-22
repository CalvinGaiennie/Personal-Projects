"use strict";
let num = 0;
//This function checks to see if the three numbers are a pythagorean triplet

function check1000(a, b, c) {
  console.log(a + b + c);
  num = num++;
  console.log(`${num}: ${a},${b},${c}`);
  if (a < b && b < c && a * a + b * b == c * c && a + b + c == 12 && c < 1002) {
    return "Correct";
  } else {
    return `c:${c}`;
  }
}

function find1000() {
  let a = 1;
  let b = 1;
  let c = 1;
  let bigStatus = "";
  //Initial Check
  for (let i = 0; a + b + c <= 1000; i++) {
    c++;
    //Initial Check
    let status = check1000(a, b, c);
    if (status == "Correct") {
      bigStatus = `Success 1000!!! a: ${a} b:$log("Initial Check");
      return b{b} c:${c}`;
      console.igStatus;
    } else {
      for (let i = 0; b < c - 1; i++) {
        //If wrong increase b by 1
        b++;
        //check again
        let status = check1000(a, b, c);
        if (status == "Correct") {
          bigStatus = `Success 1000!!! a: ${a} b:${b} c:${c}`;
          console.log("++b");
          return bigStatus;
        } else {
          for (let i = 0; a < b - 1; i++) {
            // if wrong increase a until its the same as b
            a++;
            let status = check1000(a, b, c);
            if (status == "Correct") {
              bigStatus = `Success 1000!!! a: ${a} b:${b} c:${c}`;
              console.log("++a");
              return bigStatus;
            }
          }
          if (status == "Correct") {
            bigStatus = `Success 1000!!! a: ${a} b:${b} c:${c}`;
            return bigStatus;
          } else {
            a = 1;
          }
        }
      }
      b = 1;
    }
  }
}

const ch = find1000();
console.log(ch);
//increase c by 1
//check it with a and b as 1 then increase b by 1 then a by 1 all the way to b
// continue increasing
