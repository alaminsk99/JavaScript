

// Item \s prices problems.


let prices = [250, 645, 300,900, 50];


for ( let i=0; i<prices.length; i++){
    // First way
   // prices[i] = prices[i]-(prices[i]/10);
    // Second way
   prices[i] -= (prices[i]/10);
    
}

console.log(prices);