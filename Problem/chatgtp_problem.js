//Print all prime numbers between 1 and N.

const N = 10;

if(N===1){
    return;
}else{
    for(let i=2; i<=N; i++){
        let isPrime = true;

        for(let j=2; j<= Math.sqrt(i); j++){
            if(i%j===0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}