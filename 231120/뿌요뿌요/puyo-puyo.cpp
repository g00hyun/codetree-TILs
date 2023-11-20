#include <iostream>
#include <algorithm>

using namespace std;

int n;
int arr[100][100];
pair<int, int> boom;
int cnt;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

void Print() {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++)
            cout << arr[i][j] << ' ';
        cout << endl;
    }
}

int MaximumArrVal() {
    int maximum = 0;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            maximum = max(maximum, arr[i][j]);
    
    return maximum;
}

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

bool CanGo(int x, int y, int block) {
    if (!inRange(x,y)) return false;
    if (arr[x][y] == 0) return false;
    if (arr[x][y] != block) return false;
    return true;
}

void dfs(int x, int y, int block) {
    for(int dir = 0; dir < 4; dir++) {
        int nx = x + dx[dir];
        int ny = y + dy[dir];
        if (CanGo(nx, ny, block)) {
            cnt++;
            arr[nx][ny] = 0;
            dfs(nx,ny,block);
        }
    }
}

void Solution() {
    int boomVal = 0;
    int boomMaxVal = 0;
    for(int block = 1; block <= MaximumArrVal(); block++) {
        for(int i = 0; i<n; i++) 
            for(int j = 0; j<n; j++)
                if(arr[i][j] == block) {
                    arr[i][j] = 0;
                    cnt = 1;
                    dfs(i,j,block);
                    boomMaxVal = max(boomMaxVal, cnt);
                    if(cnt >= 4)
                        boomVal++;
                }
    }
    cout << boomVal << ' ' << boomMaxVal << endl;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) 
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];

    Solution();
    // Print();
    return 0;
}