"use strict"

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns Результат сложения
 */
function getSum (a, b) {
    return a + b
}

/**
 * 
 * @param {number} c 
 * @param {number} d 
 * @returns Результат вычитания 
 */
function getSub (c, d) {
    return c - d
}

/**
 * 
 * @param {number} e 
 * @param {number} f 
 * @returns Резульат умножения
 */
function getMul (e, f) {
    return e * f
}

/**
 * 
 * @param {number} j 
 * @param {number} i 
 * @returns Результат деления
 */
function getDiv(j, i) {
    return j / i
}

/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns {number} Возвращает результат выполнения математической операции
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation){
        case "+":
            return getSum(arg1, arg2)
        case "-":
            return getSub(arg1, arg2)
        case "*":
            return getMul(arg1, arg2)
        case "/":
            return getDiv(arg1, arg2)
        default:
            console.log("Что-то пошло не так")
    }
    
}

let x = 17
let y = 2

console.log(mathOperation(x, y, "+"))
console.log(mathOperation(x, y, "-"))
console.log(mathOperation(x, y, "*"))
console.log(mathOperation(x, y, "/"))
console.log(mathOperation(x, y, "="))