const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(elem => elem.split(' ').map(Number));
const grid_reflect = [...zip(grid)];

let cnt = 0;

grid.forEach(val => {
    let j = 0;

    for(let i = 0; i < n; i++) {
        while(j < n && val[i] === val[j]) {
            j++;
        }

        if(j - i >= m) {
            cnt++;
            break;
        } 
    }
})

grid_reflect.forEach(val => {
    let j = 0;

    for(let i = 0; i < n; i++) {
        while(j < n && val[i] === val[j]) {
            j++;
        }

        if(j - i >= m) {
            cnt++;
            break;
        }
    }
})

console.log(cnt)


function* zip(grid) {
    for (let i = 0; i < n; i++) yield grid.map(val => val[i])
}