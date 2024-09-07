const ingredients = [
  `{water} cups of water`,
  `{yeast} teaspoons of yeast`,
  `{sugar} teaspoons of sugar`,
  "{flour} cups of flour",
  "{salt} teaspoons of salt",
  "{oliveOil} tablespoons of olive oil",
  "{flour} cups of flour",
];

const steps = [
  `Step 1: Mix {water} cup of warm water {yeast} teaspoons of yeast and {sugar} teaspoons of sugar in a bowl then let it sit for 5 minutes.,`,
  `Step 2: Add {flour} cups of flour. {salt} teaspoons of salt and {oliveOil} tablespoon of olive oil.`,
  `Step 3: Sprinkle flour on a clean work surface then knead the dough for 5-7 minutes slowly adding about {flour2} cups of flour until the dough is smooth and elastic.`,
  `Step 4: Coat a bowl in olive oil then put the dough in and let it rise until it doubles in size. About an hour.`,
  `Step 5: Cut the dough into small peices roll it flat and cook it for 2 mins each side in the oven or on the stove.`,
];
const ingredientRatios = [1, 2, 0.5, 2.5, 2, 1, 0.5];

const ingredientNames = [
  "water",
  "yeast",
  "sugar",
  "flour",
  "salt",
  "oliveOil",
  "flour2",
];

function createElement(element, content) {
  const el = document.createElement(element);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}
function calculateSteps() {
  const numOfServings = parseFloat(document.getElementById("input").value) / 8;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    const ingredientMap = {
      water: ingredientsAmount[0],
      yeast: ingredientsAmount[1],
      sugar: ingredientsAmount[2],
      flour: ingredientsAmount[3],
      salt: ingredientsAmount[4],
      oliveOil: ingredientsAmount[5],
      flour2: ingredientsAmount[6],
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
  const numOfServings = parseFloat(document.getElementById("input").value) / 8;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    console.log(ingredientsAmount);
    const ingredientMap = {
      water: ingredientsAmount[0],
      yeast: ingredientsAmount[1],
      sugar: ingredientsAmount[2],
      flour: ingredientsAmount[3],
      salt: ingredientsAmount[4],
      oliveOil: ingredientsAmount[5],
      flour2: ingredientsAmount[6],
    };

    const updatedIngredients = ingredients.map((ingredient) => {
      let updatedStep = ingredient;
      for (const [key, amount] of Object.entries(ingredientMap)) {
        updatedStep = updatedStep.replace(`{${key}}`, amount);
      }
      return updatedStep;
    });
    console.log(updatedIngredients);
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
