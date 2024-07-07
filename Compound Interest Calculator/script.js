'use strict';

function calculate() {
  const iterationsPerYear = 1;

  const origionalInvestment = parseFloat(
    document.getElementById('initialInvestment').value
  );

  const numOfYears = parseFloat(document.getElementById('yearsOfGrowth').value);

  const interestPerUnitOfTime =
    parseFloat(document.getElementById('returnPercentage').value) / 100;

  const A =
    origionalInvestment *
    (1 + interestPerUnitOfTime / iterationsPerYear) **
      (numOfYears * iterationsPerYear);
  console.log(A);

  document.getElementById('solutionText').textContent = `${A}`;
}
