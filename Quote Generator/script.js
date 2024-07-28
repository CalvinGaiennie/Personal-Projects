"use strict";
function calculate() {
  // Get input values
  const wasteArray = new Array(16).fill(0);
  const distance = parseFloat(document.getElementById("distance").value);
  const boardNum = parseFloat(document.getElementById("boardNum").value);
  //   const sidesNum = parseFloat(document.getElementById("sides").value);
  // Check for valid inputs
  if (isNaN(distance) || isNaN(boardNum)) {
    alert("Please enter valid numbers for all inputs.");
    return;
  }
  if (distance / 8 - Math.trunc(distance / 8) > 0) {
    numOfUnits = Math.trunc(distance / 8) + 1;
  } else {
    numOfUnits = distance / 8;
  }
  if (distance / 16 - Math.trunc(distance / 16) > 0) {
    numOfSt = Math.trunc(distance / 16) * 3 + 3;
    waste = 15 - (distance / 16 - Math.trunc(distance / 16)) * 16;
    wasteArray[waste] += 3;
  } else {
    numOfSt = (distance / 16) * 3;
  }
  console.log(numOfUnits);
  console.log(numOfSt);
  numOfP = numOfUnits + 1;
  numOfC = numOfP;
  numOfUnitsB = numOfUnits - 1 + (distance - (numOfUnits - 1) * 8) / 8;
  console.log(numOfUnitsB);
  numOfB = Math.ceil(numOfUnitsB * boardNum);
  console.log(numOfB);
  numOfSSc = numOfB * 6;
  numOfLSc = numOfSt * 6;

  //display the result
  document.getElementById(
    "solutionText"
  ).textContent = `You need ${numOfP} posts, ${numOfC} bags of concrete, ${numOfSt} 2x4s, ${numOfB} boards, ${numOfSSc} short screws and, ${numOfLSc} long screws.`;

  console.log(waste);
  console.log(wasteArray);
}
