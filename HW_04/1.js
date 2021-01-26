'use strict';



function getObjFromNum(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 999) {
        console.log("Число должно быть >= 0 и <= 999");
        return {};
    }
    return {
        units: num % 10,
        hundereds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
    };
}

console.log(getObjFromNum(345));


