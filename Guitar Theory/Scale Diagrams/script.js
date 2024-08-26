root = document.documentElement;
const fretboard = document.querySelector(".fretboard");
const noteNameSection = document.querySelector(".note-name-section");
const selectedInstrumentSelector = document.querySelector(
  "#instrument-selector"
);
const accidentalSelector = document.querySelector(".accidental-selector");

const numberOfFretsSelector = document.querySelector("#number-of-frets");

const showAllNotesSelector = document.querySelector("#show-all-notes");
const showMultipleNotesSelector = document.querySelector(
  "#show-multiple-notes"
);
const scaleStartInput = document.querySelector("#scaleStartInput");

const scaleTypeInput = document.querySelector("#scaleTypeInput");
const scaleInput = document.getElementById("scaleInput");
const scaleDisplayButton = document.querySelector("#scale-display");
const scaleDisplayField = document.querySelector("#scale-display2");
let allNotes;
let showMultipleNotes = false;

let numberOfFrets = 20;

const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleFretMarkPositions = [12, 24];

const notesFlat = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const notesSharp = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const notesIntervals = [
  "1",
  "b2",
  "2",
  "b3",
  "3",
  "4",
  "#4/b5",
  "5",
  "b6",
  "6",
  "7b",
  "7",
];

let accidentals = "flats";

const instrumentTuningPresets = {
  "Guitar (6 Strings)": [4, 11, 7, 2, 9, 4],
  "Bass (4 String)": [7, 2, 9, 4],
  "Bass (5 Strings": [7, 2, 9, 4, 11],
  "Ukelele (standard)": [9, 4, 0, 7],
};

let selectedInstrument = "Guitar (6 Strings)";
let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;

const app = {
  init() {
    this.setupFretboard();
    this.setupSelectedInstrumentSelector();
    this.setupNoteNameSection();
    this.setupEventListeners();
  },
  setupFretboard() {
    fretboard.innerHTML = "";
    root.style.setProperty("--number-of-strings", numberOfStrings);
    // Add strings to fretboard
    for (let i = 0; i < numberOfStrings; i++) {
      let string = tools.createElement("div");
      string.classList.add("string");
      string.classList.add(`string${i + 1}`);
      fretboard.appendChild(string);
      // Create frets
      for (let fret = 0; fret <= numberOfFrets; fret++) {
        let noteFret = tools.createElement("div");
        noteFret.classList.add("note-fret");
        string.appendChild(noteFret);

        let noteName = this.generateNoteNames(
          fret + instrumentTuningPresets[selectedInstrument][i],
          accidentals
        );
        noteFret.setAttribute("data-note", noteName);

        //add the single fretmarker class to approprate frets on the first string
        if (i === 0 && singleFretMarkPositions.indexOf(fret) !== -1) {
          noteFret.classList.add("single-fretmark");
        }
        //add double fretmarks
        if (i === 0 && doubleFretMarkPositions.indexOf(fret) !== -1) {
          let doubleFretMark = tools.createElement("div");
          doubleFretMark.classList.add("double-fretmark");
          noteFret.appendChild(doubleFretMark);
        }
      }
    }
    allNotes = document.querySelectorAll(".note-fret");
  },
  generateNoteNames(noteIndex, accidentals) {
    noteIndex = noteIndex % 12;
    let noteName;
    if (accidentals === "flats") {
      noteName = notesFlat[noteIndex];
    } else if (accidentals === "sharps") {
      noteName = notesSharp[noteIndex];
    } else if (accidentals === "intervals") {
      noteName = notesIntervals[noteIndex];
    }
    return noteName;
  },
  setupSelectedInstrumentSelector() {
    for (instrument in instrumentTuningPresets) {
      let instrumentOption = tools.createElement("option", instrument);
      selectedInstrumentSelector.appendChild(instrumentOption);
    }
  },
  setupNoteNameSection() {
    noteNameSection.innerHTML = "";
    let noteNames;
    if (accidentals === "flats") {
      noteNames = notesFlat;
    } else {
      noteNames = notesSharp;
    }
    noteNames.forEach((noteName) => {
      let noteNameElement = tools.createElement("span", noteName);
      noteNameSection.appendChild(noteNameElement);
    });
  },
  showNoteDot(event) {
    if (event.target.classList.contains("note-fret")) {
      if (showMultipleNotes) {
        app.toggleMultipleNotes(event.target.dataset.note, 1);
      } else {
        event.target.style.setProperty("--noteDotOpacity", 1);
      }
    }
  },
  hideNoteDot(event) {
    if (showMultipleNotes) {
      app.toggleMultipleNotes(event.target.dataset.note, 0);
    }
    event.target.style.setProperty("--noteDotOpacity", 0);
  },
  setupEventListeners() {
    fretboard.addEventListener("mouseover", this.showNoteDot);
    fretboard.addEventListener("mouseout", this.hideNoteDot);
    selectedInstrumentSelector.addEventListener("change", (event) => {
      selectedInstrument = event.target.value;
      numberOfStrings = instrumentTuningPresets[selectedInstrument].length;
      this.setupFretboard();
    });
    accidentalSelector.addEventListener("click", (event) => {
      if (event.target.classList.contains("acc-select")) {
        accidentals = event.target.value;
        this.setupFretboard();
        this.setupNoteNameSection();
      } else {
        return;
      }
    });
    numberOfFretsSelector.addEventListener("change", () => {
      numberOfFrets = numberOfFretsSelector.value;
      this.setupFretboard();
    });
    showAllNotesSelector.addEventListener("change", () => {
      if (showAllNotesSelector.checked) {
        root.style.setProperty("--noteDotOpacity", 1);
        fretboard.removeEventListener("mouseover", this.showNoteDot);
        fretboard.removeEventListener("mouseout", this.hideNoteDot);
        this.setupFretboard();
      } else {
        root.style.setProperty("--noteDotOpacity", 0);
        fretboard.addEventListener("mouseover", this.showNoteDot);
        fretboard.addEventListener("mouseout", this.hideNoteDot);
        this.setupFretboard();
      }
    });
    showMultipleNotesSelector.addEventListener("change", () => {
      showMultipleNotes = !showMultipleNotes;
    });
    noteNameSection.addEventListener("mouseover", (event) => {
      let noteToShow = event.target.innerText;
      app.toggleMultipleNotes(noteToShow, 1);
    });
    noteNameSection.addEventListener("mouseout", (event) => {
      if (!showAllNotesSelector.checked) {
        let noteToShow = event.target.innerText;
        app.toggleMultipleNotes(noteToShow, 0);
      } else {
        return;
      }
    });
  },
  toggleMultipleNotes(noteName, opacity) {
    for (let i = 0; i < allNotes.length; i++) {
      if (allNotes[i].dataset.note === noteName) {
        allNotes[i].style.setProperty("--noteDotOpacity", opacity);
      }
    }
  },
};

