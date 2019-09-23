function changeColor() {
	event.preventDefault();
	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = 'grey';
		
		switch (key) {		//звуки ниже не соответствуют нотам

		case 'Digit1':
		let audio = new Audio('sounds/A3vH.wav');
		audio.play();
		break;

		case 'Digit3':
		let audio1 = new Audio('sounds/A4vH.wav');
		audio1.play();
		break;

		case 'Digit5':
		let audio2 = new Audio('sounds/A5vH.wav');
		audio2.play();
		break;

		case 'Digit6':
		let audio3 = new Audio('sounds/A6vH.wav');
		audio3.play();
		break;

		case 'Digit8':
		let audio4 = new Audio('sounds/A7vH.wav');
		audio4.play();
		break;

		case 'Digit0':
		let audio5 = new Audio('sounds/A3vH.wav');
		audio5.play();
		break;

		case 'Equal':
		let audio6 = new Audio('sounds/A3vH.wav');
		audio6.play();
		break;

		case 'Digit2':
		let audio7 = new Audio('sounds/C1vH.wav');
		audio7.play();
		break;

		case 'Digit4':
		let audio8 = new Audio('sounds/C4vH.wav');
		audio8.play();
		break;


		default:
    	break;
		}
	}
}

function backColor() {
	event.preventDefault();
	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = event.target.style.color;
	}
}

function writeToInput() {
	let key = event.target;
	if (key == '[object HTMLButtonElement]') {
	document.getElementById('inputField').value = `${key.innerHTML}`;
}
}


window.addEventListener('keydown', changeColor);
window.addEventListener('keyup', backColor);
window.addEventListener('click', writeToInput);