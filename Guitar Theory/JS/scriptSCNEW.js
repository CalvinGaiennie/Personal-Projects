"use strict";
/////////////////////////////////////////////////

//Variables
//// Audio Elements
const audioPlayer = document.getElementById("audioPlayer");
audioPlayer.src = "../assets/Stick Control Sounds/first.mp3";
const audioPlayer2 = document.getElementById("audioPlayer2");
audioPlayer2.src = "../assets/Stick Control Sounds/other.wav";

////Workout Elements
const stickControlToggleEl = document.getElementById("toggle");
const stickControlImageDivEl = document.getElementById("imgDiv");
const stickControlMeasureNumberDivEl =
  document.getElementById("measureNumberDiv");
const stickControlBPMEl = document.getElementById("BPM");
const stickControlNoteTypeEl = document.getElementById("noteType");
const stickControlBannerDivEl = document.getElementById("banner-title");
const stickControlRudimentTextEl = document.getElementById("rudimentText");
const stickControlMeasuresPerRudimentEl = document.getElementById(
  "measures-per-rudiment"
);
////Metronome Elements
const metronomeBPMEl = document.getElementById("metronomeBPM");
const metronomeToggleEl = document.getElementById("toggleMetronome");
const metronomeNoteTypeEl = document.getElementById("metronome-note-type");

//// Workout Initial Setup
let stickControlNoteType = stickControlNoteTypeEl.value;
let stickControlBPM = stickControlBPMEl.value;
let stickControlMeasuresPerRudiment = stickControlMeasuresPerRudimentEl.value;
//// Metronome Initial Setup
let metronomeNoteType = metronomeNoteTypeEl.value;
let metronomeBPM = metronomeBPMEl.value;

////Other Variables
const minute = 60000;
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

////////////////////
//Shared Functions
function calcTime(BPM, noteType) {
  let time = minute / BPM;
  if (noteType == 0.125) {
    time = time / 2;
  }
  return time;
}

////accent sound
function click() {
  audioPlayer.load();
  audioPlayer.play();
}
////standard sound
function click2() {
  audioPlayer2.load();
  audioPlayer2.play();
}

function populateSelect(place, textStr, low, high, selected) {
  for (let i = low; i <= high; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = `${i} ${textStr}`;
    if (i === selected) {
      option.selected = true;
    }
    place.appendChild(option);
  }
}

let beat = 0;
function playMeasure() {
  // I need to push arguments into this function
  const time = calcTime();
  for (let i = 0; i < 8; i++) {
    if (beat == 0) {
      click();
    } else if (beat > 8) {
      click2();
    } else if (beat == 8) {
      click2();
    }
  }
}
//Workout Functions

//Metronome Functions

////////////////////
//Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  //populate workout BPM
  populateSelect(stickControlBPMEl, "BPM", 30, 200, 90);

  //populate metronome BPM
  populateSelect(metronomeBPMEl, "BPM", 30, 200, 90);

  //populate metronome BPM
  populateSelect(stickControlMeasuresPerRudimentEl, "", 10, 50, 40);

  //populate the banner
  for (let i = 1; i <= 24; i++) {
    const img = document.createElement("img");
    img.src = `../assets/rudimentimages/rudiment${i}.png`;
    img.classList = "bannerImg";

    img.setAttribute(
      "onclick",
      `handleImageClick(${i - 1}); displayRudimentText();`
    );

    stickControlBannerDivEl.appendChild(img);
  }
  playMeasure();
});

//pause/play button clicked
document.addEventListener("", function () {});

//Metronome start/stop clicked
document.addEventListener("", function () {});

/////////////////////
//setup page

////populate selects
// create a function to play 1 measure of metronome while toggle == playing
//for the workout have it play while toggle == playing and rudiment number < 26
