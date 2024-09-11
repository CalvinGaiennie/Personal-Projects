const shapes = {
  A1: ["F#2", "F#4", "A2", "A5", "B2", "B4", "C#2", "C#4", "E2", "E5"],
  A2: ["A5", "A7", "B4", "B7", "C#4", "C#6", "E5", "E7", "F#4", "F#7"],
  A3: [
    "B7",
    "C#9",
    "E7",
    "F#9",
    "A7",
    "B9",
    "C#6",
    "E9",
    "F#7",
    "A10",
    "B7",
    "C#9",
  ],
  A4: [
    "C#9",
    "E12",
    "F#9",
    "A12",
    "B9",
    "C#11",
    "E9",
    "F#11",
    "A10",
    "B12",
    "C#9",
    "E12",
  ],
  A5: [
    "E12",
    "F#14",
    "A12",
    "B14",
    "C#11",
    "E14",
    "F#11",
    "A14",
    "B12",
    "C#14",
    "E12",
    "F#14",
  ],
};
const exactScaleDisplayButton = document.querySelector("#scale-display-exact");

exactScaleDisplayButton.addEventListener("click", (event) => {
  const scaleShape = document.getElementById("scaleShapeInput");
  const scaleShapeValue = scaleShape.value;
  console.log(scaleShapeValue);
  const shapeString = "A" + scaleShapeValue;
  const shape = shapes[shapeString];
  console.log("shapeString:", shapeString);
  console.log("shape:", shape);

  if (shape) {
    app.displayExactScaleOnFretboard(shape);
  } else {
    console.error(`Shape ${shape} is undefined`);
  }
});
