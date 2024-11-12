"use strict";
//Get Elements
const bigBoard = document.getElementById("big-board");

//Other Variables
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let currentPlayer = "blue";

/////////////////////////////////////////////////////////////
//Functions
////Creates an HTML element
function createEl(type, text, id, class1, class2, func) {
  const el = document.createElement(type);
  if (text) {
    el.innerHTML = text;
  }
  if (class1) {
    el.classList.add(class1);
  }
  if (class2) {
    el.classList.add(class2);
  }
  if (id) {
    el.id = id;
  }
  if (func == "true") {
    el.onclick = function () {
      squareClicked(el, id);
    };
  }
  return el;
}

//Implements Game Logic when a square is clicked
function squareClicked(el, id) {
  if (currentPlayer == "blue") {
    const element = document.getElementById(id);
    element.innerHTML = "X";
  } else if (currentPlayer == "red") {
    const element = document.getElementById(id);
    element.innerHTML = "O";
  }
  changePlayer();
  console.log(id);
  el.onclick = null;
}

//Changes the current player and the document background color
function changePlayer() {
  if (currentPlayer == "red") {
    document.body.style.backgroundColor = "lightblue";
    currentPlayer = "blue";
  } else if (currentPlayer == "blue") {
    document.body.style.backgroundColor = "rgb(254, 97, 97)";
    currentPlayer = "red";
  }
}

/////////////////////////////////////////////////////////
//Initial Setup
//Sets up the Board
for (let i = 0; i <= 8; i++) {
  const letter = alphabet[i];
  const board = createEl("div", undefined, undefined, "board");

  for (let j = 0; j <= 8; j++) {
    const id = `${letter}${j}`;
    const iString = "board" + i;
    const el = createEl("button", undefined, id, "square", iString, "true");
    board.appendChild(el);
  }
  bigBoard.appendChild(board);
}
