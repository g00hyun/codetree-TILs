const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const map = [...input].slice(1, input.length).map(elem => elem.split(' ').map(Number));

let max = -1;

map.forEach((val, x) => {
    if(x < n-2) {
        val.forEach((val2, y) => {
            if(y < n-2) {
                // console.log(x, y)
                max = Math.max(countCoin(x,y), max);
            }
        })
    }
})

console.log(max);

function countCoin(x, y) {
    let cnt = 0;

    for(let i = x; i<=x+2; i++)
        for(let j = y; j<=y+2; j++)
            if(map[i][j] == 1)
                cnt++;
    
    return cnt;
}