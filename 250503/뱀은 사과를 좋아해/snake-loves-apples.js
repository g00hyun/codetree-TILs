const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map(Number);
const positions = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));
const movements = input.slice(1 + m, 1 + m + k).map(line => line.trim().split(' '));
// Please Write your code here.
const map = Array(n).fill().map(v => Array(n).fill(0));

const FillApple = () => {
    positions.forEach(([x,y]) => map[x-1][y-1] = 9);
}

const InitSnake = () => {
    map[0][0] = 1;
}

const dx = [0,0,-1,1], dy = [-1,1,0,0];
const convert = {
    'L': 0,
    'R': 1,
    'U': 2,
    'D': 3
}

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const Solution = () => {
    FillApple();
    InitSnake();
    let x = 0, y = 0;
    const q = [];
    let time = 0;

    q.push([x,y]);

    for(let i = 0; i<movements.length; i++) {
        let [dir,left] = movements[i];

        const d = convert[dir];
        while(left--) {
            time++;
            const nx = x + dx[d], ny = y + dy[d];
            if(!InRange(nx,ny)) {
                return time;
            }
            
            if(map[nx][ny] === 1) {
                return time;
            }

            if(map[nx][ny] === 0) {
                const [a,b] = q.pop();
                map[a][b] = 0;
            }
            x = nx, y = ny;
            map[x][y] = 1;
            q.push([x,y]);
        }
    }

    return time;
}

const answer = Solution()
console.log(answer)