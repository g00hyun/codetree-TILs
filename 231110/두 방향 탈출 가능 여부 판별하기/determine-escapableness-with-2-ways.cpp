#include <iostream>

using namespace std;

int n,m;
int arr[100][100];

int dx[2] = {1,0};
int dy[2] = {0,1};

bool isEnd = false;

bool InRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool CanGo(int x, int y) {
    if(!InRange(x,y))
        return false;
    if(arr[x][y] == 0)
        return false;
    return true;
}

void dfs(int x, int y) {
    if(x == n-1 && y == m-1) isEnd = true;
    for(int i = 0; i<2; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];

        if(CanGo(nx,ny)) {
            arr[nx][ny] = 0;
            dfs(nx,ny);
        }
    }
    
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<m; j++)
            cin >> arr[i][j];
    
    arr[0][0] = 0;
    dfs(0,0);

    cout << isEnd;

    return 0;
}