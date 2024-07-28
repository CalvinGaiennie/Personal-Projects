'use strict';
function calculate() {
  const initI = parseFloat(document.getElementById('initialInvestment').value);
  const time = parseFloat(document.getElementById('yearsOfGrowth').value);
  const rP =
    parseFloat(document.getElementById('returnPercentage').value) / 100;
  const A = initI * Math.pow(1 + rP / 1, 1 * time);
  console.log(initI, time, rP);
  document.getElementById('solutionText').textContent = `$${A.toFixed(2)}`;
}
