class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(){
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek(){
		return this.top;
	}
	push(value){
		let newNode = new Node(value);
		if(!this.top){
			this.bottom = newNode;
		}
		newNode.next = this.top;
		this.top = newNode;
		this.length++;
		return this;
	}
	pop(){
		if(!this.top){
			return null;
		}
		if(this.top === this.bottom){
			this.bottom = null;
		}
		this.top = this.top.next;
		this.length--;
		return this;
	}
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
// myStack.pop();
// myStack.pop();
console.log(myStack);
console.log(myStack.peek());