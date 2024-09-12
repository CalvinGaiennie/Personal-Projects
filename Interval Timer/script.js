const button = document.getElementById("button");
const place = document.getElementById("place");

function calcTotalTime(minuteValue, secondValue) {
  const totalTime = minuteValue * 60000 + secondValue * 1000;
  return totalTime;
}

function runRound(totalWorkTime, totalRestTime, roundIndex) {
  console.log(`Starting round ${roundIndex + 1}`);

  setTimeout(() => {
    console.log(`Round ${roundIndex + 1}: Work Done`);
    audioPlayer.play();

    setTimeout(() => {
      console.log(`Round ${roundIndex + 1}: Rest Done`);
      audioPlayer.play();
    }, totalRestTime);
  }, totalWorkTime);
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
  const audioPlayer = document.getElementById("audioPlayer");

  // Set the source of the video player
  audioPlayer.src = "songs/" + randomAudio;

  // Load and play the video
  audioPlayer.load();
  // audioPlayer.play();
  ////
  let cumulativeTime = 0;
  for (let i = 0; i < roundNum; i++) {
    setTimeout(() => {
      runRound(totalWorkTime, totalRestTime, i);
    }, cumulativeTime);
    cumulativeTime += totalWorkTime + totalRestTime;
  }
});
