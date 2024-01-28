"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapString = void 0;
function mapString(array, callbackfn) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var items = array[i];
        newArray.push(callbackfn(items));
    }
    return newArray;
}
exports.mapString = mapString;
var abc = ["a", "b", "c"];
var abcMaiusculo = mapString(abc, function (item) {
    return item.toUpperCase();
});
console.log(abcMaiusculo);
