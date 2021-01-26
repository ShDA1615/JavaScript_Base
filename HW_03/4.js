'use strict';


const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const filterProducts = products.filter(function (prod) {
    return "photos" in prod && prod.photos.length > 0
});
console.log(filterProducts);

const sortedProducts = products.sort(function (prod1, prod2) {
    return prod1.price - prod2.price;
});
console.log(sortedProducts);

