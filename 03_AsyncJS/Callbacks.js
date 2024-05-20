function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sum(a, b, fn){
    return fn(a)+fn(b)
}

console.log(sum(2,2,cube));
// Callbacks are supposed to be async functions but there exists a better way to handle async functions