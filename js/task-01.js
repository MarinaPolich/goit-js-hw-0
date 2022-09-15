
const itemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsByClass.length}`);
console.log('');

const firstItem = itemsByClass.forEach(element => {
    console.log("Category: " + element.firstElementChild.textContent);
    console.log("Elements: " + element.querySelectorAll('li').length);
    console.log('');
});

 