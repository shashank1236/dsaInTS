class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Adds item to the array
   * @param {any} item 
   * @return length of array after adding
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * Remove last item from array
   * @return Last item which is removed
   */
  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * Get item
   * @param {number} index 
   * @return Item at input indexed
   */
  get(index) {
    return this.data[index]
  }

  /**
   * Search in array
   * @param {string} searchString 
   * @return Index of that string
   */
  search(searchString) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === searchString) {
        return i;
      }
    }
    return "Searched string not found";
  }

  /**
   * Delete item at provided index
   * @param {number} index 
   * @return Item at provided indexed
   */
  deleteByIndex(index) {
    let item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
   * Removes the first element from an array
   * @return Return first element
   */
  shift() {
    let item = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item
  }

  /**
   * Inserts new elements at the start of an array, and returns the new length of the array.
   * @param {Array} item 
   * @return {number} Length of new array
   */
  unshift(...item) {
    const newLength = this.length + item.length;
    let copy = [...Object.values(this.data)]
    for (let i = 0; i < newLength; i++) {
      this.data[i] = item[i] || copy[i - item.length];
    }
    this.length = newLength;
    return newLength;
  }
}


const myNewArr = new myArray();
myNewArr.push("Shashank");
myNewArr.push("Nikhil");
myNewArr.push("Mahi");
// console.log(myNewArr, "myArr")
// console.log(myNewArr.pop(), "pop");
// console.log(myNewArr, "myNewArr")
// console.log(myNewArr.get(1))
// console.log(myNewArr.search("Nikhil"))
// console.log(myNewArr.deleteByIndex(1))
// console.log(myNewArr.shift())
// console.log(myNewArr.unshift("hello", "Hii", "Hii2"))
// console.log(myNewArr)
