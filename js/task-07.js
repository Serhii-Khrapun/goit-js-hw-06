const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSizeControl = () => {
  const fontSize = inputEl.value;
  textEl.style.fontSize = fontSize + "px";
};
inputEl.addEventListener("input", fontSizeControl);
