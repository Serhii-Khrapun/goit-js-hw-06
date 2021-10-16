const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

const inputName = () => {
  if (inputElement.value === "") {
    return (outputElement.textContent = "Anonymous");
  }
  return (outputElement.textContent = inputElement.value);
};
inputElement.addEventListener("input", inputName);
