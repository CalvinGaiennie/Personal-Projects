const fretConst = 17.817;
const scaleLengthInput = document.getElementById("scaleLength");
const numberOfFretsInput = document.getElementById("numberOfFrets");
const fretWidths = [];
const lengthFromNut = [];
const calculate = document.getElementById("calculate");

function calcFretWidth() {
  const scaleLength = scaleLengthInput.value;
  const numberOfFrets = numberOfFretsInput.value;
  let remainingScaleLength = scaleLength;
  for (let i = 0; i <= numberOfFrets; i++) {
    let fretWidth = Number((remainingScaleLength / fretConst).toFixed(4));
    console.log(fretWidth);
    let curLength = fretWidths.reduce((acc, curr) => acc + curr, 0);
    console.log(curLength);
    let length = (fretWidth + curLength).toFixed(4);
    console.log(length);
    lengthFromNut.push(Number(length));
    fretWidths.push(fretWidth);
    remainingScaleLength = remainingScaleLength - fretWidth;
  }
  console.log(fretWidths);
  console.log(lengthFromNut);
}
calculate.addEventListener("click", function () {
  calcFretWidth();
});
