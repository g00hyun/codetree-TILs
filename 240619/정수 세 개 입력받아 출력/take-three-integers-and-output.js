const fs = require('fs');

let input = fs.readFileSync(0).toString().split("\n");

let [a,b] = input[0].split(" ");
let c = input[1];

console.log(a,b,c);