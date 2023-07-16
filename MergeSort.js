function mergeSort(arr) {
    var left = [];
    var right = [];
    var middle = Math.floor(arr.length/2);
    if(arr.length = 1) {
        return arr;  
    }
    for (let i = 0; i < arr.length; i++) {
        if(i < middle) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
   return sort(mergeSort(left),mergeSort(right));
}

function sort(left,right) {
    var temp = [];
    if (left.length == 0) {
           temp.push(...right);
       } else  {
         temp.push(...left);  
       }
    
    for (let i = 0; i <= left.length || i<= right.length ; i++) {
        if (left[0]<right[0]) {
            temp.push(left[0]);
            left.pop(left[0]);
           sort(left,right);

        } else {
            temp.push(right[0])
             temp.push(left[0]);
            sort(left,right);
           
        } 
    }
  return temp;      
}
var arr = [-6,20,8,-2,4]
console.log(mergeSort(arr))