// Armstrong number check.

// ------------->   153 = 1^3+5^3+3^3 = 153

const Num = 370;
let N = Num;
let sum = 0;


while(N !=0){
    let digit = N%10;
    sum = sum + digit*digit*digit;
    N= Math.floor(N/10);
}

if(Num===sum){
    console.log(`${Num} is Armstrong number.`);
}else{
    console.log(`${Num} is not Armstrong number.`);
}
