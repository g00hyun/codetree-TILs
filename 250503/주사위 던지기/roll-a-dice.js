const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, r, c] = input[0].split(' ').map(Number);
const directions = input[1].split(' ');

// Please Write your code here.
const grid = Array(n).fill().map(v => Array(n).fill(0));
let up = 1, front = 2, right = 3;

const Target = () => {
    return 7-up;
}

const MoveDice = (dir) => {
    const tUp = up, tFront = front, tRight = right;
    if(dir === 'L') {
        up = tRight;
        front = tFront;
        right = 7 - tUp;
    }
    else if(dir === 'R') {
        up = 7-tRight;
        front = tFront;
        right = tUp;
    }
    else if(dir === 'U') {
        up = tFront;
        front = 7 - tUp;
        right = tRight;
    }
    else if(dir === 'D') {
        up = 7 - tFront;
        front = tUp;
        right = tRight;
    }
}

const dirConvert = {
    'L': 0,
    'R': 1,
    'U': 2,
    'D': 3
}
const dx = [0,0,-1,1], dy = [-1,1,0,0];

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const Solution = (x,y) => {
    grid[x][y] = Target();

    directions.forEach(v => {
        // console.log(`(up,front,right) => (${up},${front},${right})`)
        const dir = dirConvert[v];
        const nx = x + dx[dir], ny = y + dy[dir];
        if(InRange(nx,ny)) {
            MoveDice(v);
            x = nx, y = ny;
            grid[x][y] = Target();
        }


    })

    // grid.forEach(v => console.log(v.join(' ')));
    console.log(grid.map(v => v.reduce((a,b) => a+b, 0)).reduce((a,b) => a+b, 0))
}

Solution(r-1, c-1)