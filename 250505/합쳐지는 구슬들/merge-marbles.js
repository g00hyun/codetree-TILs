const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input[0].split(' ').map(Number);
const marbles = [];
for (let i = 1; i <= m; i++) {
    let [r, c, d, w] = input[i].split(' ');
    r = Number(r);
    c = Number(c);
    w = Number(w);
    marbles.push([r, c, d, w]);
}

// Please Write your code here.
const grid = Array(n).fill().map(v => Array(n).fill(null));
const nextGrid = Array(n).fill().map(v => Array(n).fill([]));

const InitGrid = () => {
    marbles.forEach(([x,y,d,w],i) => {
        grid[x-1][y-1] = [d,w,i+1]
    })
}

const InitNextGrid = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            nextGrid[i][j] = [];
}

const dx = [0,0,-1,1], dy = [-1,1,0,0];
const convert = {
    'L': 0,
    'R': 1,
    'U': 2,
    'D': 3
}
const reversal = {
    'L': 'R',
    'R': 'L',
    'U': 'D',
    'D': 'U'
}

const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

const AfterSec = () => {
    InitNextGrid();

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(grid[i][j]) {
                const x = i, y = j;
                const [d,w,priority] = grid[i][j];
                const dir = convert[d];

                const nx = x + dx[dir], ny = y + dy[dir];
                if(InRange(nx,ny))
                    nextGrid[nx][ny].push([d,w,priority]);
                else
                    nextGrid[x][y].push([reversal[d],w,priority]); 
            }
}

const MergeMarble = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(nextGrid[i][j].length >= 2) {
                const ms = nextGrid[i][j].map(v => v);
                nextGrid[i][j] = [];
                
                ms.sort((a,b) => (a[2] - b[2]) * -1);
                const nw = ms.map(v => v[1]).reduce((a,b) => a + b,0)
                
                const nval = [ms[0][0], nw, ms[0][2]];
                nextGrid[i][j].push(nval);
            }
}

const UpdateGrid = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            grid[i][j] = null;

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(nextGrid[i][j].length === 1)
                grid[i][j] = nextGrid[i][j][0];
                
}

const Solution = () => {
    // 맵 만들고, 초기세팅
    InitGrid();

    // t초동안 진행 시키기
        // 1초동안 움직이거나, 방향을 바꾸거나
        // 움직이고 나서, 충돌한다면 해당 칸에 가장 큰 번호의 구슬 방향을 남기고 크기 합치기
    let left = t;
    while(left--) {
        AfterSec();
        MergeMarble();
        UpdateGrid();
    }

    const countMarbles = grid.map(v => v.filter(v => v).length).reduce((a,b) => a+b);
    const maxWeight = grid.map(v => v.filter(v => v).map(v => v[1])).map(v => {
        const len = v.length;
        if(len === 0)
            return 0;
        else if(len === 1)
            return v[0];
        else if(len >= 2)
            return v.reduce((a,b) => Math.max(a,b));
    }).reduce((a,b) => Math.max(a,b))

    console.log(countMarbles + ' ' + maxWeight)
}

Solution();
