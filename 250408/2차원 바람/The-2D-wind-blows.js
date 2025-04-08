const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, q] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(" ").map(Number));
const winds = input.slice(1 + n, 1 + n + q).map(line => line.split(" ").map(Number));

// Please Write your code here.
const Solution = () => {
    winds.forEach(v => {
        const [r1,c1,r2,c2] = v;

        Move1(r1-1,c1-1,r2-1,c2-1);
        Move2(r1-1,c1-1,r2-1,c2-1,grid.map(v => [...v]));
    })

    for(const list of grid)
        console.log(list.join(' '));
}

const InRange = (x,y) => {
    return 0<=x && x<n && 0<=y && y<m;
}

const Move2 = (r1,c1,r2,c2,cpyGrid) => {
    const dx = [1,-1,0,0], dy = [0,0,1,-1];

    for(let i = r1; i<=r2; i++)
        for(let j = c1; j<=c2; j++) {
            let sum = 0;
            let count = 0;

            sum += grid[i][j];
            count++;
            for(let dir = 0; dir<4; dir++) {
                const nx = i + dx[dir], ny = j + dy[dir];

                if(InRange(nx,ny)) {
                    sum += cpyGrid[nx][ny];
                    count++;
                }
            }

            grid[i][j] = Math.trunc(sum/count);
        }
}

const Move1 = (r1,c1,r2,c2) => {
    const tmp1 = grid[r1][c1];
    const tmp2 = grid[r1][c2];
    const tmp3 = grid[r2][c1];
    const tmp4 = grid[r2][c2];

    for(let j = c2; j > c1-1; j--) {
        grid[r1][j] = grid[r1][j-1];
    }

    for(let i = r2; i > r1+1; i--) {
        grid[i][c2] = grid[i-1][c2];
    }
    grid[r1+1][c2] = tmp2;

    for(let j = c1; j < c2; j++) {
        grid[r2][j] = grid[r2][j+1];
    }
    grid[r2][c2-1] = tmp4;

    for(let i = r1; i < r2-1; i++) {
        grid[i][c1] = grid[i+1][c1];
    }
    grid[r2-1][c1] = tmp3;
}

Solution()