// Given N find the factorial of the number 


// return int 

function factorial(n) {
    let total = 1;
    for(i=1;i<=n;i++) {
        total = total*i;
    }
    return total
}

console.log(factorial(5))