// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) и 
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.const fontSizeControl = document.querySelector("#font-size-control");
// console.log(fontSizeControl);

const refs = {
    controlRef: document.querySelector('#font-size-control'),
    textDifSizeRef: document.querySelector('#text'),
};

refs.controlRef.addEventListener('input', onSizeChanger);

function onSizeChanger() {
    refs.textDifSizeRef.style.fontSize = `${refs.controlRef.value}px`;
}