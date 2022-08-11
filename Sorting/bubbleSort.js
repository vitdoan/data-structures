const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let unsorted = array.length;
    for(let i = 0; i < unsorted; unsorted--){
        for(let j = i; j < unsorted; j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}


bubbleSort(numbers);
console.log(numbers);