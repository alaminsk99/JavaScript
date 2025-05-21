// Find LCM or GCD using loop.


/*
The LCM, or Least Common Multiple, is the smallest number that is a multiple of two or more given numbers.
 It's also known as the Lowest Common Multiple or Least Common Divisor (LCD). 
 Essentially, it's the smallest number that can be divided evenly by all the numbers you're considering. 


How to find the LCM:

1. Listing multiples:
List the multiples of each number until you find a common multiple. The smallest common multiple is the LCM. 

2. Prime factorization:
Break down each number into its prime factors, and then find the LCM by
including the highest power of each prime factor that appears in any of the numbers. 

3. Division method (or "ladder method"):
Divide the numbers by prime numbers, continuing until you reach 1. Multiply the prime divisors to find the LCM. 

Example:
To find the LCM of 12 and 18: 

Prime factorization:
12 = 2 x 2 x 3 = 2² x 3
18 = 2 x 3 x 3 = 2 x 3²

Identify highest powers:
2² (from 12)
3² (from 18)

Multiply: 2² x 3² = 4 x 9 = 36
Therefore, the LCM of 12 and 18 is 36.

<---------------------------------------------------------------------------------------------->

The GCD, or Greatest Common Divisor, is the largest number that divides two or more numbers without leaving a remainder. 
It's also known as the Highest Common Factor (HCF).

Here's how to find the GCD:

Factorization:
 Find the prime factorization of each number.

Identify Common Factors:
Identify the common prime factors that appear in the factorizations of all numbers.

Multiply Common Factors: 
Multiply the common prime factors, each raised to the lowest power it appears in any of the factorizations. 

Example:
Let's find the GCD of 12 and 18: 

Factorization:
12 = 2 x 2 x 3
18 = 2 x 3 x 3

Identify Common Factors: The common prime factors are 2 and 3.
Multiply Common Factors: GCD(12, 18) = 2 x 3 = 6.

Alternative Methods:
Listing Divisors: 
List all divisors of each number and identify the greatest common divisor. 

Euclidean Algorithm: 
Repeatedly divide the larger number by the smaller number and take the remainder until the remainder is 0. 
The last non-zero remainder is the GCD

*/



function gcd(a,b){
    let gdc = 1;
    let min = Math.min(a,b);

    for(let i = 1; i<= min; i++){
        if(a%i===0 && b%i ===0 ){
            gdc = i;
        }

    }
    return gdc;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

let a = 10;
let b = 12;



console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`);
console.log(`LCM of ${a} and ${b} is ${lcm(a, b)}`);



