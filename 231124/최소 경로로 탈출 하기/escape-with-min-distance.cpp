#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int n, m;
int arr[100][100];
int step[100][100];
queue<pair<int,int>> q;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

void Print() {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<m; j++)
            cout << arr[i][j] << ' ';
        cout << endl;
    }
}

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool CanGo(int x, int y) {
    if(!inRange(x,y)) return false;
    if(arr[x][y] == 0) return false;
    return true;
}

void Push(int x, int y, int s) {
    step[x][y] = s;
    arr[x][y] = 0;
    q.push(make_pair(x,y));
}

void BFS() {
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        int s = step[x][y];
        q.pop();

        for(int dir = 0; dir<4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            if(CanGo(nx,ny)) {
                Push(nx, ny, s+1);
            }
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<m; j++)
            cin >> arr[i][j];

    Push(0,0,0);
    BFS();

    if(step[n-1][m-1] == 0) cout << -1;
    else cout << step[n-1][m-1]; 
    return 0;
}