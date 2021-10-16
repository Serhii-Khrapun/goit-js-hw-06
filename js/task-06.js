const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.getAttribute("data-length");

const inputCheck = (event) => {
  if (event.currentTarget.value.length === Number(inputLength)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
};

inputEl.addEventListener("blur", inputCheck);
