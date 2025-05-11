const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.
const dp = Array(n+1).fill().map(v => Array(m+1).fill(-1));

const JumpCount = (x,y) => {
    let result = dp[x][y];
    const toJumpVal = grid[x-1][y-1];

    for(let i = 1; i<=x; i++)
        for(let j = 1; j<=y; j++) {
            if(dp[i][j] === -1) continue;

            if(grid[i-1][j-1] < toJumpVal && i<x && j<y)
                result = Math.max(dp[i][j] + 1, result);
        }
    
    return result;
}

dp[1][1] = 1;
for(let i = 1; i<=n; i++)
    for(let j = 1; j<=m; j++) {
        dp[i][j] = JumpCount(i,j);
    }

let answer = -1;
for(let i = 1; i<=n; i++)
    for(let j = 1; j<=m; j++)
        answer = Math.max(answer, dp[i][j])
console.log(answer)

