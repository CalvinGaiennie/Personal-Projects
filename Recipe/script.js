let water = `1`;
let yeast = `2`;
let sugar = `.5`;
let flour = `2.5`;
let salt = `2`;
let oliveOil = `1`;
let flour2 = `.5`;
const steps = [
  `Step 1: Mix ${water} cup of warm water ${yeast} teaspoons of yeast and ${sugar} teaspoons of sugar in a bowl then let it sit for 5 minutes.,`,
  "Step 2: Add 2.5 cups of flour. 2 teaspoons of salt and 1 tablespoon of olive oil.",
  "Step 3: Sprinkle flour on a clean work surface then knead the dough for 5-7 minutes slowly adding about .5 cups of flour until the dough is smooth and elastic.",
  " Step 4: Coat a bowl in olive oil then put the dough in and let it rise until it doubles in size. About an hour.",
  "Step 5: Cut the dough into small peices roll it flat and cook it for 2 mins each side in the oven or on the stove.",
];

function writeStep() {}
  
function calculate() {
  const numOfBread = parseFloat(document.getElementById("input").value);
  if (isNaN(numOfBread) || numOfBread <= 0) {
    console.log("fuck");
  } else {
    const ingredients = [1, 2, 0.5, 2.5, 2, 1, 0.5];
    const ingredientsAmmount = [];

    function calculateIngredientsAmmount() {
      ingredientsAmmount.length = 0;
      for (i = 0; i < ingredients.length; i++) {
        const ammount = ingredients[i] * numOfBread;
        ingredientsAmmount.push(ammount);
      }
    }
    calculateIngredientsAmmount();
    console.log(ingredientsAmmount);
  }
  writeRecipe();
}
function writeRecipe() {
  console.log(water);
  const recipe = document.querySelector("#recipe");
  recipe.innerHTML = "";

  function createElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  }

  function displayRecipe(steps) {
    const recipe = document.querySelector("#recipe");
    recipe.innerHTML = "";
    steps.forEach((step) => {
      const recipeElement = createElement("p", `${step},`);
      recipe.appendChild(recipeElement);
    });
  }
  displayRecipe(steps);
}
