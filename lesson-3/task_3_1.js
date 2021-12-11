'use strict';

/*1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
    с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
 
 0 – это ноль
 1 – нечетное число
 2 – четное число
 3 – нечетное число
 …*/

function evenOrOdd(num) {
    let result = '';
    switch(true) {
        case num === 0:
            result = 'это ноль';
            break;
        case num%2 === 0:
            result  = 'четное число';
            break;
        case num%2 !== 0:
            result = 'нечетное число';   
    }
    return result;
}

 for (let i = 0;i <= 10;i++) {
    let numsWithDescript = `${i} - ${evenOrOdd(i)}`;
    console.log(numsWithDescript)
 }