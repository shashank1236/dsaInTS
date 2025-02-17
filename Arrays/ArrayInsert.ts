const ArrayInsert = (position: number, element: string | number, arr: Array<number | string> = [10, 54, 23, 64, 53]) => {
  // position validation
  if (position >= arr.length + 1) {
    return "Position cannot be greater than array length"
  }
  // configuring last element
  if (arr.length === position) {
    arr[position] = element
    return arr
  }

  let i = arr.length - 1;
  while (i >= 0) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i === position) arr[i] = element
    }
    i--;
  }
  return arr;
}

console.log(ArrayInsert(0, "shashank"))