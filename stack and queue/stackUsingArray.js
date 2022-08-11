class Stack {
	constructor(){
		this.stack = [];
	}
	peek(){
		if(this.stack.length === 0){
			return null;
		}
		return this.stack[0];
	}
	push(value){
		this.stack.unshift(value);
	}
	pop(){
		this.stack.pop();
	}
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.peek());