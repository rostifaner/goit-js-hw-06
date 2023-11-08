const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector(`button[data-action="increment"]`);
const counter = document.getElementById("value");
let count = 0;
decBtn.addEventListener("click", () => {
  count -= 1;
  counter.textContent = count;
});
incBtn.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});
