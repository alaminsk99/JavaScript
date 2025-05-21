// Convert decimal to binary using loops.





let a = 13;
let num = a;
let binary = '';


while(num>0){
    binary = (num%2)+ binary;
    num = Math.floor(num/2);
}

console.log(`Binary of ${a} is ${binary}`);