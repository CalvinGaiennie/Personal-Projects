const ingredients = [
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
];

const steps = [
  `Step 1: Start a pot of water boiling for the noodles.`,
  `Step 2: Whisk together the ingredients for the sauce.`,
  `Step 3: Cut the beef, season it, then mix the flour and oil with it in a bowl.`,
  `Step 4: When the water is boiling, add ({salt} tablespoon) of salt, and the noodles. Cook until tender, about three minutes. Reserve 1/2 a cup of pasta water, drain the noodles, rince them under cold water, then set them aside.`,
  `Step 5: In a large deep skillet, heat the avacoado oil overmedium-high heat. Add the steak in a single layer and cook until golden brown on all sides and cooked through, 2 to 3 minutes per side. Transfer to a clean plate and set aside.`,
  `Step 6: Make sure the skillet is still well oiled then add in the brocoli and cook it. Toss it until it's slightly tender, 2-3 minutes. Add 1/4 cup of the reserved pasta water and partially steam the brocoli, uncovered until it turns bright green and the liquid has evaporated, about two more minutes.`,
  `Step 7: Add the beef back to the skillet and pour in the sauce and remaining .25 cups of pasta water, and toss constantly until the noodles are coated and the sauce has started to thicken, about 2 more minutes.`,
  `Step 8: Serve.`,
];
const ingredientRatios = [
  4, 1, 0.5, 2, 2, 2, 1, 2, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 8, 3,
];

const ingredientNames = [
  "garlic",
  "ginger",
  "soy sauce",
  "sugar",
  "rice vinegar",
  "lime juice",
  "toasted sesame oil",
  "fish sauce",
  "crushed red pepper flakes",
  "beef",
  "salt",
  "black pepper",
  "flour",
  "avacado oil",
  "salt",
  "noodles",
  "broccoli",
];
function createElement(element, content) {
  const el = document.createElement(element);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}

function calculateSteps() {
  const numOfServings = parseFloat(document.getElementById("input").value) / 4;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    const ingredientMap = {
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
  const numOfServings = parseFloat(document.getElementById("input").value) / 4;
  if (isNaN(numOfServings) || numOfServings <= 0) {
    console.log("fuck");
    return;
  } else {
    const ingredientsAmount = ingredientRatios.map(
      (amount) => amount * numOfServings
    );
    console.log(ingredientsAmount);
    const ingredientMap = {
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
