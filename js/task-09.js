function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector("body");
const text = document.querySelector(".color");
btnEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  colorEl.style.backgroundColor = randomColor;
  text.textContent = randomColor;
});
