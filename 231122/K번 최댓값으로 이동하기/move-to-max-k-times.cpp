#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int n,k;
int arr[101][101];
int moveAvaliableArr[101][101];
int r,c;
queue<pair<int,int>> q;

int dx[4] = {0,-1,1,0};
int dy[4] = {-1,0,0,1};

bool inRange(int x, int y) {
    return 1 <= x && x <= n && 1 <= y && y <= n;
}

bool CanGo(int x, int y) {
    if(!inRange(x,y)) return false;
    if(moveAvaliableArr[x][y] == 0) return false;
    return true;
}

void Push(int x, int y) {
    moveAvaliableArr[x][y] = 0;
    q.push(make_pair(x,y));
}

void SettingArr(int x, int y) {
    int upperVal = arr[x][y];

    for(int i = 1; i<=n; i++)
        for(int j = 1; j<=n; j++)
            moveAvaliableArr[i][j] = arr[i][j];
    
    for(int i = 1; i<=n; i++)
        for(int j = 1; j<=n; j++)
            if(moveAvaliableArr[i][j] >= upperVal)
                moveAvaliableArr[i][j] = 0;
}

bool SelectPoint(int x, int y) {
    // 1. 숫자가 크다면 바꿈, 아니면 x
    // 2. 숫자가 같다면, 행(row) 값이 더 작다면 바꿈, 크면 x
    // 3. 행 값이 같다면, 열(col) 값이 더 작다면 바꿈, 크면 x
    if(arr[r][c] < arr[x][y])
        return true;
    else if(arr[r][c] > arr[x][y])
        return false;
    else {
        if(r > x) return true;
        else if(r < x) return false;
        else {
            if(c > y) return true;
            else return false;
        }

    }
}

void BFS() {
    bool st = true;
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for(int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            if(CanGo(nx,ny)) {
                if(st) {
                    r = nx, c = ny, st = false;
                }
                if(SelectPoint(nx,ny)) {
                    r = nx, c = ny;
                }
                Push(nx,ny);
            }
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 1; i<=n; i++)
        for(int j = 1; j<=n; j++)
            cin >> arr[i][j];
    cin >> r >> c;

    while(k--) {
        SettingArr(r,c);
        Push(r,c);
        BFS();
    }

    cout << r << ' ' << c;
    return 0;
}