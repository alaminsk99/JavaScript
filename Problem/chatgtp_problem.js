//Find the HCF of two numbers.
/*
What you're solving for 
Finding the Highest Common Factor (HCF) of two numbers. [1, 2]  
What's given in the problem 
two numbers. 
Helpful information 

• HCF is also known as Greatest Common Divisor (GCD). [3]  
• HCF is the largest number that divides both given numbers without leaving a remainder. [4]  
• There are two main methods to find HCF: Prime Factorization and Division Method. [5, 6, 7, 8, 8, 9, 9]  

How to solve 
Use either Prime Factorization or Division Method to find the HCF. [5, 9]  

1. Step 1 (Prime Factorization Method) [8, 9]  
	• Find the prime factors of both numbers. [2, 10]  
	• Identify the common prime factors. [10, 11]  
	• Multiply the common prime factors raised to the lowest power they appear in either factorization. [2, 12]  

2. Step 1 (Division Method) 
	• Divide the larger number by the smaller number. [13, 14]  
	• If there is no remainder, the smaller number is the HCF. [6, 15]  
	• If there is a remainder, divide the smaller number by the remainder. [6, 15]  
	• Repeat until the remainder is 0. The last non-zero remainder is the HCF. [6, 14]  

3. Step 2 (Prime Factorization Method) [8, 16]  
	• Example: Find the HCF of 12 and 18. [6]  
	• Prime factors of 12: $2^2 \times 3$ [17, 18]  
	• Prime factors of 18: $2 \times 3^2$ [19]  
	• Common prime factors: $2$ and $3$ [10, 11]  
	• HCF: $2^1 \times 3^1 = 2 \times 3 = 6$ [20]  

4. Step 2 (Division Method) 
	• Example: Find the HCF of 12 and 18. [6]  
	• Divide 18 by 12: $18 \div 12 = 1$ with a remainder of 6. [6]  
	• Divide 12 by 6: $12 \div 6 = 2$ with a remainder of 0. [6]  
	• HCF: 6 

Solution 
To find the HCF of two numbers, use either the Prime Factorization method or the Division Method. 
The Prime Factorization method involves finding the prime factors of both numbers and multiplying the common prime factors raised to the lowest power they appear in either factorization. 
The Division Method involves repeatedly dividing the larger number by the smaller number and taking the remainder until the remainder is 0.
The last non-zero remainder is the HCF. [2, 6, 7, 10, 12, 14, 21]  



*/




function HCF(a,b){
    let hcf = 1;
    let min = Math.min(a,b);

    for(let i=1; i<=min;i++){
        if(a%i===0 && b%i===0){
            hcf = i;
        }
    }
    return hcf;
}

let a = 12;
let b= 18;

console.log(`HCF of ${a} and ${b} is ${HCF(a,b)}`);