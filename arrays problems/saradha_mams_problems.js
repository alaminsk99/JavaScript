//Calculate the sum of all elements in an array.




let arr =[3,1,3];



let sum = 0;



for(let i =0; i< arr.length;i++){
    
    sum += arr[i];
}


let sums = arr.reduce((acc, curr)=> acc+curr,0);


console.log(`Sum of the array elements: ${sums}`);