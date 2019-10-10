class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(value: number): void {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Linkedlist is empty!!');
    }
    let iterator = 0;
    let node: Node | null = this.head;
    while (iterator !== index && node) {
      iterator = iterator + 1;
      node = node.next;
    }
    if (!node) {
      throw new Error('Index out of bound!!');
    }
    return node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('LinkedList is empty!!');
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    return leftNode.value > rightNode.value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('linked list is empty!!');
    }
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    let leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }
  print(): void {
    let node = this.head;
    if (!node) {
      return;
    }

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
