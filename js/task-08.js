const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const result = {};
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Всі поля мають бути заповнені!");
  }
  result.Email = email.value;
  result.Password = password.value;
  console.log(result);
  event.currentTarget.reset();
}
