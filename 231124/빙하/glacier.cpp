#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

// 1. 0,0을 기준으로 bfs돌면서 녹이는 효과 있는 arr 구함
// 2. 이후 1의 값을 가지는 인덱스가 녹이는 효과 있는 인덱스와 맞닿아있다면 +1 후 0으로 변환
// 3. 매번 횟수와 녹인 빙하 갯수를 저장
// 4. loop가 끝나면 해당 두 변수 출력

int n,m;
int arr[200][200];
int visited[200][200];
int meltingArr[200][200];
queue<pair<int,int>> q;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

void MeltingArrPrint() {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<m; j++)
            cout << meltingArr[i][j] << ' ';
        cout << endl;
    }
}

void ArrPrint() {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<m; j++)
            cout << arr[i][j] << ' ';
        cout << endl;
    }
}

bool AllMelt() {
    bool isMelt = true;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<m; j++)
            if(arr[i][j] == 1)
                isMelt = false;

    return isMelt;
}

void ClearArr() {
    for(int i = 0; i<n; i++)
        for(int j = 0; j<m; j++)
            meltingArr[i][j] = 0, visited[i][j] = 0;
}

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool CanMelting(int x, int y) {
    if(!inRange(x,y)) return false;
    if(visited[x][y] == 1) return false;
    if(arr[x][y] == 1) return false;
    return true;
}

void Push(int x, int y) {
    meltingArr[x][y] = 1;
    visited[x][y] = 1;
    q.push(make_pair(x,y));
}

void BFS() {
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for(int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            if(CanMelting(nx, ny)) {
                Push(nx, ny);
            }
        }
    }
}

int Melting() {
    int cnt = 0;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<m; j++)
            if(arr[i][j] == 1) {
                for(int dir = 0; dir < 4; dir++) {
                    int nearx = i + dx[dir];
                    int neary = j + dy[dir];

                    if(meltingArr[nearx][neary] == 1) {
                        arr[i][j] = 0;
                        cnt++;
                        break;
                    }
                }
            }
    
    return cnt;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<m; j++)
            cin >> arr[i][j];

    int t = 0;
    int meltSize;
    while(!AllMelt()) {
        ClearArr();
        t++;
        Push(0,0);
        BFS();
        meltSize = Melting();
    }

    cout << t << ' ' << meltSize;
    return 0;
}