const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.

const MAX_INT = Number.MAX_SAFE_INTEGER
const dp = Array(m+1).fill(MAX_INT)

dp[0] = 0
for(let i = 0; i<n; i++) {
    for(let j = m; j>0; j--) {
        if(j >= arr[i] && dp[j - arr[i]] !== MAX_INT)
            dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1)
    }
    // console.log(dp)
}

const answer = dp[m]
console.log(answer === MAX_INT ? -1 : answer)