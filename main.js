//Задача 1.1 - Конвертер температуры
// Создай функцию convertTemperature(celsius, toFahrenheit), которая:
//
// Если toFahrenheit = true, переводит Цельсий в Фаренгейт: (C × 9/5) + 32
// Если toFahrenheit = false, переводит Фаренгейт в Цельсий: (F - 32) × 5/9
// Протестируй функцию с несколькими значениями

const convertTemperature = (celsius, toFahrenheit) => {
    if (toFahrenheit === true) {console.log((celsius * 9/5) + 32)}
    else if(toFahrenheit === false) {console.log((celsius - 32) * 5/9)}
}
convertTemperature(10, true)
convertTemperature(20, true)
convertTemperature(20, false)

//Задача 1.2 - Проверка пароля
// Напиши функцию validatePassword(password), которая:
//
// Проверяет, что пароль длиннее 8 символов
// Содержит хотя бы одну букву
// Содержит хотя бы одну цифру
// Возвращает true если все условия выполнены, иначе false
const validatePassword = (password) => {
    const hasDigits = /\d/.test(password);
    const hasLower = /[a-z]/.test(password);
    if (password.length > 8 && hasLower && hasDigits) return true
    else return false
}
validatePassword("1adfasddas")

//Задача 1.3 - Калькулятор с операциями
// Создай функцию calculate(a, b, operation), где operation это строка ("+", "-", "*", "/").
// Функция должна выполнить операцию и вернуть результат. Протестируй с разными операциями.
//
const calculate = (a, b, operation) => {
    if (operation === "+") return a + b;
    else if (operation === "-") return a - b;
    else if (operation === "*") return a * b;
    else if (operation === "/") return a / b;
    else return  false
}
console.log(calculate(30, 7, "+"))
console.log(calculate(13, 3, "-"))
console.log(calculate(2, 2, "/"))
console.log(calculate(3, 9, "*"))
console.log(calculate(4, 2, "1"))

//DOM
// Задача 2 - Интерактивный калькулятор
// Создай HTML страницу с:
//
// Двумя полями ввода для чисел (id="num1", id="num2")
// Четырьмя кнопками для операций (+, -, ×, ÷) с классом "operation-btn"
// Элементом для результата (id="result")
//
//
//
// JavaScript код должен:
//
// При клике на кнопку операции вычислить результат
// Вывести результат в div
// Обработать деление на ноль
// ( Можно использовать функцию с задачи 1.3 )
const inputElement1 = document.querySelector("#num1");
const inputElement2 = document.querySelector("#num2");
const btnElement = document.querySelectorAll(".operation-btn");
const resultButton = document.querySelector("#result");
const resultTextElement = document.querySelector("#resultText");

let selectedOperation = ""
const calculator = (a, b, operation) => {
    if (operation === "+") return a + b;
    else if (operation === "-") return a - b;
    else if (operation === "*") return a * b;
    else if (operation === "/" && b !== 0) return a / b;
    else if (operation === "/") {
        if (b === 0) return "нельзя делить на 0";
        return a / b;
    }
    else return"выберете операцию"

}
for (let button of btnElement) {
    button.addEventListener("click", () => {
        selectedOperation = button.textContent;
    })
}
resultButton.addEventListener("click", () => {
    const a = +inputElement1.value;
    const b = +inputElement2.value;
    resultTextElement.textContent = calculator(a, b, selectedOperation);
})