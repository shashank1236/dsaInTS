"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = void 0;
var fizzBuzz = function (n) {
    if (n === void 0) { n = 20; }
    for (var i = 1; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
};
exports.fizzBuzz = fizzBuzz;
(0, exports.fizzBuzz)();
