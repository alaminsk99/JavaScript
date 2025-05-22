//  Number Triangle


/*
1
12
123
1234
12345
 


 */


let number = "";

for(let i =1; i<=5; i++){
    for(let j =1; j<= i; j++){
        number = number+ `${j}`
    }
    number += "\n";
}

console.log(`${number}`)