const tools = {
  createElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  },
};
app.init();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const scaleGeneratorInput = document.querySelector("#scale-generator-input");

const notesSharp2 = [
  "c",
  "c#",
  "d",
  "d#",
  "e",
  "f",
  "f#",
  "g",
  "g#",
  "a",
  "a#",
  "b",
  "c",
  "c#",
  "d",
  "d#",
  "e",
  "f",
  "f#",
  "g",
  "g#",
  "a",
  "a#",
  "b",
];

const majorScaleFormula = [0, 2, 4, 5, 7, 9, 11, 12];
const majorPentatonicFormula = [0, 2, 4, 7, 9, 12];
const minorPentatonicFormula = [0, 3, 5, 7, 10, 12];
const majorArpeggioFormula = [0, 4, 7];
const minorArpeggioFormula = [0, 3, 7];
const scaleFormulas = {
  majorScaleFormula: majorScaleFormula,
  majorPentatonicFormula: majorPentatonicFormula,
  minorPentatonicFormula: minorPentatonicFormula,
  majorArpeggioFormula: majorArpeggioFormula,
  minorArpeggioFormula: minorArpeggioFormula,
};

function makeScale(startNote, scaleFormula) {
  const scale = [];
  const startIndex = notesSharp2.indexOf(startNote);
  // const startIndex = accidentals.indexOf(startNote);

  for (i = 0; i < scaleFormula.length; i++) {
    const noteIndex = (startIndex + scaleFormula[i]) % notesSharp2.length;

    let note = notesSharp2[noteIndex];
    scale.push(note.toUpperCase());
  }
  return scale;
}

function displayScale(scale) {
  const scaleDisplay = document.querySelector("#scale-display2");
  scaleDisplay.innerHTML = "";
  scale.forEach((note) => {
    const noteElement = tools.createElement("span", `${note},`);
    scaleDisplay.appendChild(noteElement);
  });
}

scaleDisplayButton.addEventListener("click", (event) => {
  console.log("Button Clicked");
  const startNote = scaleStartInput.value;
  const scaleType = scaleTypeInput.value;

  const scaleFormula = scaleFormulas[scaleType];
  if (scaleFormula) {
    const scale = makeScale(startNote, scaleFormula);
    if (scale.length) {
      displayScale(scale); // Log the generated scale
    }
  }
});
