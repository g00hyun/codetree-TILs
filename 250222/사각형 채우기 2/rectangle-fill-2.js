const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

const dp = Array(n + 1).fill(0)

dp[0] = 1
dp[1] = 1
dp[2] = 3
dp[3] = 5

for(let i = 4; i<=n; i++)
    dp[i] = dp[i-1] + 2*dp[i-2]

console.log(dp[n])