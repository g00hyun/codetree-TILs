const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let A = input[0];
// Please Write your code here.
const arr = A.split('');

const Encoding = () => {
    let target = arr[0];
    let len = 1;
    const result = [];
    for(let i = 1; i<arr.length; i++) {
        if(target !== arr[i]) {
            result.push(target);
            result.push(len);
            target = arr[i];
            len = 0;
        }
        len++;
    }
    result.push(target)
    result.push(len)
    return result.join('').length;
}

let answer = Number.MAX_SAFE_INTEGER;
for(let i = 1; i<=A.length; i++) {
    const tmp = arr.pop();
    arr.unshift(tmp);
    answer = Math.min(answer, Encoding());
}

console.log(answer)