const button = document.getElementById("button");
const place = document.getElementById("place");

function calcTotalTime(minuteValue, secondValue) {
  const totalTime = minuteValue * 60000 + secondValue * 1000;
  return totalTime;
}

function runRound(totalWorkTime, totalRestTime) {
  setTimeout(() => {
    console.log("Work Done");
    setTimeout(() => {
      console.log("Rest Done");
    }, totalRestTime);
  }, totalWorkTime);
}

button.addEventListener("click", function () {
  const roundNumInput = document.getElementById("roundSelector");
  const minutesWorkInput = document.getElementById("minutesWork");
  const secondsWorkInput = document.getElementById("secondsWork");
  const minutesRestInput = document.getElementById("minutesRest");
  const secondsRestInput = document.getElementById("secondsRest");
  const roundNumInputValue = roundNumInput.value;
  console.log(roundNumInputValue);
  const minutesWorkValue = minutesWorkInput.value;
  const secondsWorkValue = secondsWorkInput.value;
  const minutesRestValue = minutesRestInput.value;
  const secondsRestValue = secondsRestInput.value;
  const totalWorkTime = calcTotalTime(minutesWorkValue, secondsWorkValue);
  const totalRestTime = calcTotalTime(minutesRestValue, secondsRestValue);

  for (let i = 0; i <= roundNumInputValue; i++) {
    runRound(totalWorkTime, totalRestTime);
    setTimeout(() => {
      1 + 1;
    }, totalWorkTime * totalRestTime * 1000);
  }
});
