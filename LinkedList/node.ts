export class LLNode {
  value: number | string;
  next: any;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}