// Given a number check if it is prime or not

//return boolean

function isPrime(n) {
if(n < 2){
    return false
} else 
    for(i=2;i<n;i++) {
        if(n%i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(19))