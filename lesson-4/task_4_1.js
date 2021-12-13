'use strict';
/**
 * 1. (это задание делайте по желанию)
   Написать функцию, преобразующую число в объект.
   Передавая на вход число в диапазоне [0, 999],
   мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:

- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
  Например, для числа 45 мы должны получить следующий объект:

{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}

Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

Вам может пригодиться:

- Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее
  здесь https://mzl.la/2XCVSsx
- Math.floor(value) - метод возвращает целое число, которое меньше или равно
  данному числу (проще говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO
- Используйте также остаток от деления на 10, например 123 % 10 будет 3
- Вам также может пригодится делить число на 100 и на 10.
 */


function ObjectNumber (units, tens, hundreds)   {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}


const obj1 = new ObjectNumber(9, 8, 7)


function decompress (num) {
  if (num >=0 && num <=999 && Number.isInteger(num)) {
    let unitsArr = [0, 0, 0];
    let lenghtNumber = Math.ceil(Math.log10(num + 1));
    for (let i = 0; i < lenghtNumber; i++) {
      unitsArr[i] = num % 10;
      num = Math.floor(num / 10);
    }
   
    const obj = new ObjectNumber(unitsArr[0], unitsArr[1], unitsArr[2]);

    return obj;

  } else {
    console.log("вне диапазона")
    return (new ObjectNumber());
  }
}

const obj2 = decompress(345);
const obj3 = decompress(19);
const obj4 = decompress(7);
const obj5 = decompress(-7);


