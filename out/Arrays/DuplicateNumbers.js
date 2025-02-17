"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueArray = void 0;
var uniqueArray = function (array) {
    var uniqueArr = [];
    for (var i = 0; i < array.length; i++) {
        var duplicate = false;
        for (var j = 0; j < uniqueArr.length; j++) {
            if (uniqueArr[j] === array[i]) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate && typeof array[i] === "number") {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
};
exports.uniqueArray = uniqueArray;
