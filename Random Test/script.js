"use strict";
// localStorage.clear();
const button = document.getElementById("setGoal");
/////
const keys = ["Title", "Description", "Minimum", "Days", "Type"];
const values = [
  title.value,
  description.value,
  minimum.value,
  days.value,
  type.value,
];
////
function addToLocalStorage(keys, values) {
  ////
  localStorage.setItem(keys[0], values[0]);
  localStorage.setItem(keys[1], values[1]);
  localStorage.setItem(keys[2], values[2]);
  localStorage.setItem(keys[3], values[3]);
  localStorage.setItem(keys[4], values[4]);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];
  }
  ////
  localStorage.setItem("Title", objectA);
}
/////
if (button) {
  button.addEventListener("click", function () {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const minimum = document.getElementById("minimum");
    const days = document.getElementById("days");
    const type = document.getElementById("type");
    const keys = ["Title", "Description", "Minimum", "Days", "Type"];
    const values = [
      title.value,
      description.value,
      minimum.value,
      days.value,
      type.value,
    ];
    addToLocalStorage(keys, values);
    title.value = "";
    description.value = "";
    minimum.value = "";
    days.value = "";
    type.value = "";
    values[0].innerHTML = "";
  });
} else {
  document.addEventListener("DOMContentLoaded", function () {
    const titlep = document.getElementById("titlep");
    const descriptionp = document.getElementById("descriptionp");
    const minimump = document.getElementById("minimump");
    const daysp = document.getElementById("daysp");
    const typep = document.getElementById("typep");
    ////
    titlep.innerHTML = localStorage.getItem("Title");
    descriptionp.innerHTML = localStorage.getItem("Description");
    minimump.innerHTML = localStorage.getItem("Minimum");
    daysp.innerHTML = localStorage.getItem("Days");
    typep.innerHTML = localStorage.getItem("Type");
  });
}
