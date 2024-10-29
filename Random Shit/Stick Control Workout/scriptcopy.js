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
const rudimentTextEl = document.getElementById("rudimentText");

//OTHER variables
const minute = 60000;
let beatCount = 3;
let measureNumber = 1;
let state = "paused";
let imageNumber = 0;
let rudimentNumber = -1;
let measureLength;
let rudimentLength;

// INTERVALS
let metronomeInterval;
let measureCounterInterval;
let imgNumInterval;

const rudiments = [
  {
    RudimentNumber: "One",
    Rudiment: " 1: R L R L    R L R L      R L R L    R L R L",
  },
  {
    RudimentNumber: "Two",
    Rudiment: " 2: L R L R    L R L R      L R L R    L R L R",
  },
  {
    RudimentNumber: "Three",
    Rudiment: " 3: R R L L    R R L L      R R L L    R R L L",
  },
  {
    RudimentNumber: "Four",
    Rudiment: " 4: L L R R    L L R R      L L R R    L L R R",
  },
  {
    RudimentNumber: "Five",
    Rudiment: " 5: R L R R    L R L L      R L R R    L R L L",
  },
  {
    RudimentNumber: "Six",
    Rudiment: " 6: R L L R    L R R L      R L L R    L R R L",
  },
  {
    RudimentNumber: "Seven",
    Rudiment: " 7: R R L R    L L R L      R R L R    L L R L",
  },
  {
    RudimentNumber: "Eight",
    Rudiment: " 8: R L R L    L R L R      R L R L    L R L R",
  },
  {
    RudimentNumber: "Nine",
    Rudiment: " 9: R R R L    R R R L      R R R L    R R R L",
  },
  {
    RudimentNumber: "Ten",
    Rudiment: "10: L L L R    L L L R      L L L R    L L L R",
  },
  {
    RudimentNumber: "Eleven",
    Rudiment: "11: R L L L    R L L L      R L L L    R L L L",
  },
  {
    RudimentNumber: "Twelve",
    Rudiment: "12: L R R R    L R R R      L R R R    L R R R",
  },
  {
    RudimentNumber: "Thirteen",
    Rudiment: "13: R R R R    L L L L      R R R R    L L L L",
  },
  {
    RudimentNumber: "Fourteen",
    Rudiment: "14: R L R L    R R L L      R L R L    R R L L",
  },
  {
    RudimentNumber: "Fifteen",
    Rudiment: "15: L R L R    L L R R      L R L R    L L R R",
  },
  {
    RudimentNumber: "Sixteen",
    Rudiment: "16: R L R L    R L R R      L R L R    L R L L",
  },
  {
    RudimentNumber: "Seventeen",
    Rudiment: "17: R L R L    R L L R      L R L R    L R R L",
  },
  {
    RudimentNumber: "Eighteen",
    Rudiment: "18: R L R L    R R L R      L R L R    L L R L",
  },
  {
    RudimentNumber: "Nineteen",
    Rudiment: "19: R L R L    R R R L      R L R L    R R R L",
  },
  {
    RudimentNumber: "Twenty",
    Rudiment: "20: L R L R    L L L R      L R L R    L L L R",
  },
  {
    RudimentNumber: "TwentyOne",
    Rudiment: "21: R L R L    R L L L      R L R L    R L L L",
  },
  {
    RudimentNumber: "TwentyTwo",
    Rudiment: "22: L R L R    L R R R      L R L R    L R R R",
  },
  {
    RudimentNumber: "TwentyThree",
    Rudiment: "23: R L R L    R R R R      L R L R    L L L L",
  },
  {
    RudimentNumber: "TwentyFour",
    Rudiment: "24: R R L L    R L R R      L L R R    L R L L",
  },
];
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
    incrementRudimentNumber();
    displayRudimentText();
  }
}

function incrementRudimentNumber() {
  rudimentNumber += 1;
  console.log(rudimentNumber);
  if (rudimentNumber == 25) {
    stopWorkout();
  }
}

function incrementMeasureNumber() {
  measureNumber += 1;
}

function resetMeasureNumber() {
  measureNumber = 1;
}

function displayRudimentText() {
  let currentRudimentObject = rudiments[rudimentNumber];
  let currentRudiment = currentRudimentObject.Rudiment;
  rudimentTextEl.innerHTML = `<pre>${currentRudiment}</pre>`;
}

function playMetronome() {
  beatCount++;
  if (noteType == 0.25) {
    if (beatCount % 4 === 0) {
      // Every fourth beat, play the accent sound
      displayMeasureNumber();
      incrementMeasureNumber();
      click();
    } else {
      // For all other beats, play the normal sound
      click2();
    }
  } else {
    if (beatCount % 8 === 0) {
      // Every eighth beat, play the accent sound
      displayMeasureNumber();
      incrementMeasureNumber();
      click();
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
}

function handleImageClick(i) {
  rudimentNumber = i;
  measureNumber = 0;
}
////////////////////////////////////////////////////////////////
//EVENT LISTENERS

//sets up sidebar and selector for bpm
document.addEventListener("DOMContentLoaded", function () {
  //setup the bpm select element
  const option = document.createElement("option");
  option.value = 400;
  option.text = "400 BPM";
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

    img.setAttribute(
      "onclick",
      `handleImageClick(${i - 1}); displayRudimentText();`
    );

    bannerDiv.appendChild(img);
  }

  //setup thing
  incrementRudimentNumber();
  displayRudimentText();
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
