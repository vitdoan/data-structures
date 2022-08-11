class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		let newNode = new Node(value);
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		newNode.prev = null;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const array = [];
		let curNode = this.head;
		while (curNode !== null) {
			array.push(curNode.value);
			curNode = curNode.next;
		}
		console.log(array);
	}

	insert(index, value) {
		if (index < 0) {
			return this.printList();
		}
		if (index === 0) {
			this.prepend(value);
			return this.printList();
		}
		if (index >= this.length) {
			this.append(value);
			return this.printList();
		}
		let newNode = new Node(value);
		let prevNode = this.traverseToIndex(index - 1);
		let afterNode = prevNode.next;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		prevNode.next = newNode;
		newNode.prev = prevNode;
		this.length++;
		return this.printList();
	}

	remove(index) {
		if (this.length <= 0 || index >= this.length) {
			return this.printList();
		}
		if (index === 0) {
			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			return this.printList();
		}
		let prevNode = this.traverseToIndex(index - 1);
		if (index === this.length - 1) {
			this.tail = prevNode;
			prevNode.next = null;
		} else {
			let nextNode = prevNode.next.next;
			nextNode.prev = prevNode;
			prevNode.next = nextNode;
		}
		this.length--;
		return this.printList();
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

const myList = new DoublyLinkedList(10);
myList.append(20);
myList.append(25);
myList.prepend(5);
// myList.printList();
myList.insert(2, 15);
// myList.remove(4);
