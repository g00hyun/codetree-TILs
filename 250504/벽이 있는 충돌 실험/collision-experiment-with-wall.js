const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
const t = Number(input[idx++]);

const dx = [0,0,-1,1], dy = [-1,1,0,0];
const convert = {
    'L': 0,
    'R': 1,
    'U': 2,
    'D': 3
}

// let marbles = [[1,2,'L'], [1,2,'U'], [3,1,'R'], [3,4,'D'], [4,2,'U']];
const Filtering = (marbles) => {
    const mm = new Map();
    marbles.forEach(([x,y,d]) => {
        const target = x + '' + y;
        if(mm.has(target)) mm.set(target, mm.get(target) + 1);
        else mm.set(target, 1);
    })

    const filt = [...mm].filter(v => v[1] < 2).map(v => v[0].split('').map(Number))

    const newMarbles = []
    filt.forEach(([x,y]) => {
        const tmp = marbles.filter(v => (Number(x) === v[0] && Number(y) === v[1]));
        newMarbles.push(tmp[0]);
    })

    return newMarbles
}

// marbles = Filtering(marbles)
// console.log(marbles)


for (let i = 0; i < t; i++) {
    const [n, m] = input[idx++].split(' ').map(Number);
    let marbles = [];
    for (let j = 0; j < m; j++) {
        let [x, y, d] = input[idx++].split(' ');
        marbles.push([Number(x) - 1, Number(y) - 1, d]);
    }
    // const grid = Array(n).fill().map(v => Array(n).fill(0));
    const cache = new Set();

    while(true) {
        const nowMarbles = marbles.map(v => v.join('')).join('');
        if(cache.has(nowMarbles)) {
            break;
        }
        cache.add(nowMarbles);

        for(let i = 0; i<marbles.length; i++) {
            const [x,y,d] = marbles[i];

            const dir = convert[d];
            const nx = x + dx[dir], ny = y + dy[dir];

            const InRange = (x,y) => 0<=x && x<n && 0<=y && y<n;

            if(InRange(nx,ny)) {
                marbles[i][0] = nx;
                marbles[i][1] = ny;
            }
            else {
                if(d === 'L')
                    marbles[i][2] = 'R';
                else if(d === 'R')
                    marbles[i][2] = 'L';
                else if(d === 'U')
                    marbles[i][2] = 'D';
                else if(d === 'D')
                    marbles[i][2] = 'U';
            }
        }

        // console.log(marbles);
        marbles = Filtering(marbles);
    }

    const result = marbles.length;
    console.log(result);
}

