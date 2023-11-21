#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int n, m;
int arr[100][100];
bool isPass;
queue<pair<int,int>> q;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool CanGo(int x, int y) {
    if(!inRange(x,y)) return false;
    if(arr[x][y] == 0) return false;
    return true;
}

void Push(int x, int y) {
    arr[x][y] = 0;
    q.push(make_pair(x,y));
}

bool Avaliable(int x, int y) {
    return x == n-1 && y == m-1;
}

bool BFS() {
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        if(Avaliable(x,y)) {
            return true;
        }

        for(int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            if (CanGo(nx,ny))
                Push(nx,ny);
        }
    }
    return false;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];

    Push(0,0);
    if (BFS()) cout << 1;
    else cout << 0;
    return 0;
}