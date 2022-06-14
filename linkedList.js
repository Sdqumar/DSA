class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  // Get at Index
  getAt(index) {
    let current = this.head;
    let count = 0;
    if (index > this.size) {
      return;
    }
    if (index == 0) {
      console.log(current.value);
      return;
    }

    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      count++;
      current = current.next;
    }
  }
  // Remove at index

  //Clear list

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insertFirst(12);
list.insertFirst(11);
list.insertFirst(10);
list.insertLast(20);
list.getAt(0);
// list.printListData();
