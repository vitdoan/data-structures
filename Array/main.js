class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index];
	}

	push(item){
		this.data[this.length] = item;
		this.length++;
	}

	pop(){
		const lastIem = this.data[this.length-1];
		delete this.data[this.length-1];
		this.length--;
		return lastIem;
	}

	delete(index){
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index){
		for (let i = 0; i < this.length-1; i++){
			this.data[i] = this.data[i+1];
		}
		delete this.data[--this.length];
 	}
}

const newArray = new MyArray();
newArray.push('Apple');
newArray.push('Orange');
newArray.push('Peach');
newArray.push('Mango');
console.log(newArray.delete(0));
console.log(newArray);