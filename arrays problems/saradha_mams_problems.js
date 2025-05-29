//Reverse an array.






let arr =[3,1,5, 4,5];

/// For the reverse array
//arr.reverse()


/// Using the swap method

for(let i =0; i< Math.floor(arr.length/2); i++){
    let temp = arr[i];
    arr[i]= arr[arr.length -1 -i];
    console.log(temp)
    arr[arr.length -1 - i] = temp;
}


console.log(arr);