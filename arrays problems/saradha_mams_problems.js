//Count even and odd numbers in an array.






let arr =[3,5,45,5,67,78,34,4];

let oddCount = 0;
let evenCount =0;
for(let i =0; i<arr.length; i++){
   if(arr[i]%2===0){
    evenCount++;
    
   }else{
    oddCount++
   }
}




console.log(`Even number is: ${evenCount} and Odd Count is : ${oddCount}`);