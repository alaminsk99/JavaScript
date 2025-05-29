//Search for an element in an array (linear search).






let arr =[3,5,45,5,67,78,34,4];

let target = 5;

let isFound = false;

for(let i =0; i< arr.length; i++){
    if(arr[i]===target){
        console.log(`Element ${target} found at index ${i}`)
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log(`Element ${target} not found in the array`);
}

