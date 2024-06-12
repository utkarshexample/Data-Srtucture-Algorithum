// Find first n number of fibonacci sereies

//return aray
function fibbo(n) {
    let series = [0,1];
    let next;
    for(i=2; i < n; i++){
            next = series[i-2] + series[i-1]
            series.push(next);
        }
        
    return series;
}

console.log(fibbo(3));