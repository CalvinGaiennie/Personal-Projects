"use strict";
// https://lprgc.org/wp-content/uploads/2011/12/Sight-Adjustments-using-Minutes-Of-Angle.pdf

function calculate() {
  // Get input values

  const shooterDistance = parseFloat(
    document.getElementById("shooterDistance").value
  );

  const MOAFactor = parseFloat(document.getElementById("MOAFactor").value);

  const windage = parseFloat(document.getElementById("Windage").value);

  const elevation = parseFloat(document.getElementById("Elevation").value);

  // Check for valid inputs
  if (
    isNaN(shooterDistance) ||
    isNaN(MOAFactor) ||
    isNaN(windage) ||
    isNaN(windage)
  ) {
    alert("Please enter valid numbers for all inputs.");
    return;
  }

  // Perform the calculation using the given formula
  const w = Math.round(windage / (shooterDistance * (1.047 / 100)) / MOAFactor);

  const e = Math.round(
    elevation / (shooterDistance * (1.047 / 100)) / MOAFactor
  );

  //display the result
  document.getElementById(
    "solutionText"
  ).textContent = `Move right ${w} clicks and up ${e} clicks.`;
}
