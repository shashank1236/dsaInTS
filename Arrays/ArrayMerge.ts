const ArrayMerge = (arr1: Array<string | number>, arr2: Array<string | number>) => {
  let arr3 = []
  for (let a1 = arr1.length, a2 = arr2.length; a1 > 0 || a2 > 0; a1--, a2--) {
    if (arr1[a1]) arr3.push
  }
  return arr3;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
console.log(ArrayMerge(arr1, arr2))
