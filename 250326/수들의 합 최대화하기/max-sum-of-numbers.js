const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const q = []
const rowVisited = Array(n).fill(false)
const colVisited = Array(n).fill(false)

const Print = () => {
    grid.forEach((arr, row) => {
        arr.forEach((v, col) => {
            if(rowVisited[row] && colVisited[col])
                console.log(v)
        })
    })
}

const Permutation = () => {
    if(q.length === n) {
        // Print()
        answer = Math.max(answer, q.reduce((a,b) => a+b))
        return;
    }

    for(let i = 0; i<n; i++) {
        if(rowVisited[i]) continue;
        for(let j = 0; j<n; j++) {
            if(colVisited[j]) continue;

            q.push(grid[i][j]);
            rowVisited[i] = true;
            colVisited[j] = true;
            Permutation();
            rowVisited[i] = false;
            colVisited[j] = false;
            q.pop();
        }
    }
}

let answer = Number.MIN_SAFE_INTEGER;
Permutation()
console.log(answer)