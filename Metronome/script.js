"use strict";
const audioPlayer = document.getElementById("audioPlayer");
audioPlayer.src = "other.wav";
const audioPlayer2 = document.getElementById("audioPlayer2");
audioPlayer2.src = "first.wav";
const toggle = document.getElementById("toggle");
const minute = 60000;
let state = "playing";
const stateP = document.getElementById("state");
const BPMEl = document.getElementById("BPM");
let timeoutIds = [];
let totalTime = 0;
const beatNumEl = document.getElementById("note");
for (let i = 30; i <= 200; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  if (i === 60) {
    option.selected = true;
  }
  BPMEl.appendChild(option);
}

const click = function () {
  audioPlayer.load();
  audioPlayer.play();
};

function calculateTimer() {
  const BPM = BPMEl.value;
  let time = minute / BPM;
  return time;
}

function clearAllTimeouts() {
  timeoutIds.forEach((id) => clearTimeout(id));
  totalTime = 0;
  console.log("All timeouts cleared!");
}

function createMeasure(time, beatNum) {
  timeoutIds.push(
    setTimeout(function () {
      audioPlayer2.load();
      audioPlayer2.play();
    }, totalTime)
  );
  let others = beatNum - 1;
  for (let i = 0; i <= others; i++) {
    totalTime = totalTime + time;
    timeoutIds.push(
      setTimeout(function () {
        click();
      }, totalTime)
    );
  }
}

const setMetronome = function () {
  let time = calculateTimer();
  const beatNum = beatNumEl.value;
  for (let i = 0; i < 50; i++) {
    createMeasure(time, beatNum);
  }
};
toggle.addEventListener("click", function () {
  if (state == "playing") {
    state = "paused";
    stateP.innerHTML = state;
    clearAllTimeouts();
  } else {
    state = "playing";
    stateP.innerHTML = state;
    setMetronome();
  }
});
