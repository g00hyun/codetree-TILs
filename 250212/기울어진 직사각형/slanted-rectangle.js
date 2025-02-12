/*
    1. 시작점을 잡는다 => (2,1) => 방향순으로 움직여야 하기 때문에
    2. 1번 방향으로 움직인다. => 최소 1번부터 최대 arr[1][y] or y < n 까지
    3. 2번 방향으로 움직인다. => 최소 1번부터 최대 arr[0][y] or x >= 0 까지
    4. 3번 방향으로 움직인다. => 최소 1번부터 최대 arr[]
*/

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(v => v.split(' ').map(Number))

const step1 = (x, y) => {
    const dx = -1, dy = 1
    let sum = 0;
    // console.log("start!  ", arr[x][y])

    while(true) {
        const nx = x + dx, ny = y + dy
        if(nx > 0 && ny < n) {
            x = nx, y = ny;
            sum += arr[x][y]
            // console.log("step1 : ", arr[x][y])
            
            const prevSum = step2(x,y);
            if(prevSum !== -1) 
                msum = Math.max(msum, sum + prevSum)
        }
        else
            break;
    }
}

const step2 = (x, y) => {
    const dx = -1, dy = -1
    let sum = 0;

    while(true) {
        const nx = x + dx, ny = y + dy
        if(nx > -1 && ny > 0) {
            x = nx, y = ny;
            sum += arr[x][y]
            // console.log("step2 : ", arr[x][y])

            const prevSum = step3(x,y);
            if(prevSum !== -1) 
                return sum + prevSum;
        }
        else
            break;
    }
    return -1;
}

const step3 = (x, y) => {
    const dx = 1, dy = -1
    let sum = 0;

    while(true) {
        const nx = x + dx, ny = y + dy
        if(nx < n && ny > -1) {
            x = nx, y = ny;
            sum += arr[x][y]
            // console.log("step3 : ", arr[x][y])
            
            const prevSum = step4(x,y);
            if(prevSum !== -1) 
                return sum + prevSum;
        }
        else
            break;
    }
    return -1;
}

const step4 = (x, y) => {
    const dx = 1, dy = 1
    let sum = 0;

    while(true) {
        const nx = x + dx, ny = y + dy
        if(nx < n && ny < n) {
            x = nx, y = ny;
            sum += arr[x][y]
            // console.log("step4 : ", arr[x][y])

            if(x == fx && y == fy)
                return sum;
        }
        else
            break;
    }

    return -1;
}

let fx, fy
let msum = 0;

for(let i = 2; i<n; i++)
    for(let j = 1; j<n-1; j++) {
        fx = i, fy = j, step1(i,j)
    }

console.log(msum)