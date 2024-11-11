"use strict";
//Get Elements
const bigBoard = document.getElementById("big-board");

//Other Variables
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

//Funcitons
function createEl(type, text, id, classss) {
  const el = document.createElement(`${type}`);
  if (text) {
    el.innerHTML = text;
  }
  if (classss) {
    el.classList.add(`${classss}`);
  }
  if (id) {
    el.id = id;
  }
  return el;
}

//SetupBoard
for (let i = 0; i <= 8; i++) {
  const letter = alphabet[i];
  const board = createEl("div", undefined, undefined, "board");

  for (let j = 0; j <= 8; j++) {
    const id = `${letter}${j}`;
    const el = createEl("button", undefined, id, "square");
    board.appendChild(el);
  }
  bigBoard.appendChild(board);
}
