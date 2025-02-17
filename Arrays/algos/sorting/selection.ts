/**
 * Selection Sort
 * @param {Array} arr Array to sort
 * @param {"ASC" | "DESC"} type Sort type "ASC" for  ascending, "DESC" for descending sort

 */
export const selectionSortArr = (arr: Array<number>, type: string = "ASC") => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (type === "ASC") {
        if (arr[min_idx] > arr[j]) min_idx = j;
      } else {
        if (arr[min_idx] < arr[j]) min_idx = j;
      }
    }
    if (min_idx !== i) {
      [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]]
    }
  }
}
