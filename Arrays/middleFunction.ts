export const middleArr = (arr: Array<number>) => {
  let temp: Array<number> = []
  for (let i = 1; i < arr.length - 1; i++) {
    temp.push(arr[i])
  }
  return temp;
}
