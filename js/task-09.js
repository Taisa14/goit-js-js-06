// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на
// button.change - color і виводить значення кольору в span.color.

const refs = {
    bodyRef: document.querySelector('body'),
    colorValueRef: document.querySelector('.color'),
    changeColorBtnRef: document.querySelector('.change-color'),
};
refs.changeColorBtnRef.addEventListener('click', onRandomBodyPointer);

function onRandomBodyPointer() {
    const randomColor = getRandomHexColor();

    refs.bodyRef.style.backgroundColor = `${randomColor}`;
    refs.colorValueRef.textContent = `${randomColor}`;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}