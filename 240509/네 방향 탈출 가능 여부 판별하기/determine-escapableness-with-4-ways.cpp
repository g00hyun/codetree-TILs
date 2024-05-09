#include <iostream>
#include <queue>

using namespace std;

int n, m;
int arr[100][100];
bool visited[100][100];

queue<pair<int,int>> q;

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool Cango(int x, int y) {
    if(!inRange(x,y)) return false;
    if(visited[x][y] || arr[x][y] == 0) return false;
    return true;
}

void BFS() {
    int dx[4] = {0,0,1,-1};
    int dy[4] = {1,-1,0,0};

    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for(int i = 0; i<4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(Cango(nx,ny)) {
                q.push(make_pair(nx,ny));
                visited[nx][ny] = true;
            }
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];

    q.push(make_pair(0,0));
    visited[0][0] = true;
    BFS();

    cout << visited[n-1][m-1];
        

    return 0;
}