const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [n,m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(v => v.split(' ').map(Number))

function trimino1(x,y) {
    const c1 = arr[x][y] + arr[x + 1][y] + arr[x][y + 1]
    const c2 = arr[x][y] + arr[x + 1][y] + arr[x + 1][y + 1]
    const c3 = arr[x][y] + arr[x][y + 1] + arr[x + 1][y + 1]
    const c4 = arr[x + 1][y] + arr[x][y + 1] + arr[x + 1][y + 1]
    return Math.max(c1,c2,c3,c4)
}

function trimino2_1(x, y) {
    if (y + 1 < m && y + 2 < m)
        return arr[x][y] + arr[x][y + 1] + arr[x][y + 2]
    return 0
}

function trimino2_2(x, y) {
    if (x + 1 < n && x + 2 < n)
        return arr[x][y] + arr[x + 1][y] + arr[x + 2][y]
    return 0
}

let answer = 0;
// ㄱ 자 모형 완탐
for(let i = 0; i<n-1; i++)
    for(let j = 0; j<m-1; j++)
        answer = Math.max(answer, trimino1(i,j))

// ㅣ 자 모형 완탐
for(let i = 0; i<n; i++)
    for(let j = 0; j<m; j++)
        answer = Math.max(answer, trimino2_1(i,j), trimino2_2(i,j))

console.log(answer)