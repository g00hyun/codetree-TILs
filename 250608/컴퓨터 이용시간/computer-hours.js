const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = input.slice(1).map(line => line.split(' ').map(Number));
// Please write your code here.
const seats = Array(n).fill(-1);
const isSit = Array(n).fill(true);

const people = segments.map((v,i) => [...v,i]);
const horizon = [];
people.forEach(v => horizon.push([v[0], v[2], 1], [v[1], v[2], -1]))

const result = Array(n).fill(-1);
const hori = horizon.sort((a,b) => a[0] - b[0]);
hori.forEach(([time, human, status]) => {
    const seatIdx = choiceSeat(human, status);
    
    seats[seatIdx] = human;
    status === 1 ? isSit[seatIdx] = false : isSit[seatIdx] = true;

    if(status === 1) {
        result[human] = seatIdx+1;
    }
    // console.log(`seatIndex => ${seatIdx}`)
    // console.log(`seats => ${seats.join(' ')}`)
    // console.log()

})

console.log(result.join(' '))


function choiceSeat(human, status) {
    for(let i = 0; i<n; i++) {
        if(status === 1 && isSit[i])
            return i;
        if(status === -1 && !isSit[i] && human === seats[i])
            return i;

    }
}