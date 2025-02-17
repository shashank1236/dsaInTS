"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSortArr = void 0;
/**
 * Selection Sort
 * @param {Array} arr Array to sort
 * @param {"ASC" | "DESC"} type Sort type "ASC" for  ascending, "DESC" for descending sort

 */
var selectionSortArr = function (arr, type) {
    var _a;
    if (type === void 0) { type = "ASC"; }
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var min_idx = i;
        for (var j = i + 1; j < n; j++) {
            if (type === "ASC") {
                if (arr[min_idx] > arr[j])
                    min_idx = j;
            }
            else {
                if (arr[min_idx] < arr[j])
                    min_idx = j;
            }
        }
        if (min_idx !== i) {
            _a = [arr[min_idx], arr[i]], arr[i] = _a[0], arr[min_idx] = _a[1];
        }
    }
};
exports.selectionSortArr = selectionSortArr;
