const ingredients = [
  `{chickenBreast} Large Chick Breast`,
  `{flour} cup of flour`,
  `{eggs} large eggs`,
  "{breadcrumbs} cups of Italian breadcrumbs",
  "{parmesan} cups of grated Parmesan cheese",
  "{garlicPowder} teaspoons of garlic powder",
  "{italianSeasoning} teaspoon of Italian seasoning",
  "{marinaraSauce} cups of marinara sauce",
  "{mozzarella} cups shredded mozzarella cheese.",
];

const steps = [
  `Step 1: Cut the chicken breasts in half lengthwise then pound them to an even thickness (about 1/2 an inch thick) Season both sides with salt and pepper.`,
  `Step 2: Set up three bowls in a row. Bowl: 1 containing the flour. Bowl: 2 containing the eggs (beaten). Bowl: 3 the breadcrumbs, Parmesan, garlic powder, Italian seasoning and, salt and pepper to taste.`,
  `Step 3: Dredge the chicken in the flour, shaking off the excess. Dip it into the beaten eggs, coating both sides. Press the chicken into the breadcrumb mixture making sure its evenly coated.`,
  `Step 4: Heat olive oil in a large skillet over medium heat. Once the oil is hot, add the chicken and cook until golden brown and crispy. Transfer the chicken to a plate.`,
  `Step 5: Preheat the oven to 400℉. Spread a thin layer of marinara sauce in the bottom of a baking dish. Place the chicken on top of the sauce. Spread some more marinara sauce over each chicken piece then pour the mozzarella cheese on top.`,
  `Step 6: Bake the chicken for 15 minutes.`,
  `Step 7: Serve`,
];
const ingredientRatios = [2, 1, 2, 1, 0.5, 1, 1, 1.5, 1.5, 2];

const ingredientNames = [
  "chickenBreast",
  "flour",
  "eggs",
  "breadcrumbs",
  "parmesan",
  "garlicPowder",
  "italianSeasoning",
  "marinaraSauce",
  "mozzarella",
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
      flour: ingredientsAmount[1],
      eggs: ingredientsAmount[2],
      breadcrumbs: ingredientsAmount[3],
      parmesan: ingredientsAmount[4],
      garlicPowder: ingredientsAmount[5],
      italianSeasoning: ingredientsAmount[6],
      marinaraSauce: ingredientsAmount[7],
      mozzarella: ingredientsAmount[8],
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
      flour: ingredientsAmount[1],
      eggs: ingredientsAmount[2],
      breadcrumbs: ingredientsAmount[3],
      parmesan: ingredientsAmount[4],
      garlicPowder: ingredientsAmount[5],
      italianSeasoning: ingredientsAmount[6],
      marinaraSauce: ingredientsAmount[7],
      mozzarella: ingredientsAmount[8],
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
