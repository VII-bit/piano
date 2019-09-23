function changeColor() {
	event.preventDefault();
	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = 'grey';
		if (key == 'Digit1') {
		let audio = new Audio('');
		audio.play();
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