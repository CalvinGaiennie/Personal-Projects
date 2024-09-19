const body = document.body;
const button = document.getElementById("button");
const place = document.getElementById("place");

const audioPlayerWork = document.getElementById("audioPlayer");
audioPlayerWork.src = "5a.mp3";
const audioPlayerRest = document.getElementById("audioPlayer2");
audioPlayerRest.src = "1a.mp3";

//
const timer = document.getElementById("timer");

let cumulativeWorkTimeTimer = 0;
let cumulativeRestTimeTimer = 0;
//
function calcTotalTime(minuteValue, secondValue) {
  const totalTime = minuteValue * 60000 + secondValue * 1000;
  return totalTime;
}

function runRound(totalWorkTime, totalRestTime, roundIndex) {
  // Play audio and set work color
  console.log(`Starting round ${roundIndex + 1}`);
  audioPlayerWork.load();
  audioPlayerWork.play();
  document.body.style.backgroundColor = "green";
  //
  let workTimerTime = totalWorkTime / 1000;
  let restTimerTime = totalRestTime / 1000;
  //Set work Timer
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

  //when work time is over show play rest sound and color set rest done announcement timer and set rest timer
  setTimeout(() => {
    console.log(`Round ${roundIndex + 1}: Work Done`);
    audioPlayerRest.load();
    audioPlayerRest.play();
    document.body.style.backgroundColor = "grey";

    //set rest timer
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
    //set rest done announcement timer
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
  const roundNumInput = document.getElementById("roundSelector");
  const minutesWorkInput = document.getElementById("minutesWork");
  const secondsWorkInput = document.getElementById("secondsWork");
  const minutesRestInput = document.getElementById("minutesRest");
  const secondsRestInput = document.getElementById("secondsRest");
  ///
  const roundNum = roundNumInput.value;
  const minutesWork = minutesWorkInput.value;
  const secondsWork = secondsWorkInput.value;
  const minutesRest = minutesRestInput.value;
  const secondsRest = secondsRestInput.value;
  ///
  const totalWorkTime = calcTotalTime(minutesWork, secondsWork);
  const totalRestTime = calcTotalTime(minutesRest, secondsRest);
  ////
  // Get the audio player element
  // Set the source of the video player
  ///
  let cumulativeTime = 0;

  for (let i = 0; i < roundNum; i++) {
    setTimeout(() => {
      runRound(totalWorkTime, totalRestTime, i);
    }, cumulativeTime);
    cumulativeTime += totalWorkTime + totalRestTime;
  }
  setTimeout(() => {
    console.log("All Work Done");
    document.body.style.backgroundColor = "purple";
  }, cumulativeTime);
});
