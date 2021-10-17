const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listElement = document.querySelector("#ingredients");
const allItems = [];
const addElements = ingredients.forEach((ingredient) => {
  const itemElement = document.createElement("li");
  itemElement.textContent = ingredient;
  itemElement.classList.add("item");
  allItems.push(itemElement);
});
listElement.append(...allItems);
