//Find the average of elements in an array.






let arr =[3,5,45,5,67,78];

let sum = 0;
for(let i =0; i<arr.length; i++){
    sum += arr[i];
}

let avg = sum/arr.length;


console.log(`Average of the array is: ${avg}`);