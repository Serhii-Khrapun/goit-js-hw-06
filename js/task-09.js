const btnElement = document.querySelector(".change-color");
const bodeElement = document.body;
const nameColorElement = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  const color = getRandomHexColor();
  bodeElement.style.backgroundColor = color;
  nameColorElement.textContent = color;
};
btnElement.addEventListener("click", changeColor);
