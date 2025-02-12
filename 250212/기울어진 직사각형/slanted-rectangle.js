const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const grid = input.slice(1).map(v => v.split(' ').map(Number))

const inRange = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < n;
}

const getScore = (x, y, k, l) => {
    const dx = [-1, -1, 1, 1];
    const dy = [1, -1, -1, 1];
    const moveNum = [k, l, k, l];
    
    let sumOfNums = 0;

    for (let d = 0; d < 4; d++) {
        for (let q = 0; q < moveNum[d]; q++) {
            x += dx[d];
            y += dy[d];
                
            if (!inRange(x, y)) {
                return 0;
            }
			
            sumOfNums += grid[x][y];
        }
    }
    
    return sumOfNums;
}

let ans = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 1; k < n; k++) {
            for (let l = 1; l < n; l++) {
                ans = Math.max(ans, getScore(i, j, k, l));
            }
        }
    }
}

console.log(ans);