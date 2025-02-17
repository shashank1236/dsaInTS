"use strict";
// function customSplit(str, symbol) {
//   let splitArr = [];
//   let currentPart = ""; // To store the current segment
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeSentence = void 0;
//   for (let i = 0; i < str.length; i++) {
//     // Check if the next segment matches the symbol
//     if (str.substring(i, i + symbol.length) === symbol) {
//       splitArr.push(currentPart); // Push the current part to splitArr
//       currentPart = ""; // Reset for the next segment
//       i += symbol.length - 1; // Skip the symbol length
//     } else {
//       currentPart += str[i]; // Add the current character to the current part
//     }
//   }
//   // Push the last part (if any)
//   if (currentPart) {
//     splitArr.push(currentPart);
//   }
//   return splitArr;
// }
var capitalizeSentence = function (str) {
    var splittedStr = str.split(" ");
    var temp = [];
    for (var i = 0; i < splittedStr.length; i++) {
        temp.push(splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1));
    }
    return temp.join(" ");
};
exports.capitalizeSentence = capitalizeSentence;
