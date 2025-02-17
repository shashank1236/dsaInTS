/**
 * Algorithm
 * 1) INPUT intVal
 * 2) Initialize inputValStr = "" + intVal
 * 3) Initialize reversedInt = ""
 * 4) for i = intValStr.length - 1 to 0 do:
 *      a) reversedInt += inputValStr[i]
 * 5) print parseInt(reversedInt)
 */

const intVal = 1234;
const intValStr = "" + intVal;
let reversedInt = "";
for (let i = intValStr.length - 1; i >= 0; i--) {
  reversedInt += intValStr[i];
}
reversedInt = parseInt(reversedInt)
console.log(reversedInt);
console.log(typeof reversedInt);

// let arr = [1, 2, 3, 4, 5];
// let rotatedArr = [];
// rotatedArr.push(arr.length);
// for (let i = 1; i <= arr.length - 1; i++) {
//   rotatedArr.push(arr[i - 1])
// }
// console.log(rotatedArr)