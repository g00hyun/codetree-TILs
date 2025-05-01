const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let [x,y] = input[1].split(' ').map(Number);
const grid = input.slice(2, 2 + n).map(v => v.trim().split(''));
// Please Write your code here.
const visited = Array(n).fill().map(v => Array(n).fill().map(v => Array(4).fill(false)));
let dir = 0;
const dx = [0,-1,0,1], dy = [1,0,-1,0];

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const IsFrontWall = () => {
    const nx = x + dx[dir], ny = y + dy[dir];
    if(InRange(nx,ny) && grid[nx][ny] === '#')
        return true;
    return false;
}

const IsRightWall = () => {
    const rightDir = (4 + dir - 1) % 4;
    const rx = x + dx[rightDir], ry = y + dy[rightDir];

    if(grid[rx][ry] === '#')
        return true;
    return false;
}

const TurnLeft = () => dir = (dir + 1) % 4;
const TurnRight = () => dir = (4 + dir - 1) % 4;

const Go = () => {
    x += dx[dir];
    y += dy[dir];
}

/* 앞에 벽이 있는가?
    Yes: 반시계 90 회전

    No: 앞으로 이동 {
        map을 벗어났는가?
            Yes: 탈출!!
            No: 오른쪽에 벽이 있는가?
                Yes: 그대로
                No: 시계 90 회전 후 전진
    }
*/
const Solution = () => {
    x--, y--;
    let time = 0;

    while(InRange(x,y)) {
        // console.log(`x is ${x} / y is ${y} / dir is ${dir}`)
        if(visited[x][y][dir]) {
            console.log(-1);
            return;
        }

        if(IsFrontWall(dir)) {
            visited[x][y][dir] = true;
            TurnLeft();
            continue;
        }

        visited[x][y][dir]=true;
        Go();
        time++;

        if(!InRange(x,y)) {
            console.log(time);
            return;
        }

        if(!IsRightWall()) {
            visited[x][y][dir]=true;
            TurnRight();
            visited[x][y][dir]=true;
            Go();
            time++;
        }
    }
}

Solution();

// Solution(startX - 1, startY - 1);
// grid.map(v => console.log(v.join('')))