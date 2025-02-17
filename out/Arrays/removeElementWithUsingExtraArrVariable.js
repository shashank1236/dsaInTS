"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
var removeElement = function (nums, val) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[j] = nums[i];
            j++;
        }
    }
    var k = nums.slice(0, j);
    nums = k;
    return j;
};
exports.removeElement = removeElement;
