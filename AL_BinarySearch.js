// Forr an arrya return the index of the array using BINARY SEARCH

// Return should be index of type int

function returnIndex(arr,target) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if (arr[middleIndex] === target) {
            return middleIndex;
        }
        if(arr[middleIndex] > target) {
            rightIndex = middleIndex-1;
        } else {
            leftIndex = middleIndex+1
        }
    }
    return -1;
}

//console.log(returnIndex([-5,1,2,3,4,5,6,7,8,9,10],-5));

// Rotated Array
//Input: [4,5,6,7,0,1,2], target = 0
//Output: 4

function findMin(arr,target) {
    let prevElement = arr[0]
    let pivotIndex;
    for(i=1; i<arr.length;i++) {
        if(arr[i] < prevElement) {
            pivotIndex = i;
        }
        prevElement = arr[i]
    }
    var leftArray = arr.slice(0,pivotIndex);
    var rightArray = arr.slice(pivotIndex, arr.length) 
    const leftArrayIndex = returnIndex(leftArray,target)
    const rightArrayIndex = returnIndex(rightArray,target)
    //console.log(leftArrayIndex,rightArrayIndex)

    if(leftArrayIndex == -1 && rightArrayIndex == -1 ) {
        return -1;
    } if (leftArrayIndex != -1) {
        return leftArrayIndex;
    } if (rightArrayIndex != -1 ) {
        return leftArray.length + rightArrayIndex ;
    } 
}
// console.log(findMin([4,5,6,7,0,1,2],4));
// console.log(findMin([4,5,6,7,0,1,2],5));
// console.log(findMin([4,5,6,7,0,1,2],6));
// console.log(findMin([4,5,6,7,0,1,2],7));
// console.log(findMin([4,5,6,7,0,1,2],0));
// console.log(findMin([4,5,6,7,0,1,2],1));
// console.log(findMin([4,5,6,7,0,1,2],2));
// console.log(findMin([4,5,6,7,0,1,2],33));


// Binary Search is rotated array Question 2 

function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Check if left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // Element not found
}

//console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4


//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. 
//The overall runtime complexity should be O(log(m+n)).
// You may assume nums1 and nums2 cannot be both empty.

// nums1 = [1, 3]
// nums2 = [2]
// Output: 2.0

function binarySearch(arr1,arr2) {
    let left = 0
    let right = arr.length -1;
    let arr
    let partitionPoint;
    while(left<= right) {
        let mid = Math.floor((left+right)/2);
        
        if(arr1.length > arr2.length) {
            arr = arr2   
        } else {
            arr = arr1
        }
        if(arr.length % 2 === 0 ) {
            partitionPoint = (arr[mid]+arr[mid+1])/2
        } else {
            partitionPoint = arr[mid]
        }
    }
}
    let nums1 = [1, 2]
    let nums2 = [3,4]
   binarySearch(nums1,nums2)
   
