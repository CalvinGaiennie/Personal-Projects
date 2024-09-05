//set nessesary constants for later
const namesList = document.getElementById("namesList");
const items = [];
var names;

// Function to get all localStorage items and display them
function getAllLocalStorageItems() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    items.push({ key, value });
  }
  names = items.map((item) => item.key);
  console.log(names);
  createNameList();
}

function createNameList() {
  names = items.map((item) => item.key);
  console.log(names);
  // const reverse = names.reverse();
  namesList.textContent = "Note Names: " + names.join(", ");
}
//when browser updates
document.addEventListener("DOMContentLoaded", function () {
  getAllLocalStorageItems();
});

//Allow User to create and store notes
const button = document.getElementById("button");

button.addEventListener("click", function (event) {
  // add the note name and data to local storage
  const noteName = document.getElementById("noteName");
  const data = document.getElementById("data");
  localStorage.setItem(noteName.value, data.value);
  const key = noteName.value;
  const value = data.value;
  items.push({ key, value });
  createNameList();
  //clear input feilds
  noteName.value = "";
  data.value = "";
});

//allow user to retreive notes
const noteToRetreive = document.getElementById("noteToRetreive");

const retreiveButton = document.getElementById("retreiveButton");
const retreivedNote = document.getElementById("retreivedNote");

retreiveButton.addEventListener("click", function (event) {
  const noteData = localStorage.getItem(noteToRetreive.value);
  console.log(noteData);
  retreivedNote.textContent = noteData;
});

//Delete A Note
const deleteButton = document.getElementById("deleteButton");
const noteToRemove = document.getElementById("noteToRemove");

deleteButton.addEventListener("click", function (event) {
  key = noteToRemove.value;
  keyString = key + "";
  console.log(keyString);
  localStorage.removeItem(keyString);
  getAllLocalStorageItems();
  items.length = 0;
  names = [];
  noteToRemove.value = "";
});
