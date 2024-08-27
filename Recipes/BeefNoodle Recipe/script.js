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

const ingredientRatios = [
  4, 1, 0.5, 2, 2, 2, 1, 2, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 8, 3,
];

function calculate() {
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

    const updatedIngredients = ingredients.map((ing) => {
      let updatedIngredient = ing;
      for (const [key, amount] of Object.entries(ingredientMap)) {
        updatedIngredient = updatedIngredient.replace(`{${key}}`, amount);
      }
      return updatedIngredient;
    });
    console.log(updatedIngredients);
    writeRecipe(updatedIngredients);
  }
}

function writeRecipe(updatedIngredients) {
  const recipe = document.querySelector("#recipe");
  recipe.innerHTML = " ";

  updatedIngredients.forEach((step) => {
    const recipeElement = createElement("p", step);
    recipe.appendChild(recipeElement);
  });
}

function createElement(element, content) {
  const el = document.createElement(element);
  if (content) {
    el.innerHTML = content;
  }
  return el;
}
document.getElementById("input").addEventListener("change", calculate);
calculate();
