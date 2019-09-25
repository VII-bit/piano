let lastbtn;
let keyNote;
const ms = 200;

const notes = {
  Tab: { id: "Tab", src: "./sounds/c3.mp3" },
  KeyQ: { id: "KeyQ", src: "./sounds/d3.mp3" },
  KeyW: { id: "KeyW", src: "./sounds/e3.mp3" },
  KeyE: { id: "KeyE", src: "./sounds/f3.mp3" },
  KeyR: { id: "KeyR", src: "./sounds/g3.mp3" },
  KeyT: { id: "KeyT", src: "./sounds/a3.mp3" },
  KeyY: { id: "KeyY", src: "./sounds/b3.mp3" },
  KeyU: { id: "KeyU", src: "./sounds/c4.mp3" },
  KeyI: { id: "KeyI", src: "./sounds/d4.mp3" },
  KeyO: { id: "KeyO", src: "./sounds/e4.mp3" },
  KeyP: { id: "KeyP", src: "./sounds/f4.mp3" },
  BracketLeft: { id: "BracketLeft", src: "./sounds/g4.mp3" },
  BracketRight: { id: "BracketRight", src: "./sounds/a4.mp3" },
  Backslash: { id: "Backslash", src: "./sounds/b4.mp3" },
  Enter: { id: "Enter", src: "./sounds/c5.mp3" },
  Digit1: { id: "Digit1", src: "./sounds/c-3.mp3" },
  Digit2: { id: "Digit2", src: "./sounds/d-3.mp3" },
  Digit4: { id: "Digit4", src: "./sounds/f-3.mp3" },
  Digit5: { id: "Digit5", src: "./sounds/g-3.mp3" },
  Digit6: { id: "Digit6", src: "./sounds/a-3.mp3" },
  Digit8: { id: "Digit8", src: "./sounds/c-4.mp3" },
  Digit9: { id: "Digit9", src: "./sounds/d-4.mp3" },
  Minus: { id: "Minus", src: "./sounds/f-4.mp3" },
  Equal: { id: "Equal", src: "./sounds/g-4.mp3" },
  Backspace: { id: "Backspace", src: "./sounds/a-4.mp3" }
};

const songNotes = [
  "BracketLeft",
  "KeyO",
  "BracketRight",
  "KeyO",
  "Minus",
  "BracketLeft",
  "KeyO",
  "Backslash",
  "BracketRight",
  "BracketLeft",
  "Minus",
  "KeyO",
  "KeyI",
  "KeyO"
];

const hoverColor = "#bdbebd";

window.onload = () => {
  const piano = document.getElementById("piano");
  const newPiano = new Piano(notes);
  document.addEventListener("keydown", newPiano.playOnKey);
  document.addEventListener("keyup", newPiano.clearLastBtn);
  piano.addEventListener("mouseup", newPiano.clearLastBtn);
  piano.addEventListener("mousedown", newPiano.playOnKey);
  document.getElementById("demoButton").onclick = newPiano.audioSample;
};

class Piano {
  constructor(notesList) {
    this.lastbtn = null;
    this.notes = notesList;
  }

  clearLastBtn = () => (this.lastbtn = null);

  playOnKey = async event => {
    const key = event.code || event.target.id;
    if (!this.lastbtn && this.notes[key]) {
      const sound = await this.playNote(notes[key].src, key, 100);
      sound();
      this.lastbtn = this.notes[key];
    }
  };

  playNote = (src, keyNote, delay = 200) => {
    const element = document.getElementById(keyNote);
    const color = element.style.color;
    element.style.backgroundColor = hoverColor;

    return new Promise(resolve =>
      setTimeout(
        () =>
          resolve(() =>
            (() => {
              element.style.backgroundColor = color;
              new Audio(src).play();
            })()
          ),
        delay
      )
    );
  };

  audioSample = async () => {
    for (let i = 0; i < songNotes.length; i++) {
      const { src, id } = notes[songNotes[i]];
      const note = await this.playNote(src, id);
      note();
    }
  };
}
