"use strict";
//////////////////////////////////////////////////////////
// localStorage.clear();
//Variables for Creation Screen
const button = document.getElementById("setGoal");

//Variables for Current Goal Screen
const loadButton = document.getElementById("loadButton");
const saveEntry = document.getElementById("saveEntry");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const percentage = document.getElementById("percentage");
let checkbox1V;
let checkbox2V;

//Variables for notes list
const loadEntrys = document.getElementById("loadEntrys");
//Tools
//takes in arrays and adds the elements to local storage
function addToLocalStorageArray(keys, values) {
  keys.forEach((key, index) => {
    localStorage.setItem(key, values[index]);
  });
}
//takes in a key and a value and adds them to local storage
function addToLocalStorage(key, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value); // Convert object to JSON string
  }
  localStorage.setItem(key, value);
}
//formats a date to M/D/Y
function formatDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedMonth}/${formattedDay}/${year}`;
}

//retreive object from localStorage
function getLocalStorageItem(date) {
  let value = localStorage.getItem(date);
  value = JSON.parse(value);
  return value;
}

//Event Listeners
//Creates Goal and adds data to localstorage
if (button) {
  button.addEventListener("click", function () {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const minimum = document.getElementById("minimum");
    const days = document.getElementById("days");
    const type = document.getElementById("type");

    if (title && description && minimum && days && type) {
      const keys = ["Title", "Description", "Minimum", "Days", "Type"];
      const values = [
        title.value,
        description.value,
        minimum.value,
        days.value,
        type.value,
      ];
      //add key value pairs to local storage individually
      addToLocalStorageArray(keys, values);

      // put them all in one object then save that to localStorage
      let now = new Date();
      now = formatDate(now);
      let dynamicObject = {};
      keys.forEach((key, index) => {
        dynamicObject[key] = values[index];
      });
      addToLocalStorage(title.value, dynamicObject);
      // Clear form fields
      title.value = "";
      description.value = "";
      minimum.value = "";
      days.value = "";
      type.value = "";
    } else {
      console.error("Form elements are missing.");
    }
  });
} else {
  console.error("Button element with id 'setGoal' not found.");
}

//Sets up current goal screen
if (loadButton) {
  loadButton.addEventListener("click", function () {
    const titlep = document.getElementById("titlep");
    const descriptionp = document.getElementById("descriptionp");
    const minimump = document.getElementById("minimump");
    const daysp = document.getElementById("daysp");
    const typep = document.getElementById("typep");

    if (titlep && descriptionp && minimump && daysp && typep) {
      titlep.innerHTML = localStorage.getItem("Title") || "";
      descriptionp.innerHTML = localStorage.getItem("Description") || "";
      minimump.innerHTML = localStorage.getItem("Minimum") || "";
      daysp.innerHTML = localStorage.getItem("Days") || "";
      typep.innerHTML = localStorage.getItem("Type") || "";
    } else {
      console.error("Display elements are missing.");
    }
  });
} else {
  console.error("Button element with id 'loadButton' not found.");
}

//takes user entered data from current goal screen adds it to the data from that goals object and saves it as a new entry with the current date and the goal name as the name
if (saveEntry) {
  saveEntry.addEventListener("click", function () {
    // assign value to the checkboxes
    if (checkbox1.checked) {
      checkbox1V = "Minimum Met";
    } else {
      checkbox1V = "Minimum Not Met";
    }
    if (checkbox2.checked) {
      checkbox2V = "minimum exceeded";
    } else {
      checkbox2V = "minimum not exceeded";
    }
    const percentageValue = percentage.value;
    //get and format current date
    let now = new Date();
    now = formatDate(now);

    //get localStorage item and display it
    let object = getLocalStorageItem("Piano");
    object.minimumStatus = checkbox1V;
    object.minimumExceededStatus = checkbox2V;
    object.percentageValue = percentageValue;
    addToLocalStorage(`${now}Piano`, object);
  });
}
//////////////////////////////////////////////////////////////////

loadEntrys.addEventListener("click", function () {
  let now = new Date();
  now = formatDate(now);
  const entry = getLocalStorageItem(`${now}Piano`);

  const entryString = JSON.stringify(entry, null, 2); // Pretty-print the object with indentation

  // Create a new paragraph element and append the stringified object
  const p = document.createElement("p");
  p.textContent = entryString;

  document.getElementById("target").appendChild(p);
});
