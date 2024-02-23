'use strict';

const numberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
