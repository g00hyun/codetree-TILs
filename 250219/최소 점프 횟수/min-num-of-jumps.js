const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

const step = []
const Backtracking = (index) => {
    if (index === n-1) {
        result = Math.min(result, step.length)
        return
    }

    for(let i = 1; i<=arr[index]; i++) {
        step.push(index + i)
        Backtracking(index + i)
        step.pop()
    }
}

let result = Number.MAX_SAFE_INTEGER;
Backtracking(0)
console.log(result === Number.MAX_SAFE_INTEGER ? -1 : result)