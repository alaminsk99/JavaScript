// Create a function using the "function" keyword that takes a string as a argument and return the number of vowels in the string.





function numberOFVowels(later){
    let inx =0;
    for(let char of later){
         if(char==="a"|| char==="e"|| char==="i"||char==="o"||char==="u"){
            inx++
        }
    }
    return inx;
}


let word = numberOFVowels("Alamin is a bad boy.".toLowerCase());

console.log(word);