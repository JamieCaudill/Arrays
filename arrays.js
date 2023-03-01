var boards = ["snow", "skate", "surf", "skim"];
var length = [3, 4, 5, 6];
var bool = [true, true, false, false];

// Add an element to the end of the array. 
boards.push("long");
console.log(boards);
// Expected output: ['snow', 'skate', 'surf', 'skim', 'long']

// Remove last element and return.
length.pop();
console.log(length);
// Expected output: [3, 4, 5]

// Remove the first element and return.
console.log(bool.shift());
// Expected output: true. 

console.log(bool);
// Expected output: [true, false, false]

console.log(boards[2])
// Expected output: surf
