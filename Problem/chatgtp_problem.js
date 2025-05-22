//Pattarn prolems using loops -----------> Star



let star = "";

// Top part
for (let i = 1; i <= 5; i++) {
  // Left stars
  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  // Center spaces
  for (let s = 1; s <= (10 - 2 * i); s++) {
    star += " ";
  }

  // Right stars
  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  star += "\n";
}

// Bottom part
for (let i = 5; i >= 1; i--) {
  // Left stars
  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  // Center spaces
  for (let s = 1; s <= (10 - 2 * i); s++) {
    star += " ";
  }

  // Right stars
  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  star += "\n";
}

console.log(star);
