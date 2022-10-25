// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
for (let i = 0; i < ingredients.length; i += 1) {
    console.log(ingredients[i]);
    const ingredient = document.createElement("li");
    ingredient.textContent = ingredients[i];
    console.log(ingredient);
}

