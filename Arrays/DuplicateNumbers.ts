export const uniqueArray = (array: Array<number>) => {
  let uniqueArr: Array<number> = [];
  for (let i = 0; i < array.length; i++) {
    let duplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (uniqueArr[j] === array[i]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate && typeof array[i] === "number") {
      uniqueArr.push(array[i])
    }
  }
  return uniqueArr;
}
