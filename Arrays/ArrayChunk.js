let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 2;
let tempArr = [];
let count = 0;
for (let i = 0; i < (arr.length - (arr.length % n)); i++) {
  if (i % n === 0) {
    if (i !== 0) {
      count++;
    }
    tempArr[count] = [];
  }

  tempArr[count].push(arr[i])
}

console.log(tempArr)