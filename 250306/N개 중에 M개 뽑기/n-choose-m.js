const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const combination = [];

function printCombination() {
    let answer = '';
    combination.forEach(elem => {
        answer += `${elem} `;
    });
    console.log(answer.trim());
}

function findCombination(currNum, cnt) {
    if (currNum === n + 1) {
        if (cnt === m) {
            printCombination();
        }
        return;
    }

    combination.push(currNum);
    findCombination(currNum + 1, cnt + 1);
    combination.pop();

    findCombination(currNum + 1, cnt);
}

findCombination(1, 0);
