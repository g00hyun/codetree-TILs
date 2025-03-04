const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);
const [s1, e1] = input[n + 1].split(' ').map(Number);
const [s2, e2] = input[n + 2].split(' ').map(Number);

// Please write your code here.
const Solution = () => {
    let arr = [...blocks]
    let tmp = []
    for(let i = 0; i<arr.length; i++) {
        if(s1 - 1 <= i && i <= e1 - 1) continue
        tmp.push(arr[i])
    }
    arr = [...tmp]
    tmp = []
    for(let i = 0; i<arr.length; i++) {
        if(s2 - 1 <= i && i <= e2 - 1) continue
        tmp.push(arr[i])
    }
    return tmp
}

const answer = Solution()
console.log(answer.length)
for(let i = 0; i<answer.length; i++)
    console.log(answer[i])