root = document.documentElement;
const fretboard = document.querySelector(".fretboard");
const noteNameSection = document.querySelector(".note-name-section");
const selectedInstrumentSelector = document.querySelector(
  "#instrument-selector"
);
const accidentalSelector = document.querySelector(".accidental-selector");

const numberOfFretsSelector = document.querySelector("#number-of-frets");

const showAllNotesSelector = document.querySelector("#show-all-notes");
const showOnFretboard = document.querySelector("#show-on-fretboard");
const showMultipleNotesSelector = document.querySelector(
  "#show-multiple-notes"
);
const scaleRootInput = document.querySelector("#scaleStartInput");

const scaleTypeInput = document.querySelector("#scaleTypeInput");
const scaleInput = document.getElementById("scaleInput");
const scaleDisplayButton = document.querySelector("#scale-display");
const exactScaleDisplayButton = document.querySelector("#scale-display-exact");
const scaleDisplayField = document.querySelector("#scale-display2");
let allNotes;
let showMultipleNotes = false;

let numberOfFrets = 20;

const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
const doubleFretMarkPositions = [12, 24];

const notesFlat = [
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "G♭",
  "G",
  "A♭",
  "A",
  "B♭",
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
const allShapes = {
  majorScaleFormula: {
    one: [
      "5",
      "2",
      "4",
      "5",
      "2",
      "4",
      "1",
      "2",
      "4",
      "2",
      "3",
      "5",
      "2",
      "4",
      "5",
      "2",
      "4",
    ],
    two: [
      "5",
      "7",
      "4",
      "5",
      "7",
      "4",
      "6",
      "7",
      "4",
      "6",
      "7",
      "5",
      "7",
      "4",
      "5",
      "7",
      "4",
    ],
    three: [
      "7",
      "9",
      "6",
      "7",
      "9",
      "7",
      "9",
      "10",
      "7",
      "9",
      "10",
      "7",
      "9",
      "6",
      "7",
      "9",
      "6",
    ],
    four: [
      "12",
      "9",
      "11",
      "12",
      "9",
      "11",
      "9",
      "10",
      "12",
      "9",
      "10",
      "12",
      "9",
      "11",
      "12",
      "9",
      "11",
    ],
    five: [
      "12",
      "14",
      "11",
      "12",
      "14",
      "11",
      "13",
      "14",
      "12",
      "14",
      "15",
      "12",
      "14",
      "11",
      "14",
      "11",
    ],
  },
  majorPentatonicFormula: {
    one: ["5", "2", "4", "2", "4", "2", "4", "2", "5", "2", "5", "2"],
    two: ["5", "7", "4", "7", "4", "7", "4", "6", "5", "7", "5", "7"],
    three: ["7", "9", "6", "9", "7", "10", "7", "9", "7", "9", "7", "9"],
    four: ["12", "9", "11", "9", "11", "10", "12", "9", "12", "9", "12", "9"],
    five: [
      "12",
      "14",
      "11",
      "14",
      "11",
      "14",
      "12",
      "14",
      "12",
      "14",
      "12",
      "14",
    ],
  },
  majorArpeggioFormula: {
    one: ["5", "4", "2", "2", "2", "5", "5"],
    two: ["5", "4", "7", "7", "6", "5", "5"],
    three: ["7", "6", "9", "10", "9", "7", "7"],
    four: ["12", "11", "9", "10", "9", "12", "9"],
    five: ["12", "11", "14", "14", "14", "12", "12"],
  },
};
const majorScaleFormula = [0, 2, 4, 5, 7, 9, 11, 12];
const majorPentatonicFormula = [0, 2, 4, 7, 9, 12];
const minorPentatonicFormula = [0, 3, 5, 7, 10, 12];
const majorArpeggioFormula = [0, 4, 7, 12];
const minorArpeggioFormula = [0, 3, 7, 12];
const scaleFormulas = {
  majorScaleFormula: majorScaleFormula,
  majorPentatonicFormula: majorPentatonicFormula,
  minorPentatonicFormula: minorPentatonicFormula,
  majorArpeggioFormula: majorArpeggioFormula,
  minorArpeggioFormula: minorArpeggioFormula,
};

let selectedInstrument = "Guitar (6 Strings)";
let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;

const app = {
  init() {
    this.setupFretboard();
    this.setupSelectedInstrumentSelector();
    // this.setupNoteNameSection();
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
        noteFret.setAttribute("data-exactNote", `${noteName}${fret}`);

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
        // this.setupNoteNameSection();
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

const scaleGeneratorInput = document.querySelector("#scale-generator-input");

function selectBank() {
  let bank;
  if (accidentals === "flats") {
    bank = notesFlat;
  } else if (accidentals === "sharps") {
    bank = notesSharp;
  } else if (accidentals === "intervals") {
    bank = notesIntervals;
  }
  return bank;
}

function makeScale(startNote, scaleFormula) {
  const noteBank = selectBank();
  const scale = [];
  const startIndex = notesSharp2.indexOf(startNote);
  for (i = 0; i < scaleFormula.length; i++) {
    const noteIndex = (startIndex + scaleFormula[i]) % noteBank.length;
    let note = noteBank[noteIndex];
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
  const startNote = scaleRootInput.value;
  const scaleType = scaleTypeInput.value;

  const scaleFormula = scaleFormulas[scaleType];
  if (scaleFormula) {
    const scale = makeScale(startNote, scaleFormula);
    if (scale.length) {
      displayScale(scale); // Log the generated scale
    }
  }
});

app.displayScaleOnFretboard = function (scale) {
  // Clear all previous highlights
  allNotes.forEach((noteFret) => {
    noteFret.style.setProperty("--noteDotOpacity", 0);
  });
  ////// Get rid of hover over thing
  fretboard.removeEventListener("mouseover", this.showNoteDot);
  fretboard.removeEventListener("mouseout", this.hideNoteDot);

  // Highlight the notes that are part of the scale
  scale.forEach((note) => {
    allNotes.forEach((noteFret) => {
      if (noteFret.dataset.note === note) {
        noteFret.style.setProperty("--noteDotOpacity", 1);
      }
    });
  });
};

scaleDisplayButton.addEventListener("click", (event) => {
  const startNote = scaleRootInput.value.toLowerCase();
  const scaleType = scaleTypeInput.value;

  const scaleFormula = scaleFormulas[scaleType];
  if (scaleFormula) {
    const scale = makeScale(startNote, scaleFormula);
    if (scale.length) {
      displayScale(scale); // Display scale in the UI
      app.displayScaleOnFretboard(scale); // Highlight scale on the fretboard
    }
  }
});

app.displayExactScaleOnFretboard = function (scale) {
  // Clear all previous highlights
  allNotes.forEach((noteFret) => {
    noteFret.style.setProperty("--noteDotOpacity", 0);
  });
  ////// Get rid of hover over thing
  fretboard.removeEventListener("mouseover", this.showNoteDot);
  fretboard.removeEventListener("mouseout", this.hideNoteDot);

  // Highlight the notes that are part of the scale
  scale.forEach((note) => {
    allNotes.forEach((noteFret) => {
      if (noteFret.dataset.exactnote === note) {
        noteFret.style.setProperty("--noteDotOpacity", 1);
      }
    });
  });
};

//Displays 1 scale shape at a time
exactScaleDisplayButton.addEventListener("click", (event) => {
  const scaleShapeNumber = document.getElementById("scaleShapeInput");
  // const scaleShapeValue = "" + scaleShapeNumber.value;

  // takes the selected scale type and shape number and finds the corresponding numbers that need to be added to the scale
  const requestedScaleType = scaleTypeInput.value;
  const shape2 =
    allShapes[`${requestedScaleType}`][`${scaleShapeNumber.value}`];
  // make scale
  const startNote = scaleRootInput.value;
  const scaleType = scaleTypeInput.value;

  const scaleFormula = scaleFormulas[scaleType];

  if (scaleFormula) {
    const scale = makeScale(startNote, scaleFormula);
    const newShape = convert(scale, shape2);
    if (scale.length) {
      displayScale(scale); // Log the generated scale
    }
    const shape3 = scalePlusNums(scale, newShape);
    if (shape3) {
      app.displayExactScaleOnFretboard(shape3);
    } else {
      console.error(`Shape ${shape3} is undefined`);
    }
  }
});

function scalePlusNums(scale, numbers) {
  // console.log("Numbers for scale type and number:", numbers);
  // console.log("Input Scale", scale);
  let scale2 = [...scale];
  // console.log("Renamed:", scale2);
  scale2.pop();
  scale2.push(...scale);
  // console.log(scale2);
  scale2.push(scale2[1]);
  // console.log("edited scale", scale2);
  const newScale = [];
  for (i = 0; i < scale2.length; i++) {
    const newNote = scale2[i] + `${numbers[i]}`;
    newScale.push(newNote);
  }
  // console.log("New Scale:", newScale);
  return newScale;
}

function convert(scale, shape) {
  const newShape = [];
  const root = scale[0];
  console.log(shape);
  const notes = [
    "A",
    "A3",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  shape.forEach(function (number, index) {
    let newNum = Number(number) + Math.abs(notes.indexOf(root));
    newNum = newNum + "";
    newShape.push(newNum);
  });
  console.log(newShape);
  return newShape;
}
