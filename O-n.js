const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

const searchGroceries = (item) => {
  for (let i = 0; i < item.length; i++) {
    if (groceries[i] === item) {
      console.log(`${groceries[i]} found`)
    }
  }
  // This is O(n)
}

searchGroceries("eggs");

// dropping constant
const groceries2 = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

const searchGroceries2 = (item) => {
  for (let i = 0; i < item.length; i++) {
    if (groceries2[i] === item) {
      console.log(`${groceries2[i]} found`)
    }
  }

  for (let j = 0; j < item.length; j++) {
    if (groceries2[j] === item) {
      console.log(`${groceries2[j]} found 2`)
    }
  }
  // this is O(2n) as it implies O(n), which means dropping the constant, i.e. 2 in this case
}

searchGroceries2("eggs");