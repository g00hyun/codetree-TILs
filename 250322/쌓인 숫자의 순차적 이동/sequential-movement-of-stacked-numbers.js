const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const moveNums = input[1 + n].split(' ').map(Number);

// Please Write your code here.
const findMoveNode = (x,y) => {
    const dx = [1,-1,0,0,1,-1,1,-1], dy = [0,0,1,-1,1,1,-1,-1];

    let maxval = -1;
    let index = 0;
    for(let i = 0; i<8; i++) {
        const nx = x + dx[i], ny = y + dy[i];

        if(0<=nx && nx<n && 0<=ny && ny<n) {
            const curval = Math.max(...grid[nx][ny])
            
            if(maxval < curval) {
                maxval = curval;
                index = i;
            }
        }
    }

    if(maxval === -1)
        return [-1,-1]

    const nx = x + dx[index], ny = y + dy[index];
    return [nx,ny];
}

const Move = (x,y,nx,ny,val) => {
    // console.log(`move ${x},${y} to ${nx},${ny}`)
    const index = grid[x][y].indexOf(val);
    const sliceArr = grid[x][y].slice(index);

    grid[nx][ny].push(...sliceArr);
    grid[x][y].splice(index);
}

for(let i = 0; i<n; i++)
    for(let j = 0; j<n; j++)
        grid[i][j] = [grid[i][j]]

moveNums.forEach(v => {
    let firstmove = true;

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            if(firstmove && grid[i][j].includes(v)) {
                const [nx,ny] = findMoveNode(i,j);
                if(!(nx === -1 && ny === -1))
                    Move(i,j,nx,ny,v);
                firstmove = false;
            }
    // console.log(grid)
})


grid.forEach(list => list.forEach(v => {
    if(v.length === 0)
        console.log('None')
    else
        console.log(v.reverse().join(' '))
}))