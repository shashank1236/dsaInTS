export const findTopTwoScores = (arr: Array<number>) => {
  let top = arr[0]
  let second = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (top < arr[i]) {
      second = top
      top = arr[i]
    } else if (arr[i] > second && arr[i] < top) {
      second = arr[i]
    }
  }
  return [top, second]
}
export const findLowestTwoScores = (arr: Array<number>) => {
  let top = arr[0]
  let second = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (top > arr[i]) {
      second = top
      top = arr[i]
    } else if (arr[i] < second && arr[i] > top) {
      second = arr[i]
    }
  }
  return [top, second]
}
