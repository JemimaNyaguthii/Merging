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

// Given an array of unsorted numbers,return a sorted array
// let num = [45,12,6,89,2,5]
function num(numbs){
    if(numbs.length <=1){
        return numbs;
    }
    let middle=Math.floor(numbs.length/2);
    let left =numbs.slice(0,middle);
    let right=numbs.slice(middle);
    return numArray(numb(left),numb(right));
}
function numArray(left,right){
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
let num=[2,13,5,4];
console.log(num(numbs));

