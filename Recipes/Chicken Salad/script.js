const ingredients = [
  `{chickenBreast} pounds of cooked chicken breast diced.`,
  `{mayonnaise} cups of mayonnaise`,
  `{celery} cups of celery, finely chopped`,
  "{redOnion} cups of red onion, finely chopped",
  "{lemonJuice} tablespoons of lemon juice",
];

const steps = [
  `Step 1: If you're cooking the chicken let it cool before you dice it.`,
  `Step 2: Mix ingredients in a large bowl.`,
  `Step 3: add salt and pepper to taste.`,
  `Step 4: let it chill in the fridge for at least 30 mins.`,
  `Step 5: Serve`,
];
const ingredientRatios = [1, 0.75, 0.375, 0.3755, 1.5];

const ingredientNames = [
  "chickenBreast",
  "mayonnaise",
  "celery",
  "redOnion",
  "lemonJuice",
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
      chickenBreast: ingredientsAmount[0],
      mayonnaise: ingredientsAmount[1],
      celery: ingredientsAmount[2],
      redOnion: ingredientsAmount[3],
      lemonJuice: ingredientsAmount[4],
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
      chickenBreast: ingredientsAmount[0],
      mayonnaise: ingredientsAmount[1],
      celery: ingredientsAmount[2],
      redOnion: ingredientsAmount[3],
      lemonJuice: ingredientsAmount[4],
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
