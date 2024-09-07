//set nessesary constants for later
const namesList = document.getElementById("namesList");
const items = [];
const button = document.getElementById("button");
const deleteButton = document.getElementById("deleteButton");
const noteToRemove = document.getElementById("noteToRemove");
var names;

//Functions
/////////////////////////////////////////////////////////////////////////////////////////////
//get all localStorage items and display them
function getAllLocalStorageItems() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    items.push({ key, value });
  }
  names = items.map((item) => item.key);
}

// add the note name and data to local storage
function addToLocalStorage() {
  const noteName = document.getElementById("noteName");
  const data = document.getElementById("data");
  localStorage.setItem(noteName.value, data.value);
  const key = noteName.value;
  const value = data.value;
  items.push({ key, value });
  //clear input feilds
  noteName.value = "";
  data.value = "";
}

//Create Note
function createNote() {
  // addToLocalStorage();
  getAllLocalStorageItems();
  const leftBanner = document.getElementById("left-banner");
  leftBanner.innerHTML = `<h1>Notes</h1>`;
  for (i = 0; i < names.length; i++) {
    // Create a new div element
    const newP = document.createElement("p");

    // Add some text content to the div
    newP.innerHTML = `<div class='noteWrap'><h3>${items[i].key}</h3> <button class='button' id="button${i}">...</button> </div><br>${items[i].value}`;
    // Add a class to the div (optional)
    newP.id = `${items[i].key}`;

    // Append the new div to the body of the document
    document.getElementById("left-banner").appendChild(newP);
  }
}
function clearNoteDisplay() {
  items.length = 0;
  names = [];
  noteToRemove.value = "";
}
//Delete A Note
function deleteNote() {
  key = noteToRemove.value;
  keyString = key + "";
  localStorage.removeItem(keyString);
  getAllLocalStorageItems();
  clearNoteDisplay();
}

//Dom Events
//////////////////////////////////////////////////////////////////////////////////////////////////////////
deleteButton.addEventListener("click", function (event) {
  deleteNote();
  createNote();
});

button.addEventListener("click", function (event) {
  addToLocalStorage();
  getAllLocalStorageItems();
  clearNoteDisplay();
  createNote();
});

//when browser updates
document.addEventListener("DOMContentLoaded", function () {
  createNote();
});
