// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать
//  его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и
//  инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const btnIncrem = document.querySelector('[data-action="increment"]');
const btnDecrem = document.querySelector('[data-action="decrement"]');

const span = document.querySelector('#value');

const increment = () => {
    counterValue += 1
    document.getElementById('value').textContent = counterValue;

};
const decrement = () => {
    counterValue -= 1
    document.getElementById('value').textContent = counterValue;

};
btnIncrem.addEventListener('click', increment);
btnDecrem.addEventListener('click', decrement);