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

function playOnKey() {
  event.preventDefault();
  const key = event.code;
  if (typeof notes[key] !== "undefined" && lastbtn !== notes[key]) {
    document.getElementById(key).style.backgroundColor = "#bdbebd";
    const sound = new Audio(notes[key].src);
    sound.play();
    lastbtn = notes[key];
  }
}

function stopPlayOnKey() {
  event.preventDefault();
  const key = event.code;
  if (typeof notes[key] !== "undefined") {
    document.getElementById(key).style.backgroundColor =
      event.target.style.color;
    lastbtn = null;
  }
}

function playOnMouse() {
  document.getElementById("demoButton").click = audioSample();
  keyNote = event.target.id;

  if (typeof notes[keyNote] !== "undefined") {
    document.getElementById(keyNote).style.backgroundColor = "#bdbebd";
    const sound = new Audio(notes[keyNote].src);
    sound.play();
  }
}

const playNote = src => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(() => {
        return new Audio(src).play();
      });
    }, 200);
  });
};

const audioSample = async () => {
  for (let i = 0; i < songNotes.length; i++) {
    const { src, id } = notes[songNotes[i]];
    const element = document.getElementById(id);
    const color = document.getElementById(id).style.color;

    element.style.backgroundColor = "red";
    const note = await playNote(src);
    note();
    element.style.backgroundColor = color;
  }
};

document.addEventListener("keydown", playOnKey);
document.addEventListener("keyup", stopPlayOnKey);
document.addEventListener("mousedown", playOnMouse);
document.addEventListener("mouseup", () => {
  if (typeof notes[keyNote] !== "undefined") {
    document.getElementById(keyNote).style.backgroundColor =
      event.target.style.color;
  }
});

//----------Незаконченная попытка нарисовать интерфейс через код------

/*
let lastbtn;
const handleClick = (src, id) => {
	if (lastbtn !== id) {
		const key = document.getElementById(id);
		key.style.backgroundColor = "red";
		const sound = new Audio(src);
		sound.play();
		sound.onpause = () => key.style.backgroundColor = "grey";
		lastbtn = id;
	}
}

const notes = {
	"KeyQ": {id: "KeyQ", src: "./sounds/a4.mp3", class: "whiteKey", onClickFn: handleClick},
	"KeyW": {id: "KeyW", src: "./sounds/a-4.mp3", class: "whiteKey", onClickFn: handleClick},
	"KeyE": {id: "KeyE", src: "./sounds/b4.mp3", class: "blackKey", onClickFn: handleClick},
};

window.onload = function() {
	const app = document.getElementById("App");
	const pianoKeyboard = document.createElement("div");
	pianoKeyboard.setAttribute("id", "pianoKeyboard");

	const pianoKeys = Object.entries(notes).map(pianoKey => {
		const key = document.createElement("div");

		key.setAttribute("class", pianoKey[1].class);

		key.setAttribute("id", pianoKey[1].id);
		
		key.onclick =  () => pianoKey[1].onClickFn(pianoKey[1].src, pianoKey[1].id);

		return key;
	})
	pianoKeys.map(key => {
		pianoKeyboard.append(key);
	})

	app.append(pianoKeyboard);
}

window.addEventListener("keydown", ({ code }) => {
	notes[code].onClickFn(notes[code].src, notes[code].id);
})

window.addEventListener("keyup", ({ code }) => {
	lastbtn = null;
})
*/
