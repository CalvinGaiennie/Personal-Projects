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
const bannerDiv = document.getElementById("banner-title");

//OTHER variables
const minute = 60000;
let beatCount = 3;
let measureNumber = 1;
let state = "paused";
let imageNumber = 1;
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
  let noteType = noteTypeEl.value;
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
}

function incrementImageNumber() {
  imageNumber = imageNumber + 1;
}

function incrementMeasureNumber() {
  measureNumber = measureNumber + 1;
}

function resetMeasureNumber() {
  measureNumber = 1;
}

function displayImage() {
  console.log("display image called");
  imageDiv.innerHTML = "";
  const img = document.createElement("img");
  img.src = `./images/rudiment${imageNumber}.png`;
  console.log("Image Number", imageNumber);
  imageDiv.appendChild(img);
}

function playMetronome() {
  beatCount++;
  if (beatCount % 4 === 0) {
    // Every fourth beat, play the accent sound
    click();
  } else {
    // For all other beats, play the normal sound
    click2();
  }
}

function measureCounter() {
  //start displaying number
  let displayNum = setInterval(displayMeasureNumber, measureLength);

  // start iterating measure number
  setInterval(incrementMeasureNumber, measureLength);

  // stop displaying number
  setTimeout(() => {
    clearInterval(displayNum);
  }, rudimentLength);

  // stop iterating measure number
  setTimeout(() => {
    clearInterval(metronomeInterval);
  }, rudimentLength);

  // reset MeasureNumber to 1
  setTimeout(() => {
    resetMeasureNumber;
  }, rudimentLength);

  //   setTimeout(() => {
  //     clearInterval(metronomeInterval);
  //   }, rudimentLength);
}

////////////////////////////////////////////////////////////////
//EVENT LISTENERS
//sets up sidebar and selector for bpm
document.addEventListener("DOMContentLoaded", function () {
  //setup the bpm select element
  const option = document.createElement("option");
  option.value = 500;
  option.text = "500 BPM";
  BPMEl.appendChild(option);
  ////
  for (let i = 30; i <= 200; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = `${i} BPM `;
    if (i === 500) {
      option.selected = true;
    }
    BPMEl.appendChild(option);
  }
  // i need to update these locations
  for (let i = 1; i <= 23; i++) {
    const img = document.createElement("img");
    img.src = `./images/rudiment${i}.png`;
    img.classList = "bannerImg";
    bannerDiv.appendChild(img);
  }
});

//starts and stops metronome
toggle.addEventListener("click", function () {
  if (state == "paused") {
    // change state and button image
    state = "playing";
    const img = document.createElement("img");
    img.src = `./pause.png`;
    img.classList = "state";
    toggle.innerHTML = "";
    toggle.appendChild(img);
    //check settings
    let time = calcTime();
    measureLength = time * 4;
    rudimentLength = measureLength * 40;
    let workout = rudimentLength * 24;

    // start workout
    metronomeInterval = setInterval(playMetronome, time);
    setTimeout(() => {
      clearInterval(metronomeInterval);
    }, workout);

    // start measure counter
    measureCounterInterval = setInterval(measureCounter, measureLength);
    setTimeout(() => {
      clearInterval(measureCounterInterval);
    }, workout);

    // start image num changer
    imgNumInterval = setInterval(incrementImageNumber, rudimentLength);

    displayImageInterval = setInterval(displayImage, rudimentLength);

    setTimeout(() => {
      clearInterval(imgNumInterval);
    }, workout);

    setTimeout(() => {
      clearInterval(displayImageInterval);
    }, workout);
  } else {
    // change state and button image
    state = "paused";
    const img = document.createElement("img");
    img.src = `./Play.png`;
    img.classList = "state";
    toggle.innerHTML = "";
    toggle.appendChild(img);
    //interupt workout
    clearInterval(metronomeInterval);
    clearInterval(measureCounterInterval);
    clearInterval(imgNumInterval);
    clearInterval(displayImageInterval);
  }
});

/*
figure out the length of 
a beat
a rudiment
the workout

start a metronome 

start measure counter 

change the photo and reset measure counter every time a rudiment is done


stop the metronome and measure counter when the workout is done
*/
