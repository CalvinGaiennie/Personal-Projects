"use strict";
//Get Elements
const bigBoard = document.getElementById("big-board");
const currentPlayerEl = document.getElementById("currentPlayerH");
const currentPlayerDiv = document.getElementById("currentPlayerDiv");

//Other Variables
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let currentPlayer = "blue";
document.body.style.backgroundColor = "lightblue";
let blueSquares = [];
let redSquares = [];
const winSolutions = [
  [0, 1, 2],
  [0, 4, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
/////////////////////////////////////////////////////////////
//Functions
////Creates an HTML element
function createEl(type, text, id, class1, class2, data, func) {
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
  return el;
}

//Implements Game Logic when a square is clicked
function squareClicked(el, id) {
  if (currentPlayer == "blue") {
    const element = document.getElementById(id);
    blueSquares.push(id);
    element.innerHTML = "X";
  } else if (currentPlayer == "red") {
    const element = document.getElementById(id);
    redSquares.push(id);
    element.innerHTML = "O";
  }
  changePlayer();
  el.onclick = null;
  let data = el.dataset.letter;
  checkForWin(data);
}

//Changes the current player and the document background color
function changePlayer() {
  if (currentPlayer == "red") {
    currentPlayerEl.innerHTML = "Current Player: Blue";
    document.body.style.backgroundColor = "lightblue";
    currentPlayer = "blue";
  } else if (currentPlayer == "blue") {
    currentPlayerEl.innerHTML = "Current Player: Red";
    document.body.style.backgroundColor = "rgb(254, 97, 97)";
    currentPlayer = "red";
  }
}

function createBoardWins(data) {
  //recreate the win solutions array but with the ids for the current board
  let winsArray = [];

  for (let i = 0; i < winSolutions.length; i++) {
    //get the first win solution
    let currentWinSolution = winSolutions[i];
    //declare an array
    let currentWinArray = [];

    for (let j = 0; j < currentWinSolution.length; j++) {
      //map through current solution and add a letter to change it to match the ids for that board.
      let currentSquare = data + currentWinSolution[j];
      //push that id to the current win array
      currentWinArray.push(currentSquare);
    }
    winsArray.push(currentWinArray);
  }
  return winsArray;
}

function win(data) {
  for (let i = 0; i <= 8; i++) {
    let currentButton = document.getElementById(`${data}${i}`);
    console.log(currentButton);
    if (currentPlayer == "red") {
      currentButton.style.backgroundColor = "lightblue";
    } else {
      currentButton.style.backgroundColor = "rgb(254, 97, 97)";
    }
    currentButton.onclick = null;
  }
}

function checkForWin(data) {
  const currentPossibleWins = createBoardWins(data);
  for (let i = 0; i < currentPossibleWins.length; i++) {
    let currentPossibleWin = currentPossibleWins[i];
    if (currentPlayer == "red") {
      let allMatch = currentPossibleWin.every((element) =>
        blueSquares.includes(element)
      );
      if (allMatch == true) {
        console.log("Blue Wins");
        win(data);
      }
    } else if (currentPlayer == "blue") {
      let allMatch = currentPossibleWin.every((element) =>
        redSquares.includes(element)
      );

      if (allMatch == true) {
        console.log("Red Wins");
        win(data);
      }
    }
  }
}

/////////////////////////////////////////////////////////
//Initial Setup
//Sets up the Board
for (let i = 0; i <= 8; i++) {
  const letter = alphabet[i];
  const board = createEl("div", undefined, letter, "board");

  for (let j = 0; j <= 8; j++) {
    const id = `${letter}${j}`;
    const iString = "board" + i;
    const letterData = alphabet[i];
    const el = createEl(
      "button",
      undefined,
      id,
      "square",
      iString,
      letterData,
      "true"
    );
    board.appendChild(el);
  }
  bigBoard.appendChild(board);
}
