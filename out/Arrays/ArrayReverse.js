"use strict";
var ArrayReverse = function (arr) {
    var _a;
    for (var r = arr.length - 1, l = 0; l < r; r--, l++)
        _a = [arr[r], arr[l]], arr[l] = _a[0], arr[r] = _a[1];
    return arr;
};
var arr = [1, 2, 3, 4, 5];
console.log(ArrayReverse(arr));
