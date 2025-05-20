//Sum of digits of a number.


// ----> 136= 1+3+6=10

const num = 73264356323;
let N = num;
let sum =0;

while(N !=0){
    let digit = N%10;
    sum = sum+digit;
    N = Math.floor(N/10);                   
}

console.log(`The Sum of digit of ${num} is ${sum}`);