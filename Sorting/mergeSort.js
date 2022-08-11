const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let half = Math.ceil(array.length/2);
  let left = array.slice(0,half);
  let right = array.slice(half);
  console.log("Original Left: ");
  console.log(left);
  console.log("Original Right: ");
  console.log(right);
  console.log("")
  console.log("Run Merge: ")
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  console.log("LEFT ARRAY: ");
  console.log(left);
  console.log("RIGHT ARRAY: ");
  console.log(right);
  let arr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      arr.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      arr.push(right[rightIndex]);
      rightIndex++;
    }    
  }
  while(leftIndex < left.length){
    arr.push(left[leftIndex]);
    leftIndex++;
  }
  while(rightIndex < right.length){
    arr.push(right[rightIndex]);
    rightIndex++;
  }  
  console.log("ARRAY AFTER WHILE LOOP:")
  console.log(arr);
  console.log("--------------------------------------------------");
  return arr;
}


const answer = mergeSort(numbers);
console.log("ANSWER: ")
console.log(answer);
// let half = Math.ceil(numbers.length/2);
// console.log(half);
// console.log(numbers.slice(0,half))
// console.log(numbers.slice(half))