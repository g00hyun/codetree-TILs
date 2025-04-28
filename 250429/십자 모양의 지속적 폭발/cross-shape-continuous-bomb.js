const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));
const bombColumns = input.slice(n + 1, n + 1 + m).map(Number);

const cpyGrid = Array(n).fill().map(v => Array(n).fill(0));

const InitCpyGrid = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            cpyGrid[i][j] = 0;
}

const GridToCpyGrid = () => {
    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            grid[i][j] = cpyGrid[i][j];
}

// Please Write your code here.
const Solution = () => {
    bombColumns.forEach(Boom);

    grid.forEach(v => console.log(v.join(' ')));
}

const Boom = (col) => {
    col--;
    let row = 0;
    for(let i = 0; i<n; i++)
        if(grid[i][col] !== 0) {
            row = i;
            break;
        }
    
    ElemEliminate(row, col);
    Gravitiy();
}

const ElemEliminate = (x, y) => {
    const size = grid[x][y];
    const dx = [1,-1,0,0], dy = [0,0,1,-1];
    
    for(let s = 0; s<size; s++) {
        for(let d = 0; d<4; d++) {
            const nx = x + dx[d]*s, ny = y + dy[d]*s;

            if(0<=nx && nx<n && 0<=ny && ny<n)
                grid[nx][ny] = 0;
        }
    }
}

const Gravitiy = () => {
    InitCpyGrid();

    for(let j = 0; j<n; j++) {
        const tmp = [];

        for(let i = 0; i<n; i++)
            if(grid[i][j] !== 0)
                tmp.push(grid[i][j]);
        
        let tmpSize = tmp.length;
        let xindex = n-1;
        while(tmpSize--) {
            const target = tmp.pop();

            cpyGrid[xindex--][j] = target;
        }
    }

    GridToCpyGrid();
}

Solution();