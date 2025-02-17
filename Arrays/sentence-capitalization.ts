// function customSplit(str, symbol) {
//   let splitArr = [];
//   let currentPart = ""; // To store the current segment

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


export const capitalizeSentence = (str: string) => {
  let splittedStr = str.split(" ");
  let temp: Array<string> = [];
  for (let i = 0; i < splittedStr.length; i++) {
    temp.push(splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1));
  }
  return temp.join(" ")
}