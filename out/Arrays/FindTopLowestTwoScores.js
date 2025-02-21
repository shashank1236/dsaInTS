"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLowestTwoScores = exports.findTopTwoScores = void 0;
var findTopTwoScores = function (arr) {
    var top = arr[0];
    var second = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (top < arr[i]) {
            second = top;
            top = arr[i];
        }
        else if (arr[i] > second && arr[i] < top) {
            second = arr[i];
        }
    }
    return [top, second];
};
exports.findTopTwoScores = findTopTwoScores;
var findLowestTwoScores = function (arr) {
    var top = arr[0];
    var second = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (top > arr[i]) {
            second = top;
            top = arr[i];
        }
        else if (arr[i] < second && arr[i] > top) {
            second = arr[i];
        }
    }
    return [top, second];
};
exports.findLowestTwoScores = findLowestTwoScores;
//# sourceMappingURL=FindTopLowestTwoScores.js.map