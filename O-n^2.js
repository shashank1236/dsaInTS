const printPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`Pair: ${array[i]} : ${array[j]}`);
    }
  }
}

const numberArr = [1, 2, 3, 4, 5];
printPairs(numberArr);