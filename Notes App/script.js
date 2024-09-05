//set nessesary constants for later
const namesList = document.getElementById("namesList");
const items = [];
const button = document.getElementById("button");
const deleteButton = document.getElementById("deleteButton");
const noteToRemove = document.getElementById("noteToRemove");
var names;

// Function to get all localStorage items and display them
function getAllLocalStorageItems() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    items.push({ key, value });
  }
  names = items.map((item) => item.key);
}

//when browser updates
document.addEventListener("DOMContentLoaded", function () {
  createNote();
});

//Allow User to create and store notes
button.addEventListener("click", function (event) {
  // add the note name and data to local storage
  const noteName = document.getElementById("noteName");
  const data = document.getElementById("data");
  localStorage.setItem(noteName.value, data.value);
  const key = noteName.value;
  const value = data.value;
  items.push({ key, value });
  //clear input feilds
  noteName.value = "";
  data.value = "";
});

//Delete A Note
deleteButton.addEventListener("click", function (event) {
  key = noteToRemove.value;
  keyString = key + "";
  localStorage.removeItem(keyString);
  getAllLocalStorageItems();
  items.length = 0;
  names = [];
  noteToRemove.value = "";
});

//Create Note
function createNote() {
  getAllLocalStorageItems();
  const leftBanner = document.getElementById("left-banner");
  leftBanner.innerHTML = `<h1>Notes</h1>`;
  for (i = 0; i < names.length; i++) {
    // Create a new div element
    const newP = document.createElement("p");

    // Add some text content to the div
    newP.innerHTML = `<h3>${items[i].key}</h3> ${items[i].value}`;
    // Add a class to the div (optional)
    newP.id = `${items[i].key}`;

    // Append the new div to the body of the document
    document.getElementById("left-banner").appendChild(newP);
  }
}
