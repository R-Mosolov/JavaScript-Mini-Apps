// Проверка работы/подключенности кода
// alert('Hello, World!');

// Переменные исходного значения и результата вычислений
const startNumber = 0;
let resultNumber = document.querySelector('.calculator__content--input');

// Переменные математических операций
const plus = document.querySelector('.math-operations__plus');
const minus = document.querySelector('.math-operations__minus');
const multiplication = document.querySelector('.math-operations__multiplication');
const division = document.querySelector('.math-operations__division');

const reset = document.querySelector('.math-operations__reset');
const result = document.querySelector('.math-operations__result');

// Переменная-собиратель результата
let numbersArray = [];


// Функции математических операций
const plusCalculator = (value) => {
    numbersArray = value;
}

plus.addEventListener('click', function () {
    plusCalculator(resultNumber.value);
    alert(numbersArray);
    resultNumber.value = '';
});




// plus.addEventListener('click', function () {
//     numbersArray = resultNumber.value;
//     alert(numbersArray);
//     resultNumber.value = '';
// });
//
// minus.addEventListener('click', function () {
//     numbersArray = resultNumber.value;
//     alert(numbersArray);
//     resultNumber.value = '';
// });
//
//
// reset.addEventListener('click', function () {
//     resultNumber.value = '';
// });
//
// result.addEventListener('click', function () {
//
// });

// let resultCalculator = ;