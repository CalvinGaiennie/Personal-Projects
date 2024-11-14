"use strict";
//Get Elements
const bigBoard = document.getElementById("big-board");
const currentPlayerEl = document.getElementById("currentPlayerH");
const currentPlayerDiv = document.getElementById("currentPlayerDiv");

//Other Variables
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const squareList = [];

/////////////////////////////////////////////////////////////
//Functions
////Creates an HTML element
function createEl(
  type,
  text,
  id,
  data,
  func,
  class1,
  class2,
  class3,
  class4,
  class5
) {
  const el = document.createElement(type);
  if (text) {
    el.innerHTML = text;
  }
  if (data) {
    el.dataset.letter = data;
  }
  if (id) {
    el.id = id;
  }
  if (func == "true") {
    el.onclick = function () {
      squareClicked(el, id);
    };
  }
  if (class1) {
    el.classList.add(class1);
  }
  if (class2) {
    el.classList.add(class2);
  }
  if (class3) {
    el.classList.add(class3);
  }
  if (class4) {
    el.classList.add(class4);
  }
  if (class5) {
    el.classList.add(class5);
  }
  return el;
}

function checkNumber() {}
/////////////////////////////////////////////////////////
//Initial Setup
//Sets up the Board
for (let i = 0; i <= 8; i++) {
  const letter = alphabet[i];
  const board = createEl(
    "div",
    undefined,
    letter,
    undefined,
    undefined,
    "board"
  );

  for (let j = 0; j <= 8; j++) {
    const iString = "board" + letter;
    let column;
    let row;

    //Setup Column 1
    if ((i == 0 || i == 3 || i == 6) && (j == 0 || j == 3 || j == 6)) {
      column = "c1";
    }
    //Setup Column 2
    if ((i == 0 || i == 3 || i == 6) && (j == 1 || j == 4 || j == 7)) {
      column = "c2";
    }
    //Setup Column 3
    if ((i == 0 || i == 3 || i == 6) && (j == 2 || j == 5 || j == 8)) {
      column = "c3";
    }
    //Setup Column 4
    if ((i == 1 || i == 4 || i == 7) && (j == 0 || j == 3 || j == 6)) {
      column = "c4";
    }
    //Setup Column 5
    if ((i == 1 || i == 4 || i == 7) && (j == 1 || j == 4 || j == 7)) {
      column = "c5";
    }
    //Setup Column 6
    if ((i == 1 || i == 4 || i == 7) && (j == 2 || j == 5 || j == 8)) {
      column = "c6";
    }
    //Setup Column 7
    if ((i == 2 || i == 5 || i == 8) && (j == 0 || j == 3 || j == 6)) {
      column = "c7";
    }
    //Setup Column 8
    if ((i == 2 || i == 5 || i == 8) && (j == 1 || j == 4 || j == 7)) {
      column = "c8";
    }
    //Setup Column 9
    if ((i == 2 || i == 5 || i == 8) && (j == 2 || j == 5 || j == 8)) {
      column = "c9";
    }
    //Setup Row 1
    if ((i == 0 || i == 1 || i == 2) && (j == 0 || j == 1 || j == 2)) {
      row = "r1";
    }
    //Setup Row 2
    if ((i == 0 || i == 1 || i == 2) && (j == 3 || j == 4 || j == 5)) {
      row = "r2";
    }
    //Setup Row 3
    if ((i == 0 || i == 1 || i == 2) && (j == 6 || j == 7 || j == 8)) {
      row = "r3";
    }
    //Setup Row 4
    if ((i == 3 || i == 4 || i == 5) && (j == 0 || j == 1 || j == 2)) {
      row = "r4";
    }
    //Setup Row 5
    if ((i == 3 || i == 4 || i == 5) && (j == 3 || j == 4 || j == 5)) {
      row = "r5";
    }
    //Setup Row 6
    if ((i == 3 || i == 4 || i == 5) && (j == 6 || j == 7 || j == 8)) {
      row = "r6";
    }
    //Setup Row 7
    if ((i == 6 || i == 7 || i == 8) && (j == 0 || j == 1 || j == 2)) {
      row = "r7";
    }
    //Setup Row 8
    if ((i == 6 || i == 7 || i == 8) && (j == 3 || j == 4 || j == 5)) {
      row = "r8";
    }
    //Setup Row 9
    if ((i == 6 || i == 7 || i == 8) && (j == 6 || j == 7 || j == 8)) {
      row = "r9";
    }
    const id = letter + "-" + column + row;
    const el = createEl(
      "button",
      id,
      id,
      undefined,
      "true",
      "square",
      iString,
      column,
      row
    );

    board.appendChild(el);
    squareList.push(id);
  }
  bigBoard.appendChild(board);
}

console.log(squareList);
