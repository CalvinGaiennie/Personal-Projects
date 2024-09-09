const ingredients = [
  `{rice} cups of rice.`,
  `{beef} ounces of beef.`,
  `{eggs} eggs`,
  `{onions} onions`,
  `{zuchini} zuchinis`,
  `{squash} squashes`,
  `{soySauce} ounces of soy sauce.`,
];

const steps = [];
const ingredientRatios = [1];

const ingredientNames = [
  "rice",
  "beef",
  "eggs",
  "onions",
  "zuchini",
  "squash",
  "soySauce",
];
function createElement(element, content) {
  const el = document.createElement(element);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}

function calculateSteps() {
  const numOfServings = parseFloat(document.getElementById("input").value);
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    const ingredientMap = {
      rice: ingredientsAmount[0],
      beef: ingredientsAmount[1],
      eggs: ingredientsAmount[2],
      onions: ingredientsAmount[3],
      zuchini: ingredientsAmount[4],
      squash: ingredientsAmount[5],
      soySauce: ingredientsAmount[6],
    };

    const updatedSteps = steps.map((step) => {
      let updatedStep = step;
      for (const [key, amount] of Object.entries(ingredientMap)) {
        updatedStep = updatedStep.replace(`{${key}}`, amount);
      }
      return updatedStep;
    });
    writeRecipe(updatedSteps, "#steps");
  }
}
function calculateIngredients() {
  const numOfServings = parseFloat(document.getElementById("input").value);
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    console.log(ingredientsAmount);
    const ingredientMap = {
      rice: ingredientsAmount[0],
      beef: ingredientsAmount[1],
      eggs: ingredientsAmount[2],
      onions: ingredientsAmount[3],
      zuchini: ingredientsAmount[4],
      squash: ingredientsAmount[5],
      soySauce: ingredientsAmount[6],
    };

    const updatedIngredients = ingredients.map((ingredient) => {
      let updatedStep = ingredient;
      for (const [key, amount] of Object.entries(ingredientMap)) {
        updatedStep = updatedStep.replace(`{${key}}`, amount);
      }
      return updatedStep;
    });
    writeRecipe(updatedIngredients, "#ingredients");
  }
}

function writeRecipe(updatedSteps, place) {
  const recipe = document.querySelector(`${place}`);
  recipe.innerHTML = " ";

  updatedSteps.forEach((step) => {
    const recipeElement = createElement("p", step);
    recipe.appendChild(recipeElement);
  });
}

document.getElementById("input").addEventListener("change", calculateSteps);
document.addEventListener("DOMContentLoaded", function () {
  calculateSteps();
});
document
  .getElementById("input")
  .addEventListener("change", calculateIngredients);
document.addEventListener("DOMContentLoaded", function () {
  calculateIngredients();
});
