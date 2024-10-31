"use strict";
//variables
let ingredientMap = {};
let ingredientsAmount = [];
let numOfServings = 1;
//Recipes

const beefNoodlesCopy = {
  name: "Beef Noodle Copy",
  ingredients: [
    `{garlic} garlic cloves, minced`,
    `1 inch piece fresh {ginger}, peeled and finely grated`,
    `{soySauce} cup soy sauce`,
    `{sugar} tablespoons sugar`,
    `{riceVinegar} tablespoons rice vinegar`,
    `{limeJuice} tablespoons freshly squeezed lime juice (about {limes} lime)`,
    `{toastedSesameOil} teaspoons toasted sesame oil`,
    `{fishSauce} teaspoon fish sauce (red boat brand)`,
    `{crushedRedPepperFlakes} teaspoon crushed red pepper flakes`,
    `{beef} pound flap or sirloin steak, thinly sliced against the grain`,
    `{salt} teaspoon kosher salt`,
    `{blackPepper} teaspoon freshly ground black pepper`,
    `{flour} tablespoons flour`,
    `{avocadoOil} tablespoon avocado oil`,
    `{salt} tablespoon of salt`,
    `{noodles} ounces dried lo mein, chow mein, or ramen noodles`,
    `{broccoli} cups of small broccoli florets`,
  ],
  steps: [
    `Step 1: Start a pot of water boiling for the noodles.`,
    `Step 2: Whisk together the ingredients for the sauce.`,
    `Step 3: Cut the beef, season it, then mix the flour and oil with it in a bowl.`,
    `Step 4: When the water is boiling, add ({salt} tablespoon) of salt, and the noodles. Cook until tender, about three minutes. Reserve 1/2 a cup of pasta water, drain the noodles, rince them under cold water, then set them aside.`,
    `Step 5: In a large deep skillet, heat the avacoado oil overmedium-high heat. Add the steak in a single layer and cook until golden brown on all sides and cooked through, 2 to 3 minutes per side. Transfer to a clean plate and set aside.`,
    `Step 6: Make sure the skillet is still well oiled then add in the brocoli and cook it. Toss it until it's slightly tender, 2-3 minutes. Add 1/4 cup of the reserved pasta water and partially steam the brocoli, uncovered until it turns bright green and the liquid has evaporated, about two more minutes.`,
    `Step 7: Add the beef back to the skillet and pour in the sauce and remaining .25 cups of pasta water, and toss constantly until the noodles are coated and the sauce has started to thicken, about 2 more minutes.`,
    `Step 8: Serve.`,
  ],
  ingredientRatios: [
    4, 1, 0.5, 2, 2, 2, 1, 2, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 8, 3,
  ],
  ingredientMap:
    "garlic: ingredientsAmount[0], ginger: ingredientsAmount[1], soySauce: ingredientsAmount[2], sugar: ingredientsAmount[3], riceVinegar: ingredientsAmount[4], limeJuice: ingredientsAmount[5], limes: ingredientsAmount[6], toastedSesameOil: ingredientsAmount[7], fishSauce: ingredientsAmount[8], crushedRedPepperFlakes: ingredientsAmount[9], beef: ingredientsAmount[10], salt: ingredientsAmount[11], blackPepper: ingredientsAmount[12], flour: ingredientsAmount[13], avocadoOil: ingredientsAmount[14], salt: ingredientsAmount[15], noodles: ingredientsAmount[16], broccoli: ingredientsAmount[17]",
};
const chickenParmesean = {
  name: "Chicken Parmesean",
  ingredients: [
    `{chickenBreast} Large Chick Breast`,
    `{flour} cup of flour`,
    `{eggs} large eggs`,
    "{breadcrumbs} cups of Italian breadcrumbs",
    "{parmesan} cups of grated Parmesan cheese",
    "{garlicPowder} teaspoons of garlic powder",
    "{italianSeasoning} teaspoon of Italian seasoning",
    "{marinaraSauce} cups of marinara sauce",
    "{mozzarella} cups shredded mozzarella cheese.",
  ],
  steps: [
    `Step 1: Cut the chicken breasts in half lengthwise then pound them to an even thickness (about 1/2 an inch thick) Season both sides with salt and pepper.`,
    `Step 2: Set up three bowls in a row. Bowl: 1 containing the flour. Bowl: 2 containing the eggs (beaten). Bowl: 3 the breadcrumbs, Parmesan, garlic powder, Italian seasoning and, salt and pepper to taste.`,
    `Step 3: Dredge the chicken in the flour, shaking off the excess. Dip it into the beaten eggs, coating both sides. Press the chicken into the breadcrumb mixture making sure its evenly coated.`,
    `Step 4: Heat olive oil in a large skillet over medium heat. Once the oil is hot, add the chicken and cook until golden brown and crispy. Transfer the chicken to a plate.`,
    `Step 5: Preheat the oven to 400℉. Spread a thin layer of marinara sauce in the bottom of a baking dish. Place the chicken on top of the sauce. Spread some more marinara sauce over each chicken piece then pour the mozzarella cheese on top.`,
    `Step 6: Bake the chicken for 15 minutes.`,
    `Step 7: Serve`,
  ],
  ingredientRatios: [2, 1, 2, 1, 0.5, 1, 1, 1.5, 1.5, 2],
};

