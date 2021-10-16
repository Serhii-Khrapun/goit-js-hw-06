const listElement = document.querySelector("#categories");
const listItems = listElement.children;
const numberOfCategories = listItems.length;
console.log(`Number of categories : ${numberOfCategories}`);
const newListItems = [...listItems];

newListItems.forEach((item) => {
  const title = item.firstElementChild;
  const titleValue = title.innerHTML;

  const numberOfElements = item.lastElementChild.children.length;

  console.log(`Category: ${titleValue}`);
  console.log(`Elements: ${numberOfElements}`);
});
