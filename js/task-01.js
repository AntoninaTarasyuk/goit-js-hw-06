const categoriesEl = document.querySelectorAll('#categories li.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});