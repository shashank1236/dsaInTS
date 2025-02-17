const ArrayReverse = (arr: Array<string | number>) => {
  for (let r = arr.length - 1, l = 0; l < r; r--, l++) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(ArrayReverse(arr))
