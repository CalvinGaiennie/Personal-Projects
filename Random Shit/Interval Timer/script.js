const body = document.body;
const button = document.getElementById("button");
const place = document.getElementById("place");

const audioPlayerWork = document.getElementById("audioPlayer");
audioPlayerWork.src = "5a.mp3";
const audioPlayerRest = document.getElementById("audioPlayer2");
audioPlayerRest.src = "1a.mp3";

//
const timer = document.getElementById("timer");

let cumulativeTimeTimer = 0;
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
  let timerTime = totalWorkTime / 1000;
  for (let i = 0; i < totalWorkTime / 1000; i++) {
    console.log("After:", cumulativeTimeTimer, " Set: Timer Time", timerTime);
    setTimeout(
      ((timerTime) => {
        return () => {
          displayTime(timerTime);
        };
      })(timerTime),
      cumulativeTimeTimer * 1000
    );
    cumulativeTimeTimer++;
    timerTime--;
  }

  setTimeout(() => {
    console.log(`Round ${roundIndex + 1}: Work Done`);
    audioPlayerRest.load();
    audioPlayerRest.play();
    document.body.style.backgroundColor = "grey";
    setTimeout(() => {
      console.log(`Round ${roundIndex + 1}: Rest Done`);
      // audioPlayerWork.load();
      // audioPlayerWork.play();
    }, totalRestTime);
  }, totalWorkTime);
}

///////
function displayTime(time) {
  timer.innerHTML = time;
  console.log("time", time);
  console.log("timerinnerHTML", timer.innerHTML);
  // time = time - 1;
  // return time;
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
