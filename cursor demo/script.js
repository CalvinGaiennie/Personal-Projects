"use strict";
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("result");

function calculateBMI() {
  const weightValue = weight.value;
  const heightValue = height.value;
  const bmi = weightValue / (heightValue / 100) ** 2;
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}

bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateBMI();
});
