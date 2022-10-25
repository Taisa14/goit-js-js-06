// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const navElement = document.querySelector('#categories');
const listItem = navElement.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);

for (let i = 0; i < listItem.length; i++) {
    console.log("Category: " + listItem[i].querySelector('h2').textContent);
    console.log("Elements: " + listItem[i].querySelectorAll('ul li').length);
}