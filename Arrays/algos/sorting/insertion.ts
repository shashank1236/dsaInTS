/**
 * Insertion Sort
 * @param {Array} arr Array to sort
 * @param {"ASC" | "DESC"} type Sort type "ASC" for  ascending, "DESC" for descending sort

 */
export const insertionSort = (arr: Array<number>, type: string = "ASC") => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    if (type === "ASC") {
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
    } else {
      while (j >= 0 && arr[j] < key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
    }
    arr[j + 1] = key;
  }
}