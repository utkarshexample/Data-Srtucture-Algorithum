// Forr an arrya return the index of the array

// Return should be index of type int

function returnIndex(arr,n) {
    for(i=0;i<=arr.length;i++) {
        if(arr[i] === n) {
            return i;
        } else {
            return -1;
        }
    }
}

//console.log(returnIndex([-5,2,10,4,6],20));

// GPT QUesiton array=[4,7,2,5,8,9,2,3,6,2] & you want to find the second occurrence of a specific number, say 2.

function checkSecond(arr,t) {
    var br = 0;
     for (a of arr) {
        if(a === t ) {
            br+=1;
            if(br == 2 ) {
                return a;
            }
        }
     }
     return 'No Dublicate'; 
}

// console.log(checkSecond([4,7,2,5,8,9,2,3,6,2],2))


// array=["apple","banana","cherry","grape","orange","strawberry"], peach

function checkLexicograph(arr, t){
    var target = t.charCodeAt(0);
    newArr=[]
    for(a of arr) {
        newArr.push(a.charCodeAt(0));
    }
    newArr.forEach(element => {
        
    });

    console.log(newArr,target);
}

checkLexicograph(["apple","banana","cherry","grape","orange","strawberry"], "peach")
