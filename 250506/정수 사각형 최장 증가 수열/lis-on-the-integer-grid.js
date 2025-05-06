const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dx = [0,0,1,-1], dy = [1,-1,0,0];

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const BFS = (x,y,len) => {
    if(memo[x][y])
        return memo[x][y];
        
    let result = 0;

    for(let i = 0; i<4; i++) {
        const nx = x + dx[i], ny = y + dy[i];
        if(InRange(nx,ny) && grid[x][y] < grid[nx][ny]) {
            result = Math.max(result, len + BFS(nx,ny,len));
        }
    }

    memo[x][y] = result;
    return result;
}

const memo = Array(n).fill().map(v => Array(n).fill(0));
const Solution = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            BFS(i,j,1);
}

Solution();
console.log(memo.map(v => v.reduce((a,b) => Math.max(a,b))).reduce((a,b) => Math.max(a,b)) + 1)