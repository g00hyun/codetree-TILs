const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();

let result = "";
for(let i = 0; i<input.length; i++)
    i%2 == 1 ? result += input[i] : '';
console.log(result.split('').reverse().join(''));