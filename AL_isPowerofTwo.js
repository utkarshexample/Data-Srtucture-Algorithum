// Given a number check if it is power of two

//Return Boolean

function isPowerofTwo(n) {
    for(i=0;i<=n/2;i++) {
        if(n === Math.pow(2,i)) {
            return true;
        }
    } 
    return false
}

console.log(isPowerofTwo(254))