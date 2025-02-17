"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
/**
 * Insertion Sort
 * @param {Array} arr Array to sort
 * @param {"ASC" | "DESC"} type Sort type "ASC" for  ascending, "DESC" for descending sort

 */
var insertionSort = function (arr, type) {
    if (type === void 0) { type = "ASC"; }
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1;
        if (type === "ASC") {
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
        }
        else {
            while (j >= 0 && arr[j] < key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
        }
        arr[j + 1] = key;
    }
};
exports.insertionSort = insertionSort;
