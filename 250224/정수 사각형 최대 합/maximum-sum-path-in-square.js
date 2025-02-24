const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(v => v.split(' ').map(Number))

const dp = Array(n).fill().map(v => Array(n).fill(0))

dp[0][0] = arr[0][0]
for(let i = 1; i<n; i++)
    dp[0][i] = dp[0][i-1] + arr[0][i], dp[i][0] = dp[i-1][0] + arr[i][0]

for(let i = 1; i<n; i++)
    for(let j = 1; j<n; j++)
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + arr[i][j]

console.log(dp[n-1][n-1])