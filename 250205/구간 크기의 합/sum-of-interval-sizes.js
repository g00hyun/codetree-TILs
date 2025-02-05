const fs = require('fs')
const file = fs.readFileSync(0).toString().trim()
let [n, ...data] = file.split('\n')
n = Number(n)
data = data.map(v => v.split(' ').map(Number))

const horizonal = {}

data.forEach(([start, end]) => {
    horizonal[start] = 0;
    horizonal[end] = 0;
})

data.forEach(([start, end]) => {
    horizonal[start]++;
    horizonal[end]--;
})

const arr = Object.entries(horizonal)
let sum = 0;
let result = 0;
let startArea = null, endArea = null;
arr.forEach(([k, v]) => {
    if(startArea === null) startArea = k;

    sum += v;

    if(sum === 0) endArea = k

    if(startArea !== null && endArea !== null) {
        result += (endArea - startArea);
        startArea = null;
        endArea = null;
    }
})

console.log(result)

// console.log(horizonal)