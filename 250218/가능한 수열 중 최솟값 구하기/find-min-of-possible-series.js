const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

const seq = []
let isAvailable = false

const AvaliableCheck = (len) => {
    for(let i = 1; i <= Math.trunc(len/2); i++) {
        for(let j = 0; j < len - 2*i + 1; j++) {
            const s1 = seq.slice(j, j+i).join('')
            const s2 = seq.slice(j+i, j+i+i).join('')

            if(s1 === s2) return false
        }
    }

    return true
}

const Backtracking = (len) => {
    if(seq.length === n) {
        if(AvaliableCheck(seq.length))
            isAvailable = true
        return
    }

    for(let i = 4; i<=6; i++) {
        if(AvaliableCheck(len)) {
            seq.push(i)
            Backtracking(len+1)
            if(isAvailable) return
            seq.pop()
        }
    }
}

Backtracking(0)
console.log(seq.join(''))