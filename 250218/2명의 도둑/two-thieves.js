const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,m,c] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v => v.split(' ').map(Number))
const theives = []

/*
    1. 서로 다른 2개의 점 선택
    2. 연속하는 m개의 열이 선택 가능하다면 선택
    3. 선택한 열 중, 최댓값을 기준으로 합이 c를 넘지않도록 선택
    4. 선택한 값들을 각각 제곱해서 더한 후, 결과 값 갱신
*/

const InRange = (x,y) => 0 <= x && x < n && 0 <= y && y < n

const CanStole = () => {
    const theif1 = theives[0]
    for(let j = theif1[1]; j < theif1[1] + m; j++)
        if(!InRange(theif1[0], j))
            return false;

    const theif2 = theives[1]
    for(let j = theif2[1]; j < theif2[1] + m; j++)
        if(!InRange(theif2[0], j))
            return false;

    if(theif1[0] === theif2[0]) {
        if(theif1[1] + m - 1 > theif2[1]) return false
        if(theif2[1] + m - 1 > theif1[1]) return false
    }

    return true;
}

const Thievery = () => {
    const t1 = arr[theives[0][0]].slice(theives[0][1], theives[0][1] + m)
    const t2 = arr[theives[1][0]].slice(theives[1][1], theives[1][1] + m)

    return maximizeSumOfSquares(t1) + maximizeSumOfSquares(t2)
}

// DP
function maximizeSumOfSquares(arr) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(c + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const value = arr[i - 1];
        const profit = value * value;
        for (let cap = 0; cap <= c; cap++) {
            if (value > cap)
                dp[i][cap] = dp[i - 1][cap];
            else
                dp[i][cap] = Math.max(dp[i - 1][cap], dp[i - 1][cap - value] + profit);
        }
    }
    return dp[n][c];
}

const Backtracking = () => {
    if(theives.length === 2) {
        if(CanStole())
            result = Math.max(result, Thievery())
        return
    }

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++) {
            theives.push([i,j])
            Backtracking()
            theives.pop()
        }
}

let result = 0
Backtracking()
console.log(result)