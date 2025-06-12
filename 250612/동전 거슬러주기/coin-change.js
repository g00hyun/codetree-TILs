const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

// Please Write your code here.
const MAX_INT = Number.MAX_SAFE_INTEGER
const dp = Array(m+1).fill(MAX_INT)

dp[0] = 0
for(let i = 1; i<=m; i++)
    for(let j = 0; j<n; j++) {
        if(i >= coins[j] && dp[i - coins[j]] !== MAX_INT)
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }

const answer = dp[m];
console.log(answer === MAX_INT ? -1 : answer)