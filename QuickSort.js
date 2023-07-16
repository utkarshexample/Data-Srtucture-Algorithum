function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
        var pivot = arr[arr.length-1];
        var leftArray =[]
        var rightArray = [];
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i] < pivot) {
                    leftArray.push(arr[i]); 
                    
        } else {
                rightArray.push(arr[i]);
        }
              
    }
  return[...quickSort(leftArray),pivot,...quickSort(rightArray)] //Important Spread operator
}

var arr = [-6,20,8,-2,4]
console.log(quickSort(arr));