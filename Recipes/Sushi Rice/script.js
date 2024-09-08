const ingredients = [
  `{rice} sushi rice (short or medium grain rice.)`,
  `{water} cups of water`,
  `{vinegar} cups of rice vinegar`,
  "{sugar} cups of sugar",
  "{salt} teaspoons of salt",
];

const steps = [
  `Step 1: Put the rice in a large bowl and rince it four times.`,
  `Step 2: Cook the rice how your would normally cook rice. When it is finished cover it and let it cool for 10 mins.`,
  `Step 3: In a small saucepan, combine the rice vinegar, sugar, and salt. keep it on low heat and stir slowly until the salt and sugar disolve into the vinegar.`,
  `Step 4: Put the rice in a large bown or a baking sheet, pour the vinegar on it and slowly fold the vinegar mixture into the rice being carful to not mash the rice.`,
  `Step 5: Let the rice cool to room temperature. It can be slightly warm, but not hot.`,
];

const ingredientRatios = [2, 2, 0.5, 0.25, 1];

const ingredientNames = ["rice", "water", "vinegar", "sugar", "salt"];


//////////////////////////////////////////////////////////////
function createElement(element, content) {
  const el = document.createElement(element);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}
function calculateSteps() {
  const numOfServings = parseFloat(document.getElementById("input").value) / 2;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    const ingredientMap = {
      rice: ingredientsAmount[0],
      water: ingredientsAmount[1],
      vinegar: ingredientsAmount[2],
      sugar: ingredientsAmount[3],
      salt: ingredientsAmount[4],
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
  const numOfServings = parseFloat(document.getElementById("input").value) / 2;
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
      water: ingredientsAmount[1],
      vinegar: ingredientsAmount[2],
      sugar: ingredientsAmount[3],
      salt: ingredientsAmount[4],
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

//////////////////////////////////////////////////////

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
