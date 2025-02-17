import { LLNode } from "./node";

class LinkedList {
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
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
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
  unshift(value: string | number) {
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
   * 
   */
  shift() {
    if (!this.head) return undefined

  }
}

let ll = new LinkedList(7);
// ll.push(4)
// ll.unshift("first")
ll.pop()
ll.shift()
console.log(ll)