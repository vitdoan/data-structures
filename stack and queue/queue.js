class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek(){
		return this.first;
	}
	enqueue(value){
		let newNode = new Node(value);
		if(this.isEmpty()){
			this.first = newNode;
			this.last = newNode;
		}
		else{
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	dequeue(){
		if(this.isEmpty()){
			return null;
		}
		if(this.first === this.last){
			this.last = null;
		}
		const top = this.first;
		this.first = this.first.next;
		this.length--;
		return top;
	}
	isEmpty(){
		return this.length===0;
	}
}

let myQueue = new Queue;
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Sam");
console.log(myQueue);
let some = myQueue.dequeue();
console.log(some);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);