const recipes = {
  beefNoodlesCopy: beefNoodlesCopy,
  chickenParmesean: chickenParmesean,
};
const recipeList = document.getElementById("recipe-list");
let selectedRecipe = recipeList.value;
let recipe = recipes[selectedRecipe];

//Functions
function getRecipe() {
  selectedRecipe = recipeList.value;
  recipe = recipes[selectedRecipe];
  return recipe;
}

function createElement(element, content) {
  const el = document.createElement(element);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}

function updateIngredientMap(numOfServings) {
  recipe = getRecipe();
  ingredientsAmount = recipe.ingredientRatios.map(
    (amount) => amount * numOfServings
  );
  ingredientMap = {
    garlic: ingredientsAmount[0],
    ginger: ingredientsAmount[1],
    soySauce: ingredientsAmount[2],
    sugar: ingredientsAmount[3],
    riceVinegar: ingredientsAmount[4],
    limeJuice: ingredientsAmount[5],
    limes: ingredientsAmount[6],
    toastedSesameOil: ingredientsAmount[7],
    fishSauce: ingredientsAmount[8],
    crushedRedPepperFlakes: ingredientsAmount[9],
    beef: ingredientsAmount[10],
    salt: ingredientsAmount[11],
    blackPepper: ingredientsAmount[12],
    flour: ingredientsAmount[13],
    avocadoOil: ingredientsAmount[14],
    salt: ingredientsAmount[15],
    noodles: ingredientsAmount[16],
    broccoli: ingredientsAmount[17],
  };
}

function updateHTML(updatedElements, place) {
  const element = document.querySelector(`${place}`);
  element.innerHTML = " ";

  updatedElements.forEach((step) => {
    const recipeElement = createElement("p", step);
    element.appendChild(recipeElement);
  });
}

function calculateSteps(recipe) {
  recipe = getRecipe();
  numOfServings = parseFloat(document.getElementById("input").value) / 4;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    updateIngredientMap(numOfServings);

    const updatedSteps = recipe.steps.map((step) => {
      let updatedStep = step;
      for (const [key, amount] of Object.entries(ingredientMap)) {
        updatedStep = updatedStep.replace(`{${key}}`, amount);
      }
      return updatedStep;
    });
    updateHTML(updatedSteps, "#steps");
  }
}

function calculateIngredients(recipe) {
  recipe = getRecipe();
  numOfServings = parseFloat(document.getElementById("input").value) / 4;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    updateIngredientMap(numOfServings);

    const updatedIngredients = recipe.ingredients.map((ingredient) => {
      let updatedStep = ingredient;
      for (const [key, amount] of Object.entries(ingredientMap)) {
        updatedStep = updatedStep.replace(`{${key}}`, amount);
      }
      return updatedStep;
    });
    updateHTML(updatedIngredients, "#ingredients");
  }
}

//Event Listeners
document.getElementById("input").addEventListener("change", function () {
  calculateSteps();
  calculateIngredients();
});
document.getElementById("recipe-list").addEventListener("change", function () {
  calculateSteps();
  calculateIngredients();
});

document.addEventListener("DOMContentLoaded", function () {
  calculateSteps();
  calculateIngredients();
});
