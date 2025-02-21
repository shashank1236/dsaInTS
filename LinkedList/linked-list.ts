import { LLNode } from "./node";

export class LinkedList {
  head: LLNode;
  tail: LLNode;
  length: number;

  /**
   * Creates an instance of LinkedList.
   * @param value The value to be added to the linked list.
   */
  constructor(value: number | string) {
    const newNode = new LLNode(value);
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  /**
   * Add a new node to the end of the linked list.
   * @param value The value to be added to the linked list.
   * @returns The updated linked list.
   */
  push(value: number | string): LinkedList {
    const newNode = new LLNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * Remove the first node in the linked list.
   * @returns The item removed from the linked list.
   */
  pop(): LLNode {
    // if we have zero elements in node
    if (!this.head) return undefined
    let temp = this.head;
    let pre = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    // if we have no elements remaing after removing the node
    if (this.length === 0) {
      this.head = null, this.tail = null
    }
    // returning item which is removed
    return temp
  }

  /**
   * Adds a new node to the beginning of the linked list.
   * @param value The new value to be added to the linked list.
   * @returns The updated linked list.
   */
  unshift(value: string | number): LinkedList {
    const newNode = new LLNode(value);
    // if we have zero elements in node
    if (!this.head) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
    this.length++
    return this;
  }

  /**
   * Removes the first node in the linked list.
   * 
   * @returns The item removed from the linked list.
   */
  shift(): LLNode {
    if (!this.head) return undefined
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--
    if (this.length === 0) this.tail = null
    return temp
  }

  /**
   * Returns the node at the specified index in the linked list.
   *
   * @param index The index of the node to be returned.
   * @returns The node at the specified index in the linked list.
   */
  get(index: number): LLNode | string {
    if (index < 0 || index >= this.length) return "index is greater than length of linked list"
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next
      i++
    }
    return current
  }

  /**
   * Sets the value of the node at the specified index in the linked list.
   * @param index The index of the node to be updated.
   * @param value The new value of the node.
   * @returns The linked list with the updated node.
   */
  set(index: number, value: string) {
    let current = this.get(index)
    if (current && typeof current === "object") {
      current.value = value
      return true
    }
    return
  }

  /**
   * Inserts new node with value at the specified index in the linked list.
   * @param index The index of the node to be inserted.
   * @param value The value of the node.
   * @returns the updated linked list
   */
  insert(index: number, value: string | number) {
    if (index === 0) return this.unshift(value)

    if (index === this.length) return this.push(value)

    if (index < 0 || index >= this.length) return "index is greater than length of linked list"

    let current = this.get(index - 1)
    if (current && typeof current === "object") {
      let newNode = new LLNode(value);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  /**
   * Removes the node at the specified index in the linked list.
   * @param index The index of the node to be removed.
   * @returns the updated linked list
   */
  remove(index: number): LLNode | string {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return "index is greater than length of linked list";
    let current = this.get(index - 1);
    if (current && typeof current === "object") {
      let nodeToRemove = current.next;
      current.next = nodeToRemove.next;
      nodeToRemove.next = null
      this.length--;
      return nodeToRemove
    }
  }

  /**
   * Reverses the linked list.
   * @returns the updated linked list
   */
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    let i = 0;
    while (i < this.length) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
      i++
    }
    return this
  }
}

let ll = new LinkedList(7);
// ll.push(4)
ll.push(23)
ll.push(45)
// ll.insert(1, 45)
// ll.insert(1, 33)
// ll.set(3, "shashank")
// console.log(ll.remove(1))
console.log(ll)
console.log(ll.reverse())