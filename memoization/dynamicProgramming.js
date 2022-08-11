function fibonacci(){
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        }
        if(n<2){
            return n;
        }
        cache[n] = fib(n-2) + fib(n-1);
        return cache[n];
    }
}

let num = fibonacci();
console.log(num(7));