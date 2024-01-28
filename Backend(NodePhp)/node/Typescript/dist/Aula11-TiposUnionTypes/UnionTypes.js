"use strict";
var addOrConcat = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
    return "".concat(a).concat(b, ";");
};
console.log(addOrConcat(50, 25));
console.log(addOrConcat('Ryan', ' Menezes'));
