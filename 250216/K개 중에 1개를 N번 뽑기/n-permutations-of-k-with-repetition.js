const fs = require('fs')
const [n, k] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = []
const Backtracking = () => {
    if(arr.length === k) {
        console.log(arr.join(' '))
        return
    }

    for(let i = 1; i<=n; i++) {
        arr.push(i)
        Backtracking()
        arr.pop()
    }
}

Backtracking();