const elementsOfItem = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${elementsOfItem.length}`);
elementsOfItem.forEach((elementOfItem) => {
  const headerName = elementOfItem.querySelector("h2").textContent;
  console.log(`Category: ${headerName}`);
  const numberElem = elementOfItem.querySelectorAll("li").length;
  console.log(`Elements: ${numberElem}`);
});
