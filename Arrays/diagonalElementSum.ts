export const diagonalElementSum = (arr: Array<Array<number>>) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i]
  }
  return sum
}
