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
    let x = 0, y = 0;
    const q = [];
    let time = 0;

    map[x][y] = 1;
    q.push([x,y]);

    for(let i = 0; i<movements.length; i++) {
        let [dir,left] = movements[i];

        const d = convert[dir];
        while(left--) {
            x += dx[d], y += dy[d];
            // 격자를 벗어나면 종료
            if(!InRange(x,y)) {
                return time + 1;
            }
            
            // 자기 몸을 물면 종료
            // but, 꼬리와 맞물리면 꼬리는 사라지기에 괜찮
            const [xx,yy] = q[0];
            if(map[x][y] === 1 && !(xx === x && yy === y)) {
                return time + 1;
            }

            // 사과를 못먹었을 경우, 마지막 꼬리 삭제
            if(map[x][y] === 9) {
                map[x][y] = 1;
                q.push([x,y]);
                time++;
            }
            else {
                const [a,b] = q.shift();
                map[a][b] = 0;
                // console.log(`Erase Coord => (${a}, ${b})`)

                map[x][y] = 1;
                q.push([x,y]);
                time++;
            }

            // console.log(`(x,y) => (${x},${y})`);
        }
    }


    return time;
}

const answer = Solution()
console.log(answer)
// map.forEach(v => console.log(v.join(' ')))