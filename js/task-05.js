// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".


const refs = {
    inputRef: document.querySelector('#name-input'),
    outputLabelRef: document.querySelector('#name-output'),
};
refs.inputRef.addEventListener('input', onInputChangeOutput);

function onInputChangeOutput(event) {
    !event.currentTarget.value
        ? (refs.outputLabelRef.textContent = 'Anonymous')
        : (refs.outputLabelRef.textContent = event.currentTarget.value);
}
