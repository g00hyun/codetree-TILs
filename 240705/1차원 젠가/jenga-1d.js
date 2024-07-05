const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let blocks = input.slice(1,1+n).map(Number);
const [s1, e1] = input[1+n].split(' ').map(Number);
const [s2, e2] = input[1+n+1].split(' ').map(Number);

blocks = [...blocks.slice(0, s1-1), ...blocks.slice(e1)];
blocks = [...blocks.slice(0, s2-1), ...blocks.slice(e2)];

console.log(blocks.length);
blocks.forEach(val => console.log(val));