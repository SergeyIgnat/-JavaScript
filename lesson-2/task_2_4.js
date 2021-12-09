"use strict"

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с 
// двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
// складывать их и возвращать результат. Обязательно использовать оператор return.

function getSum (a, b) {
    return a + b
}

function getSub (c, d) {
    return c - d
}

function getMul (e, f) {
    return e * f
}

function getDiv(j, i) {
    return j / i
}

let x = 12
let y = 4

console.log(getSum(x, y))
console.log(getSub(x, y))
console.log(getMul(x, y))
console.log(getDiv(x, y))