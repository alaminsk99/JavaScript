// Diamond




/*
    *
   ***
  *****    
   ***
    *

 


 */


let pattern = "";
const rows = 3;



/// Top
for(let i =1; i<=rows; i++){
    /// for spaces
    for(let j =1; j<= (rows-i); j++){
        pattern += " ";
    }
    /// for star
    for(let k=1; k<=(2*i-1); k++){
        pattern += "*";
    }
    pattern += "\n";
}
/// Bottom
for (let i = rows - 1; i >= 1; i--) {
  // Spaces
  for (let j = 1; j <= rows - i; j++) {
    pattern += " ";
  }
  // Stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}


console.log(`${pattern}`)