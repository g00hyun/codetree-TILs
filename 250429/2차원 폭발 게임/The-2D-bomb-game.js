const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const numbers2d = input.slice(1, Number(n) + 1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
const interval = Array(n).fill(-1);
const nextArr = Array(n).fill().map(v => Array(n).fill(0));

const InitInterval = () => {
    for(let i = 0; i<n; i++)
        interval[i] = -1;
}

const InitNextArr = () => {
    for(let i = 0; i<n; i++)    
        for(let j = 0; j<n; j++)
            nextArr[i][j] = 0;
}

const Numbers2dFromNextArr = () => {
    for(let i = 0; i<n; i++)    
        for(let j = 0; j<n; j++)
            numbers2d[i][j] = nextArr[i][j];
}

const Eliminate = () => {
    for(let j = 0; j<n; j++) {
        InitInterval();

        let s = -1;
        for(let e = 0; e<n; e++) {
            while(s<n && numbers2d[e][j] !== numbers2d[s+1][j])
                s++;
            
            const size = e - s;
            if(size >= m)
                interval[s+1] = e;
        }

        for(let i = 0; i<n; i++)
            if(interval[i] !== -1)
                for(let a = i; a <= interval[i]; a++)
                    numbers2d[a][j] = 0;
    }
}

const Gravitiy = () => {
    InitNextArr();

    for(let j = 0; j<n; j++) {
        const tmp = [];
        for(let i = 0; i<n; i++) {
            if(numbers2d[i][j] !== 0)
                tmp.push(numbers2d[i][j]);
        }

        let tmpSize = tmp.length;
        let xindex = n-1;
        while(tmpSize--) {
            nextArr[xindex--][j] = tmp.pop();
        }
    }

    Numbers2dFromNextArr();
}

const ForwardRotation90 = () => {
    InitNextArr();

    for(let i = 0; i<n; i++)
        for(let j = 0; j<n; j++)
            nextArr[i][j] = numbers2d[n-1-j][i];

    Numbers2dFromNextArr();
}

const LoopEliminate = () => {
    while(1) {
        // 1. M개 이상 연결된 경우 폭파
        Eliminate();

        // 2. 중력 적용
        Gravitiy();

        // 터지고 남은 갯수
        const curr = numbers2d.map(CountArrByEliminateZeroValue).reduce((a,b) => a+b);

        // 1. M개 이상 연결된 경우 폭파
        Eliminate();

        // 2. 중력 적용
        Gravitiy();

        // 한번 더 터지고 남은 갯수
        const next = numbers2d.map(CountArrByEliminateZeroValue).reduce((a,b) => a+b);

        if(curr === next) break;
    }
}

const ZeroFilter = (v) => v !== 0;
const CountArrByEliminateZeroValue = (v) => v.filter(ZeroFilter).length;

const Solution = (k) => {
    // 5. k번 동안 1~4 반복
    while(k--) {
        LoopEliminate();

        // console.log(`###[Start]#######`)
        // numbers2d.forEach(v => console.log(v.join(' ')))
        // console.log();

        // 3. 시계방향 90 회전
        ForwardRotation90();

        // 4. 중력 적용
        Gravitiy();
        // numbers2d.forEach(v => console.log(v.join(' ')))
        // console.log(`###[End]#######`)
        // console.log()
    }

    // 6. 회전 이후에도 터질게 남아있다면 마지막으로 터트리기
    LoopEliminate();

    // 7. 남은 갯수 출력
    console.log(numbers2d.map(CountArrByEliminateZeroValue).reduce((a,b) => a+b))
}

Solution(k);