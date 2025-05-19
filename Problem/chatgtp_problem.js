//Print all prime numbers between 1 and N.


const N = 51;
let isPrime = true;

if(N===1){
    isPrime = false;
}else{
    for(let i =2; i<=Math.sqrt(N); i++){
        if(N%i===0){
            isPrime = false;
        }
    }
}

if(isPrime){
    console.log(`${N} is a Prime number.`);
}else{
    console.log(`${N} is not a Prime number.`);
}