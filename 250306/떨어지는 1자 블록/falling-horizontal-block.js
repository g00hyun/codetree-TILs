const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const CanGo = (i) => {
    for(let j = k-1; j<k+m-1; j++)
        if(grid[i+1][j]) return false;
    return true;
}

let i = 0;
while(CanGo(i)) {
    i++;
}

for(let j = k-1; j<k+m-1; j++) {
    grid[i][j] = 1;
}

console.log(grid.map(v => v.join(' ')).join('\n'))