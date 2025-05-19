/// Fibonacci series up to N terms.


/* First 2 terms are always: 0 1

From the 3rd term, each term = sum of previous 2

Update the last two numbers every time

| i  | a  | b  | Output |
| -- | -- | -- | ------ |
| 1  | 0  | 1  | 0      |
| 2  | 1  | 1  | 1      |
| 3  | 1  | 2  | 1      |
| 4  | 2  | 3  | 2      |
| 5  | 3  | 5  | 3      |
| 6  | 5  | 8  | 5      |
| 7  | 8  | 13 | 8      |
| 8  | 13 | 21 | 13     |
| 9  | 21 | 34 | 21     |
| 10 | 34 | 55 | 34     |


*/

const N = 10;

let a = 0, b = 1;

console.log("Fibonacci Series up to " + N + " terms:");


for(let i =1; i<=N; i++){
    console.log(a);
    let next = a+b;
    a=b;
    b=next;
}

