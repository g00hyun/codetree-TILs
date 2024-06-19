const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let result = [];
for(let elem of arr)
    elem % 2 == 0 ? result.push(elem) : '';

console.log(result.reverse().join(' '));