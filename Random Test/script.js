"use strict";

const timer = document.getElementById("timer");
let cumulativeWorkTimeTimer = 0;
let cumulativeRestTimeTimer = 0;
function runRound(totalWorkTime, totalRestTime, roundIndex) {
  {
    console.log(`Starting round ${roundIndex + 1}`);
    document.body.style.backgroundColor = "green";
  }
  let workTimerTime = totalWorkTime / 1000;
  let restTimerTime = totalRestTime / 1000;
  for (let i = 0; i < totalWorkTime / 1000; i++) {
    setTimeout(
      ((workTimerTime) => {
        return () => {
          displayTime(workTimerTime);
        };
      })(workTimerTime),
      cumulativeWorkTimeTimer * 1000
    );
    cumulativeWorkTimeTimer++;
    workTimerTime--;
  }
  setTimeout(() => {
    console.log(`Round ${roundIndex + 1}: Work Done`);
    document.body.style.backgroundColor = "grey";
    for (let i = 0; i < totalRestTime / 1000; i++) {
      setTimeout(
        ((restTimerTime) => {
          return () => {
            displayTime(restTimerTime);
          };
        })(restTimerTime),
        cumulativeRestTimeTimer * 1000
      );
      cumulativeRestTimeTimer++;
      restTimerTime--;
    }
    setTimeout(() => {
      console.log(`Round ${roundIndex + 1}: Rest Done`);
    }, totalRestTime);
  }, totalWorkTime);
}

///////
function displayTime(time) {
  timer.innerHTML = time;
  console.log("time", time);
  console.log("timerinnerHTML", timer.innerHTML);
}

button.addEventListener("click", function () {
  const totalWorkTime = 5000;
  const totalRestTime = 5000;
  const roundNum = 3;
  ///
  let cumulativeTime = 0;

  for (let i = 0; i < roundNum; i++) {
    setTimeout(() => {
      runRound(totalWorkTime, totalRestTime, i);
    }, cumulativeTime);
    cumulativeTime += totalWorkTime + totalRestTime;
  }
});
