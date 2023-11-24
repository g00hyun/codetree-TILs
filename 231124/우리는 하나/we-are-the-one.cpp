#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int n,k,u,d;
int arr[8][8];
int visited[8][8];
queue<pair<int,int>> q;
int result = 0;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

// 1. k개 만큼 선택(큐에 넣기)
// 2. 큐가 빌때까지 BFS하며 visited보며 cnt++
// 3. 반환값 중 최댓값 저장

void Print() {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++)
            cout << visited[i][j] << ' ';
        cout << endl;
    }
    cout << endl;
}

void VisitClear() {
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            visited[i][j] = 0;
}

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// step => (arr[x][y] - arr[nx][ny])
bool CanGo(int x, int y, int step) {
    if(!inRange(x,y)) return false;
    if(u > step || step > d) return false;
    if(visited[x][y] == 1) return false;
    return true;
}

void Push(int x, int y) {
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
            if(CanGo(nx,ny, abs(arr[x][y] - arr[nx][ny]))) {
                Push(nx,ny);
            }
        }
    }
}

int VisitCount() {
    int cnt = 0;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            if(visited[i][j] == 1)
                cnt++;
    return cnt;
}

void Backtracking(int city) {
    if(city == k) {
        BFS();
        // Print();
        // cout << "!" << endl;
        // cout << VisitCount() << endl;
        result = max(result, VisitCount());
        return;
    }

    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++) {
            Push(i,j);
            Backtracking(city + 1);
            // Pop(i,j);
            VisitClear();
        }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k >> u >> d;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];

    Backtracking(0);
    
    cout << result;
    return 0;
}