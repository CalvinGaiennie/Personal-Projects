"use strict";
let board = document.getElementById("board");

function createElement(id, class1, class2, class3) {
  let newElement = document.createElement("div");
  newElement.setAttribute("id", `${id}`);
  newElement.classList.add(`${class1}`, `${class2}`, `${class3}`);
  return newElement;
}
function numToWord(i) {
  let numberWords = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return numberWords[i] || `${i}`;
}
function createBoard() {
  for (let i = 1; i < 10; i++) {
    let boxNum = numToWord(i);
    console.log(boxNum);
    let newElement = createElement(
      `box${i}`,
      "bigSquare",
      "rowNum",
      "columnNum"
    );
    board.appendChild(newElement);
    for (let j = 1; j < 10; j++) {
      createElement(`square row${i}column${j}`, i, j);
      board.appendChild(newElement);
    }
  }
}

// for individul squares
// newElement.classList("row", "square");
// newElement.classList("column", "square");

createBoard();
