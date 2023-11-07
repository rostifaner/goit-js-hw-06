const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const pass = form.elements.password.value;
  if (login === "" || pass === "") {
    alert("All fields must be filled!");
  } else {
    const value = {
      email: login,
      password: pass,
    };
    console.log(value);
  }
  form.reset();
});
