//set nessesary constants for later
const namesList = document.getElementById("namesList");
const items = [];
const button = document.getElementById("button");
const deleteButton = document.getElementById("deleteButton");
const noteToRemove = "";
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
  getAllLocalStorageItems();
  const leftBanner = document.getElementById("left-banner");
  leftBanner.innerHTML = `<h1>Notes</h1>`;

  //Loop through the list of items and create notes dynamically
  for (let i = 0; i < names.length; i++) {
    // Create a new p element for each note
    const newP = document.createElement("p");
    const now = new Date();
    const date = now.toLocaleDateString();

    // Add some text content to the div
    newP.innerHTML = `
    <div class='noteWrap'>
    <h3>${items[i].key}</h3>
    <button class='button' id="button${i}">...</button>
    </div>
    ${date}<br>${items[i].value}`;

    // Add an id to the div
    newP.id = `${items[i].key}`;

    // Append the new div to the body of the document
    document.getElementById("left-banner").appendChild(newP);

    //Add an event listener to the newly created button
    const createdButton = document.getElementById(`button${i}`);

    createdButton.addEventListener("click", function () {
      alert("Are you sure you want to delete this note?");

      const newS = document.createElement("p");

      // create a select element with yes and no
      newS.innerHTML = `<select id="select${i}>
      <option value="yes">yes</option>
      <option value="no">no</option>
      </select>`;

      // give it an id and append it to the above note
      document.getElementById(`${newP.id}`).appendChild(newS);

      // create a button give it an id and append it to the select
      const newB = document.createElement("button");
      newB.innerText = "Choose";
      newB.id = `delete-button${i}`;
      newS.appendChild(newB);

      //add an event listener to that button so that when the button is clicked it deletes the button and the select. and if it the select is on yes when the button is clicked then it also deletes the note.
      newB.addEventListener("click", function () {
        const selectValue = document.getElementById(`select${i}`).value;
        if (selectValue === "yes") {
          deleteNote(items[i].key);
        } else {
          alert("Note will not be deleted.");
        }
      });
      // deleteNote(items[i].key);
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
