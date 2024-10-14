"use strict";
const currentUnitEl = document.getElementById("currentUnit");
const inputAmmountEl = document.getElementById("inputAmmount");
const desiredUnitEl = document.getElementById("desiredUnit");
const convert = document.getElementById("convertButton");
const convertedAmmountP = document.getElementById("convertedAmmount");
let tableSpoonsConversions = {
  teaspoons: 0.33,
  fluidOunces: 2,
  cups: 16,
  pints: 32,
  quarts: 64,
  gallons: 256,
};
convert.addEventListener("click", function () {
  const currentUnit = currentUnitEl.value;
  const inputAmmount = inputAmmountEl.value;
  const desiredUnit = desiredUnitEl.value;
  console.log(
    `Current Unit: ${currentUnit}, Initial Ammount: ${inputAmmount}, Desired Unit: ${desiredUnit}`
  );
  const toTable = tableSpoonsConversions[currentUnit];
  const tableSpoons = toTable * inputAmmount;
  console.log(tableSpoons);
  const toCurrentUnit = tableSpoonsConversions[desiredUnit];
  const convertedAmmount = tableSpoons / toCurrentUnit;
  console.log(convertedAmmount);
  convertedAmmountP.innerHTML = convertedAmmount;
});

/*
there are two ways this could Work I can create an object for every unit with its ratio for every other unit 
or
i could create an object for tableSpoons and their conversion to every other unit convert the ammount to tableSpoons then to the needed unit
*/
