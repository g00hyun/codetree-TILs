const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dx = [0,0,1,-1], dy = [1,-1,0,0];

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const BFS = (visited) => {
    let result = 0;
    while(q.length > 0) {
        const [x,y,len] = q.shift();
        result = Math.max(result, len);

        for(let i = 0; i<4; i++) {
            const nx = x + dx[i], ny = y + dy[i];
            if(InRange(nx,ny) && !visited[nx][ny] && grid[x][y] < grid[nx][ny]) {
                q.push([nx,ny,len+1]);
                visited[nx][ny] = true;
            }
        }
    }
    return result;
}

const q = [];
const Solution = () => {
    let answer = -1;
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            q.splice(0);
            const visited = Array(n).fill().map(v => Array(n).fill(false));
            q.push([i,j,1]);
            visited[i][j] = true;

            const lis = BFS(visited);
            answer = Math.max(answer, lis);
        }
    }

    return answer;
}

const answer = Solution();
console.log(answer);