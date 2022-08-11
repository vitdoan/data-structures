class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value){
		let newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value){
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList(){
		const array = []
		let curNode = this.head;
		while(curNode !== null){
			array.push(curNode.value);
			curNode = curNode.next;
		}
		console.log(array);
	}

	insert(index, value){
		if(index <0){
			return this.printList();
		}
		if(index === 0){
			this.prepend(value);
			return this.printList();
		}
		if(index >= this.length){
			this.append(value);
			return this.printList();
		}
		let newNode = new Node(value);
		let prev = this.traverseToIndex(index-1);
		newNode.next = prev.next;
		prev.next = newNode;
		this.length++;
		return this.printList();
	}

	remove(index){
		if(this.length <= 0 || index >= this.length){
			return this.printList();
		}
		if(index === 0){
			this.head = this.head.next;
			this.length--;
			return this.printList();
		}
		let prev = this.traverseToIndex(index-1);	
		if(index === this.length-1){
			this.tail = prev;
			prev.next = null;
		}	
		else{
			prev.next = prev.next.next;
		}
			this.length--;
		return this.printList();
	}

	traverseToIndex(index){
		let curNode = this.head;
		while(index>0){
			curNode = curNode.next;
			index--;
		}
		return curNode;
	}

	reverse(){
		if(this.length <= 1){
			return this.printList();
		}
		let curNode = this.head;
		this.tail = curNode;
		let prevNode = null;
		while(curNode !== null){
			let nextNode = curNode.next;
			curNode.next = prevNode;
			prevNode = curNode;
			curNode = nextNode;
		}
		this.head = prevNode;
		return this.printList();
	}
}

const myList = new LinkedList(10);
myList.append(20);
myList.prepend(5);
myList.insert(2,15);
myList.insert(5,25);
myList.remove(4);
myList.reverse();







