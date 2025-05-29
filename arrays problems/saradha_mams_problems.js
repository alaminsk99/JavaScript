//Find the maximum and minimum element in an array.




let arr =[3,1,3,5,6,9];


let max = arr[0]
let min = arr[0]



for(let i =0; i< arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }
}


console.log(`Maximum: ${max} and Minimum: ${min} `);