const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let row = n, col = m;
let answer = -1;

const IsPositiveSquare = (x,y) => {
    for(let i = x; i<x+row; i++)
        for(let j = y; j<y+col; j++)
            if(grid[i][j] <= 0)
                return false;
    return true;
}

while(row > 0) {
    for(let i = 0; i<=n - row; i++)
        for(let j = 0; j<=m - col; j++)
            if(IsPositiveSquare(i,j)) {
                answer = Math.max(answer, row * col);
            }

    col--;
    
    if(col === 0)
        row--, col = m;
}

console.log(answer)