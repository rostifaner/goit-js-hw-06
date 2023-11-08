const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", handleEvent);
function handleEvent(event) {
  // console.log(event.target.value);
  const inputValue = event.target.value.trim();
  if (inputValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputValue;
  }
}
