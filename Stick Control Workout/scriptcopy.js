"use strict";
/////////////////////////////////////////////////
//ELEMENTS
const audioPlayer = document.getElementById("audioPlayer");
audioPlayer.src = "first.mp3";
const audioPlayer2 = document.getElementById("audioPlayer2");
audioPlayer2.src = "other.wav";
const toggle = document.getElementById("toggle");
const imageDiv = document.getElementById("imgDiv");
const measureNumberDiv = document.getElementById("measureNumberDiv");
const BPMEl = document.getElementById("BPM");
const noteTypeEl = document.getElementById("noteType");
let noteType = noteTypeEl.value;
const bannerDiv = document.getElementById("banner-title");

//OTHER variables
const minute = 60000;
let beatCount = 3;
let measureNumber = 1;
let state = "paused";
let imageNumber = 0;
let measureLength;
let rudimentLength;

// INTERVALS
let metronomeInterval;
let measureCounterInterval;
let imgNumInterval;
let displayImageInterval;
/////////////////////////////////////////////////////////////////
// CALLBACK FUNCTIONS
//make the 1 sound
function click() {
  audioPlayer.load();
  audioPlayer.play();
}
//make the other sound
function click2() {
  audioPlayer2.load();
  audioPlayer2.play();
}

//calculates how long a beat is
function calcTime() {
  const BPM = BPMEl.value;
  let time = minute / BPM;
  noteType = noteTypeEl.value;
  if (noteType == 0.125) {
    time = time / 2;
  }
  return time;
}

function displayMeasureNumber() {
  measureNumberDiv.innerHTML = "<h2>Measure Number</h2>";
  const num = document.createElement("p");
  num.innerHTML = measureNumber;
  measureNumberDiv.appendChild(num);
  if (measureNumber == "40") {
    measureNumber = 1;
    incrementImageNumber();
    displayImage();
  }
}

function incrementImageNumber() {
  imageNumber += 1;
}

function incrementMeasureNumber() {
  measureNumber += 1;
}

function resetMeasureNumber() {
  measureNumber = 1;
}

function displayImage() {
  imageDiv.innerHTML = "";
  const img = document.createElement("img");
  img.src = `./images/rudiment${imageNumber}.png`;
  imageDiv.appendChild(img);
}

function playMetronome() {
  beatCount++;
  if (noteType == 0.25) {
    if (beatCount % 4 === 0) {
      // Every fourth beat, play the accent sound
      click();
      displayMeasureNumber();
      incrementMeasureNumber();
    } else {
      // For all other beats, play the normal sound
      click2();
    }
  } else {
    if (beatCount % 8 === 0) {
      // Every eighth beat, play the accent sound
      click();
      displayMeasureNumber();
      incrementMeasureNumber();
    } else {
      // For all other beats, play the normal sound
      click2();
    }
  }
}

function measureCounter() {
  displayMeasureNumber();
  incrementMeasureNumber();
}

function stopWorkout() {
  clearInterval(metronomeInterval);
  clearInterval(measureCounterInterval);
  clearInterval(imgNumInterval);
  clearInterval(displayImageInterval);
}

function startWorkout() {
  //get user selected settings
  let time = calcTime();
  if (noteType == 0.25) {
    measureLength = time * 4;
  } else {
    measureLength = time * 8;
  }
  rudimentLength = measureLength * 40;
  let workout = rudimentLength * 24;

  // start workout
  metronomeInterval = setInterval(playMetronome, time);

  //stop workout
  setTimeout(() => {
    stopWorkout();
  }, workout);
}
////////////////////////////////////////////////////////////////
//EVENT LISTENERS

//sets up sidebar and selector for bpm
document.addEventListener("DOMContentLoaded", function () {
  //setup the bpm select element
  const option = document.createElement("option");
  option.value = 8000;
  option.text = "8000 BPM";
  BPMEl.appendChild(option);
  ////
  for (let i = 30; i <= 200; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = `${i} BPM `;
    if (i === 90) {
      option.selected = true;
    }
    BPMEl.appendChild(option);
  }

  // Populate images in the banner
  for (let i = 1; i <= 25; i++) {
    const img = document.createElement("img");
    img.src = `./images/rudiment${i}.png`;
    img.classList = "bannerImg";
    bannerDiv.appendChild(img);
  }

  //setup thing
  incrementImageNumber();
  displayImage();
});

//starts and stops metronome
toggle.addEventListener("click", function () {
  if (state === "paused") {
    // change state and button image
    state = "playing";
    const img = document.createElement("img");
    img.src = `./pause.png`;
    img.classList = "state";
    toggle.innerHTML = "";
    toggle.appendChild(img);

    //Start Workout
    startWorkout();
  } else {
    // change state and button image
    state = "paused";
    const img = document.createElement("img");
    img.src = `./Play.png`;
    img.classList = "state";
    toggle.innerHTML = "";
    toggle.appendChild(img);

    //Stop workout
    stopWorkout();
  }
});
