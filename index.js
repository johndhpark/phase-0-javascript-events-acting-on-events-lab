// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
	const leftNumbers = dodger.style.left.replace("px", "");
	const left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
	}
}

function moveDodgerRight() {
	const leftNumbers = dodger.style.left.replace("px", "");
	const leftDodger = parseInt(leftNumbers, 10);

	const field = document.getElementById("game");
	const widthField = field.clientWidth;
	console.log(dodger.style.left);

	//if (leftDodger + 40 + 1 < widthField) {
	dodger.style.left = `${leftDodger + 1}px`;
	//}

	console.log(dodger.style.left);
}

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") {
		moveDodgerLeft();
	} else if (e.key === "ArrowRight") {
		moveDodgerRight();
	}
});
