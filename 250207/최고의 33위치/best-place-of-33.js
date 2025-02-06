const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const n = Number(input[0])
const grid = input.slice(1).map(line => line.split(' ').map(Number))

let answer = 0;
for(let i = 0; i<n-2; i++)
    for(let j = 0; j<n-2; j++)
        answer = Math.max(answer, counting(i,j));

console.log(answer)

function counting(x,y) {
    let sum = 0;
    for(let i = x; i<x+3; i++)
        for(let j = y; j<y+3; j++)
            if(grid[i][j] === 1) sum++;

    return sum;
}