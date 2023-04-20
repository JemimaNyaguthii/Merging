// Merge sort the numbers are first divided by 2 to find the middle.Then that is the right and the left side.
// The left side is sorted first then the right side and finally the array is sorted.

function numbers(numb){
    if(numb.length <=1){
        return numb;
    }
    let middle=Math.floor(numb.length/2);
    let left =numb.slice(0,middle);
    let right=numb.slice(middle);
    return sortedArray(numbers (left),numbers (right));
}
function sortedArray(left,right){
     empty =[];
    while (left.length &&right.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
        }
        else{
            empty.push(right.shift())
        }
    }
    return[...empty,...left,...right];

    
}
let numb=[2,13,5,4];
console.log(numbers(numb));

// A binary search algorithm finds the position of a
//  specified input value within an array sorted by key value.
// let num=[1,2,3,4,5,6,7,8,9]
// let target=7
function binary(num,target){
    let left =0;
    let right =num.length-1;
    while (left<=right){ 
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target){
            return middle;
        }
        else if (num[middle]<target){
            left=middle+1;
        }
        else{
            right=middle-1;
        }
    }
    return null
}
let num=[1,2,3,4,5,6,7,8,9]
let target=7;
console.log(binary(num,target))

