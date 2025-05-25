// Create an array to store companies .



let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];


console.log(companies)
// Remove the first company from array

companies.splice(0,1);



console.log(companies)

// Remove Uber and Add Ola in its place.

companies.splice(1,1,"Ola");



console.log(companies)

// Add Amazon at the end.

companies.push("Amazon");

console.log(companies)