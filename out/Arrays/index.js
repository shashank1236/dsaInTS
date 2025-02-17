"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTopTwoScores = exports.findLowestTwoScores = exports.capitalizeSentence = exports.removeElement = exports.middleArr = exports.fizzBuzz = exports.uniqueArray = exports.diagonalElementSum = void 0;
__exportStar(require("./algos"), exports);
var diagonalElementSum_1 = require("./diagonalElementSum");
Object.defineProperty(exports, "diagonalElementSum", { enumerable: true, get: function () { return diagonalElementSum_1.diagonalElementSum; } });
var DuplicateNumbers_1 = require("./DuplicateNumbers");
Object.defineProperty(exports, "uniqueArray", { enumerable: true, get: function () { return DuplicateNumbers_1.uniqueArray; } });
var FizzBuzz_1 = require("./FizzBuzz");
Object.defineProperty(exports, "fizzBuzz", { enumerable: true, get: function () { return FizzBuzz_1.fizzBuzz; } });
var middleFunction_1 = require("./middleFunction");
Object.defineProperty(exports, "middleArr", { enumerable: true, get: function () { return middleFunction_1.middleArr; } });
var removeElementWithUsingExtraArrVariable_1 = require("./removeElementWithUsingExtraArrVariable");
Object.defineProperty(exports, "removeElement", { enumerable: true, get: function () { return removeElementWithUsingExtraArrVariable_1.removeElement; } });
var sentence_capitalization_1 = require("./sentence-capitalization");
Object.defineProperty(exports, "capitalizeSentence", { enumerable: true, get: function () { return sentence_capitalization_1.capitalizeSentence; } });
var FindTopLowestTwoScores_1 = require("./FindTopLowestTwoScores");
Object.defineProperty(exports, "findLowestTwoScores", { enumerable: true, get: function () { return FindTopLowestTwoScores_1.findLowestTwoScores; } });
Object.defineProperty(exports, "findTopTwoScores", { enumerable: true, get: function () { return FindTopLowestTwoScores_1.findTopTwoScores; } });
