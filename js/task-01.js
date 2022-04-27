const categoriesElements = document.querySelectorAll('#categories li.item');
console.log('Number of categories:', categoriesElements.length);

categoriesElements.forEach(element => {
  const categoryName = element.firstElementChild.textContent;
  console.log('Category:', categoryName);

  const categoryTypesList = element.lastElementChild;
  const categoryTypesArray = categoryTypesList.children.length;
  console.log('Elements:', categoryTypesArray);
});