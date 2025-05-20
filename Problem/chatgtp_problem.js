// Perfect number check.

// ------------->   6 = 1+2+3 = 6

const Num = 496;
let N = Num;
let sum = 0;

for(let i =1; i<N; i++){
    if(N%i===0){
        sum = sum + i;
    }
}

if(Num===sum){
    console.log(`${Num} is Perfect number.`);
}else{
    console.log(`${Num} is not Perfect number.`);
}
