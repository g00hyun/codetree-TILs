const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(elem => elem.split(' ').map(Number));

let max = -1;

twooneSearch();
threeSearch();

console.log(max);

function counting(i,j) {
    const v1 = grid[i][j];
    const v2 = grid[i][j+1];
    const v3 = grid[i+1][j];
    const v4 = grid[i+1][j+1];

    return Math.max((v1+v2+v3), (v1+v2+v4), (v1+v3+v4), (v2+v3+v4));
}

function counting2(i,j) {
    return grid[i][j] + grid[i][j+1] + grid[i][j+2];
}

function counting3(i,j) {
    return grid[i][j] + grid[i+1][j] + grid[i+2][j];
}

function twooneSearch() {
    for(let i = 0; i<n-1; i++) {
        for(let j = 0; j<m-1; j++) {
            max = Math.max(max, counting(i,j));
        }
    }
}

function threeSearch() {
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<m-2; j++) {
            max = Math.max(max, counting2(i,j));
        }
    }

    for(let i = 0; i<n-2; i++) {
        for(let j = 0; j<m; j++) {
            max = Math.max(max, counting3(i,j));
        }
    }
}