// function x(arr) {
//     var NTI;
//     var index = 1;
//     do {
//         for (let i = index + 1 ; i <= index+1 ; i++) {
//             if (arr[index] > arr[i]) {
//                 NTI = arr[i];
//                 arr[i] = arr[index];
//                 for (let j = index-1; j >= 0; j--) {
//                     if(arr[j]>NTI) {
//                         arr[j+1] = arr[j]
//                     } else if (NTI && arr[j]<NTI) {
//                         arr[j+1] = NTI;
//                         NTI = null;
//                     }
//                 }
//             }
//         }
//         index++;
//     } while (index < arr.length-1) 
//    return arr;
    
// }

function x(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i-1;
        let NTI = arr[i];
        while ( j>= 0 && arr[j] > NTI) {
            arr[j+1] = arr[j]
            j= j-1;
        }
        arr[j+1] = NTI
    }

    return arr;
}

arr = [8,20,-2,4,-6]

console.log(x(arr));