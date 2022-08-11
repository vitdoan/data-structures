class HashTable{
	constructor(size){
		this.data = new Array(size);
		//['grapes', 100000] as our bucket
	}

	_hash(key){
		let hash = 0;
		for(let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) 
			% this.data.length;
		}
		return hash;
	}
	set(key, value){
		let address = this._hash(key);
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key,value]);
	}
	get(key){
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if(currentBucket){
			for(let i = 0; i<currentBucket.length; ++i){
				if(currentBucket[i][0] === key){
					return currentBucket[i][0];
				}
			}
		}
		return currentBucket;
	}
	key(){
		if(!this.data.length){
			return undefined;
		}
		let result = [];
		for(let i = 0; i < this.data.length; ++i){
			if(this.data[i]){
				for(let j = 0; j < this.data[i].length; ++j){
					result.push(this.data[i][j][0]);
				}
			}
		}
		return result;
	}
}

const myHashTable = new HashTable(10);

myHashTable.set('grapes',10000);
myHashTable.set('oranges',2000);
myHashTable.set('apples',5000);
myHashTable.set('peaches',5000);
myHashTable.set('lemon',5000);

// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('grapess'));
console.log(myHashTable);
console.log(myHashTable.key());
