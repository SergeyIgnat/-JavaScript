'use strict';

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
//    товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];


let discount = 0.15;

products.forEach(function(el){el.price = el.price*(1- discount)});