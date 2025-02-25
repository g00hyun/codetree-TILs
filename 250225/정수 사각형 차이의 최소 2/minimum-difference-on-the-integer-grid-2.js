const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(v => v.split(' ').map(Number))

const dp = Array(n).fill().map(v => Array(n).fill(null))

// 0 => min, 1 => max, 2 => diff
dp[0][0] = [arr[0][0], arr[0][0], 0]

for(let i = 1; i<n; i++) {
    const prev = dp[0][i-1]
    const target = arr[0][i]
    
    const curr0 = Math.min(prev[0], target)
    const curr1 = Math.max(prev[1], target)
    const curr2 = curr1 - curr0

    dp[0][i] = [curr0, curr1, curr2]
}

for(let i = 1; i<n; i++) {
    const prev = dp[i-1][0]
    const target = arr[i][0]
    
    const curr0 = Math.min(prev[0], target)
    const curr1 = Math.max(prev[1], target)
    const curr2 = curr1 - curr0

    dp[i][0] = [curr0, curr1, curr2]
}

for(let i = 1; i<n; i++)
    for(let j = 1; j<n; j++) {
        const prev0 = dp[i-1][j]
        const prev1 = dp[i][j-1]
        const target = arr[i][j]

        const curr0_0 = Math.min(prev0[0], target)
        const curr0_1 = Math.max(prev0[1], target)
        const curr0_2 = curr0_1 - curr0_0

        const curr0 = [curr0_0, curr0_1, curr0_2]

        const curr1_0 = Math.min(prev1[0], target)
        const curr1_1 = Math.max(prev1[1], target)
        const curr1_2 = curr1_1 - curr1_0

        const curr1 = [curr1_0, curr1_1, curr1_2]

        dp[i][j] = curr1_2 > curr0_2 ? curr0 : curr1
    }

console.log(dp[n-1][n-1][2])