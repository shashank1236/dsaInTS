const str = "Hello";
let tempStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  tempStr += str[i];
}
console.log(tempStr)