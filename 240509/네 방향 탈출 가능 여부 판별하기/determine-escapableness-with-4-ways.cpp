// #include <iostream>
// #include <queue>

// using namespace std;

// int n, m;
// int arr[100][100];
// bool visited[100][100];

// queue<pair<int,int>> q;

// bool InRange(int x, int y) {
//     return 0 <= x && x < n && 0 <= y && y < m;
// }

// bool Cango(int x, int y) {
//     // if(!InRange(x,y)) return false;
//     // if(visited[x][y] || arr[x][y] == 0) return false;
//     // return true;
//     return InRange(x, y) && arr[x][y] && !visited[x][y];
// }

// void BFS() {
//     int dx[4] = {0,0,1,-1};
//     int dy[4] = {1,-1,0,0};

//     while(!q.empty()) {
//         int x = q.front().first;
//         int y = q.front().second;
//         q.pop();

//         for(int i = 0; i<4; i++) {
//             int nx = x + dx[i];
//             int ny = y + dy[i];

//             if(Cango(nx,ny)) {
//                 q.push(make_pair(nx,ny));
//                 visited[nx][ny] = true;
//             }
//         }
//     }
// }

// int main() {
//     // 여기에 코드를 작성해주세요.
//     cin >> n >> m;
//     for(int i = 0; i<n; i++)
//         for(int j = 0; j<n; j++)
//             cin >> arr[i][j];

//     q.push(make_pair(0,0));
//     visited[0][0] = true;
//     BFS();

//     cout << visited[n-1][m-1];
        

//     return 0;
// }

#include <iostream>
#include <queue>

#define MAX_N 100
#define MAX_M 100

using namespace std;

// 전역 변수 선언:
int n, m;
int a[MAX_N][MAX_M];

// bfs에 필요한 변수들 입니다.
queue<pair<int, int> > q;
bool visited[MAX_N][MAX_M];

bool InRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool CanGo(int x, int y) {
    return InRange(x, y) && a[x][y] && !visited[x][y];
}

void BFS() {
    // queue에 남은 것이 없을때까지 반복합니다.
    while(!q.empty()) {
        // queue에서 가장 먼저 들어온 원소를 뺍니다.
        pair<int, int> curr_pos = q.front();
        int x = curr_pos.first, y = curr_pos.second;
        q.pop();

        int dx[4] = {1, -1, 0, 0};
        int dy[4] = {0, 0, 1, -1};

        // queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for(int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir], ny = y + dy[dir];

            // 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            // 새로 queue에 넣어주고 방문 여부를 표시해줍니다. 
            if(CanGo(nx, ny)){
                q.push(make_pair(nx, ny));
                visited[nx][ny] = true;
            }
        }
    }

}

int main() {
    // 입력:
    cin >> n >> m;

    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)
            cin >> a[i][j];
    
    // bfs를 이용해 최소 이동 횟수를 구합니다.
    // 시작점을 queue에 넣고 시작합니다.
    q.push(make_pair(0, 0));
    visited[0][0] = true;

    BFS();

    // 우측 하단을 방문한 적이 있는지 여부를 출력합니다.
    cout << visited[n - 1][m - 1];

    return 0;
}