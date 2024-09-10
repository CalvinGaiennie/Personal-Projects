// localStorage.clear();
//Constants
const ingredientsDiv = document.getElementById("ingredientsDiv");
const title = document.getElementById("titleInput");
const steps = document.getElementById("stepsInput");
const saveButton = document.getElementById("saveButton");
const addIngButt = document.getElementById("addIngButt");
const addStepButt = document.getElementById("addStepButt");
var iterationI = 1;
var iterationS = 1;
const ingInputs = [];
const stepInputs = [];
const items = [];

///////////////////////////////////////////////////////
//////
//Functions

function getAllLocalStorageItems() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    items.push({ key, value });
  }
  names = items.map((item) => item.key);
  console.log(items);
}
function addIngredientInput() {
  const newInput = document.createElement("input");
  newInput.id = `ingredient${iterationI}`;
  ingInputs.push(`ingredient${iterationI}`);
  document.getElementById("ingredientsDiv").appendChild(newInput);
  iterationI = iterationI + 1;
}

function addStepInput() {
  const newInput = document.createElement("input");
  newInput.id = `step${iterationS}`;
  stepInputs.push(`step${iterationS}`);
  document.getElementById("stepsDiv").appendChild(newInput);
  iterationS = iterationS + 1;
}

function saveInfo(array) {
  for (i = 0; i < array.length; i++) {
    const value = `${array[i]}`;
    const valueE = document.getElementById(value);
    localStorage.setItem(array[i], `${valueE.value}`);
  }
}
//////////////////////////////////////////////////////////
//Add event Listeners
addIngButt.addEventListener("click", function () {
  // alert("hello");
  addIngredientInput();
});

addStepButt.addEventListener("click", function () {
  addStepInput();
});

saveButton.addEventListener("click", function () {
  saveInfo(ingInputs);
  saveInfo(stepInputs);
  getAllLocalStorageItems();
});
