const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const result = {};
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені!");
  }
  result.email = email.value;
  result.password = password.value;
  console.log(result);
  event.currentTarget.reset();
}
