const ingredients = [
  `{beef} ounces of beef`,
  `{onion} onions`,
  `{garlic} cloves of garlic`,
  `{carrots} carrots`,
  `{celery} celery stalks`,
  `{cabbage} cabbages`,
];

const steps = [
  `Step 1: Brown the beef in a large soup pot.`,
  `Step 2: Take the beef out sautee the onions and garlic in the same pot.`,
  `Step 3: Put the beef back for ...`,
  `Step 4: Add in the carrots.`,
  `Step 5: Add the cabbage.`,
  ``,
];
const ingredientRatios = [8, 0.5, 1, 1, 1, 0.75];

const ingredientNames = ["beef"];
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
      beef: ingredientsAmount[0],
      onion: ingredientsAmount[1],
      garlic: ingredientsAmount[2],
      carrots: ingredientsAmount[3],
      celery: ingredientsAmount[4],
      cabbage: ingredientsAmount[4],
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
      beef: ingredientsAmount[0],
      onion: ingredientsAmount[1],
      garlic: ingredientsAmount[2],
      carrots: ingredientsAmount[3],
      celery: ingredientsAmount[4],
      cabbage: ingredientsAmount[4],
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
