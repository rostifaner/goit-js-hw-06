const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const createList = document.createElement("li");
  createList.textContent = ingredient;
  createList.classList.add("item");
  // console.log(createList);
  const addList = document.querySelector("#ingredients");
  addList.append(createList);
});
