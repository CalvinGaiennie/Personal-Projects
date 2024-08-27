document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("input");
  const button = document.getElementById("getValueButton");
  const output = document.getElementById("output");

  let strings = [];

  button.addEventListener("click", (event) => {
    event.preventDefault();
    let inputValue = inputElement.value;
    const bars = inputValue.split(" ");
    console.log(bars);
    strings = [];

    function makeChart() {
      for (i = 0; i < bars.length; i++) {
        if (bars[i].startsWith("#")) {
          let newString = `${bars[i]}`;
          let comment = newString.slice(1);
          strings.push(comment);
        } else if (bars[i].contains("newline")) {
          bars[i] = bars.splice(i, 1, "<br>");
        } else {
          a = bars[i].replace(/\./g, "/");
          let newString = `|${a}|`;
          strings.push(newString);
          console.log(strings);
        }
      }
    }
    makeChart();
    console.log(strings);
    stringOutput = strings.join(" ");
    console.log(stringOutput);
    output.textContent = stringOutput;
  });
});
