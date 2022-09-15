const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsMenu = document.querySelector('#ingredients');

ingredientsMenu.append(
  ...ingredients.map(name => {
    const ingredientItem = document.createElement('li');
    ingredientItem.classList.add('item');
    ingredientItem.textContent = `${name}`;
    return ingredientItem;
  })
);



// ingredients.forEach(name => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.classList.add('item');
//   ingredientItem.textContent = `${name}`;
//   ingredientsMenu.append(ingredientItem);
// })

