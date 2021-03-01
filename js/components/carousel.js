const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
const increase = 150;
let position = 0;

btnRight.addEventListener("click", () => {
	position += increase;
	elements.style = `transform: translateX(${position}px);`;
});

btnLeft.addEventListener("click", () => {
	position -= increase;
	elements.style = `transform: translateX(${position}px);`;
});
