const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const a = input[0]
const b = input[1]

const dp = Array(a.length).fill().map(v => Array(b.length).fill(0))

dp[0][0] = a[0] === b[0] ? 1 : 0
for(let i = 1; i<a.length; i++)
    a[i] === b[0] ? dp[i][0] = 1 : dp[i][0] = dp[i-1][0]

for(let j = 1; j<b.length; j++)
    a[0] === b[j] ? dp[0][j] = 1 : dp[0][j] = dp[0][j-1]

for(let i = 1; i<a.length; i++)
    for(let j = 1; j<b.length; j++) {
        if(a[i] === b[j]) dp[i][j] = dp[i-1][j-1] + 1
        else dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
    }


console.log(dp[a.length-1][b.length-1])