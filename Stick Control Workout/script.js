"use strict";
const audioPlayer = document.getElementById("audioPlayer");
audioPlayer.src = "first.mp3";
const audioPlayer2 = document.getElementById("audioPlayer2");
audioPlayer2.src = "other.wav";
const toggle = document.getElementById("toggle");
const minute = 60000;
let state = "paused";
const BPMEl = document.getElementById("BPM");
const noteTypeEl = document.getElementById("noteType");
const bannerDiv = document.getElementById("banner-title");
let timeoutIds = [];
let totalTime = 0;
const imageDiv = document.getElementById("imgDiv");
const measureNumberDiv = document.getElementById("measureNumberDiv");
for (let i = 30; i <= 200; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = `${i} BPM `;
  if (i === 90) {
    option.selected = true;
  }
  BPMEl.appendChild(option);
}
const option = document.createElement("option");
option.value = 500;
option.text = "500 BPM";
BPMEl.appendChild(option);

function click() {
  audioPlayer.load();
  audioPlayer.play();
}
function click2() {
  audioPlayer2.load();
  audioPlayer2.play();
}

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

function createMeasure(time) {
  let noteType = noteTypeEl.value;
  let beatNum;
  if (noteType == 0.25) {
    beatNum = 4;
  } else {
    time = time / 2;
    beatNum = 8;
  }
  for (let i = 1; i <= beatNum; i++) {
    totalTime = totalTime + time;
    ////
    if (i == 1) {
      timeoutIds.push(
        setTimeout(function () {
          click();
        }, totalTime)
      );
    } else {
      timeoutIds.push(
        setTimeout(function () {
          click2();
        }, totalTime)
      );
    }
  }
}

function setMetronome(roundNum, imageNumber) {
  let time = calculateTimer();
  //set a timer that will change the image when it needs to
  timeoutIds.push(
    setTimeout(function () {
      createImage(imageNumber);
    }, totalTime)
  );
  //create the number of measures reuested
  for (let i = 0; i < roundNum; i++) {
    let displayTime = totalTime + time;
    let measureNumber = i + 1;
    timeoutIds.push(
      setTimeout(function () {
        displayMeasureNumber(measureNumber);
      }, displayTime)
    );
    createMeasure(time);
  }
}

function createImage(imageNumber) {
  imageDiv.innerHTML = "";
  const img = document.createElement("img");
  img.src = `./images/rudiment${imageNumber}.png`;
  imageDiv.appendChild(img);
}

function displayMeasureNumber(measureNumber) {
  measureNumberDiv.innerHTML = "<h2>Measure Number</h2>";
  const num = document.createElement("p");
  num.innerHTML = measureNumber;
  measureNumberDiv.appendChild(num);
}

function workoutOne() {
  let imageNumber;
  for (let i = 0; i <= 23; i++) {
    imageNumber = i + 1;
    setMetronome(20, imageNumber);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // i need to update these locations
  for (let i = 1; i <= 23; i++) {
    const img = document.createElement("img");
    img.src = `./images/rudiment${i}.png`;
    img.classList = "bannerImg";
    bannerDiv.appendChild(img);
  }
});

toggle.addEventListener("click", function () {
  //starts and stops the workout
  if (state == "playing") {
    state = "paused";
    const img = document.createElement("img");
    img.src = `./Play.png`;
    img.classList = "state";
    toggle.innerHTML = "";
    toggle.appendChild(img);
    clearAllTimeouts();
  } else {
    state = "playing";
    //
    const img = document.createElement("img");
    img.src = `./pause.png`;
    img.classList = "state";
    toggle.innerHTML = "";
    toggle.appendChild(img);
    //
    workoutOne();
  }
});
