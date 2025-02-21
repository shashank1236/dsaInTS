"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagonalElementSum = void 0;
var diagonalElementSum = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i][i];
    }
    return sum;
};
exports.diagonalElementSum = diagonalElementSum;
//# sourceMappingURL=diagonalElementSum.js.map