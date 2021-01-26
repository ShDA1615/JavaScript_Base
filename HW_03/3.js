"use strict";
const products = [{
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

console.log(products);
products.forEach(function(prod){
    prod.price = prod.price - prod.price * 0.15;
});
console.log(products);