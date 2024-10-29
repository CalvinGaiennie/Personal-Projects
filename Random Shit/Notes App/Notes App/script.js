//set nessesary constants for later
const namesList = document.getElementById("namesList");
const items = [];
const button = document.getElementById("button");
const deleteButton = document.getElementById("deleteButton");
const noteToRemove = "";
var names;

//Functions
/////////////////////////////////////////////////////////////////////////////////////////////
function clearAll() {
  localStorage.clear();
}
//get all localStorage items and display them
function getAllLocalStorageItems() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    items.push({ key, value });
  }
  names = items.map((item) => item.key);
  console.log(items);
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

//Create Notes
function createNote() {
  getAllLocalStorageItems();
  const leftBanner = document.getElementById("left-banner");
  leftBanner.innerHTML = `<h1>Notes</h1>`;

  //Loop through the list of items and create notes dynamically
  for (let i = 0; i < names.length; i++) {
    // Create a new p element for each note
    const newDiv = document.createElement("p");

    //create a date
    const now = new Date();
    const date = now.toLocaleDateString();

    // Add some text content to the div including the note title and content
    newDiv.innerHTML = `
    <div class='noteWrap'>
    <h3>${items[i].key}</h3>
    <button class='button' id="button${i}">...</button>
    </div>
    ${date}<br>${items[i].value}`;

    // Add an id to the div
    newDiv.id = `${items[i].key}`;

    // Append the new div to the body of the document
    document.getElementById("left-banner").appendChild(newDiv);

    //Add an event listener to the newly created button
    const createdButton = document.getElementById(`button${i}`);

    createdButton.addEventListener("click", function () {
      const confirmationB = document.createElement("p");
      // create a div containing the confirmation buttons
      confirmationB.innerHTML = `<div id="div${i}">

      <button id="confirmB">Confirm Deletion</button>

      <br>
      <button id="denyB">Reverse</button>
      </div>`;

      // give it an id and append it to the above note
      document.getElementById(`${newDiv.id}`).appendChild(confirmationB);

      //Add event listeners
      const confirmB = document.getElementById(`confirmB`);
      const denyB = document.getElementById(`denyB`);
      confirmB.addEventListener("click", function () {
        deleteNote(items[i].key);
      });
      denyB.addEventListener("click", function () {
        confirmB.remove();
        denyB.remove();
        window.location.reload();
      });
    });
  }
}

function clearNoteDisplay() {
  items.length = 0;
  names = [];
  noteToRemove.value = "";
}
//Delete A Note
function deleteNote(input) {
  // key = noteToRemove.value;
  key = input;
  keyString = key + "";
  localStorage.removeItem(keyString);
  getAllLocalStorageItems();
  clearNoteDisplay();
  createNote();
}

//Dom Events
//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
