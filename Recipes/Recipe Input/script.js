const ingredients = document.getElementById("ingredientsInput");
const title = document.getElementById("titleInput");
const steps = document.getElementById("stepsInput");
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function () {
  alert(`${title.value} Saved`);
  localStorage.setItem(title.value, ingredients.value, steps.value);
});
