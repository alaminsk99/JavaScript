//Pattern problem of pyramid
/*


    *                       --> star = 1 , sp = 4             { sp= 5-i and star (2*i-1)    }
   ***                      --> star = 3,  sp = 3 
  *****                     --> star = 5,  sp = 2,
 *******                    --> star = 7,  sp = 1,
*********                   --> star = 9,  sp = 0




*/



let pattern = "";


for(let i = 1; i<=5; i++){
    // Spaces

    for(let j=1; j<= (5-i); j++){
        pattern += " ";
    }
    for(let k = 1;k<=(2*i-1); k++){
        pattern += "*";
    }
    pattern +="\n";
}


console.log(`${pattern}`)