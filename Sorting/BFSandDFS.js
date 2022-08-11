class Node {
    constructor(value){
      this.left = null;
      this.right = null;
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
      return top.value;
    }
    isEmpty(){
      return this.length===0;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return null
    }
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
              this.root = currentNode.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
    //     9
    //  4     20
    //1  6  15  170
  
    inOrder() {
      let visited = [],
          current = this.root;
    
      let traverse = node => {
        if (node.left) traverse(node.left);
        visited.push(node.value);
        if (node.right) traverse(node.right);
      };
    
      traverse(current);
      return visited;
    }
  
    BFS() {
      let currentNode = this.root;
      let list = [];
      let queue = new Queue();
      queue.enqueue(currentNode);
  
      while(queue.length > 0){
        currentNode = queue.dequeue();
        list.push(currentNode.value);
        if(currentNode.left){
          queue.enqueue(currentNode.left);
        }
        if(currentNode.right){
          queue.enqueue(currentNode.right);
        }
      }
      return list;
    }
  
    BFSrecursive() {
      let list = [];
      let queue = new Queue();
      queue.enqueue(this.root);
  
      function helper (){
        if(queue.length === 0){
          return list;
        }
        let currentNode = queue.dequeue();
        list.push(currentNode.value);
        if(currentNode.left){
          queue.enqueue(currentNode.left);
        }
        if(currentNode.right){
          queue.enqueue(currentNode.right);
        }
        return helper();
      }
      return helper();
    }
  
    DFS_inOrder(){
      return this.traverseInOrder(this.root, []);
    }
  
    DFS_preOrder(){
      return this.traversePreOrder(this.root, []);
    }
  
    DFS_postOrder(){
      return this.traversePostOrder(this.root, []);
    }
  
    traverseInOrder(curNode, list){
      if(curNode.left){
        this.traverseInOrder(curNode.left, list);
      }
      list.push(curNode.value);
      if(curNode.right){
        this.traverseInOrder(curNode.right, list);
      }
      return list;
    }
  
    traversePreOrder(curNode, list){
      list.push(curNode.value);
      if(curNode.left){
        this.traverseInOrder(curNode.left, list);
      }
      if(curNode.right){
        this.traverseInOrder(curNode.right, list);
      }
      return list;
    }
  
    traversePostOrder(curNode, list){
      if(curNode.left){
        this.traverseInOrder(curNode.left, list);
      }
      if(curNode.right){
        this.traverseInOrder(curNode.right, list);
      }
      list.push(curNode.value);
      return list;
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  tree.remove(170)
  // let printTree = JSON.stringify(traverse(tree.root));
  // console.log(tree.inOrder());
  console.log(tree.BFSrecursive());
  console.log("Inorder Traversal: ");
  console.log(tree.DFS_inOrder());
  console.log("Preorder Traversal: ");
  console.log(tree.DFS_preOrder());
  console.log("Postorder Traversal: ");
  console.log(tree.DFS_postOrder());
  // tree.BFS()
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  let myQueue = new Queue();
  myQueue.enqueue("Joy");
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.enqueue("Sam");
  // console.log(myQueue.dequeue());
  // console.log(myQueue);