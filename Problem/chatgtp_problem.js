//Check if a number is a strong number.
/*
A strong number is a number whose sum of the factorials of its digits equals the original number. 
For example, 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145. 
To check if a number is strong, you need to calculate the factorial of each digit,
sum them up, and compare the result with the original number. 
*/


const num = 145;
let n = num;
let sum =0;

function factorial(num){
    if (num === 0 || num === 1) {
        return 1;
    }
    return num*factorial(num-1);
}


while(n !=0){
    let digit = n%10;
    sum = sum + factorial(digit);

    n = Math.floor(n/10);
}


if(sum === num ){
    console.log(`${num} is the Strong number.`);
}else{
     console.log(`${num} is not the Strong number.`);
}
