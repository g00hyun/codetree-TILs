const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();

let result = "";
let j = 0;
for(let i = 0; i<input.length; i++) {
    let cnt = 0;
    
    while(j < input.length && input[j] === input[i]) {
        cnt++;
        j++;
    }
    result += input[i]+cnt;

    i = j-1;
}

console.log(result.length);
console.log(result);