#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;

int n,k,m;
int arr[101][101];
int visited[101][101];
pair<int,int> point[10000];
queue<pair<int,int>> q;
int result = 0;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

//backtraking + BFS
// 임의의 돌이 있는 경우에서 m개를 뽑아 0으로 바꾼 맵상태에서 BFS적용
// 조합을 반복하며 최댓값 구하기

bool inRange(int x, int y) {
    return 1 <= x && x <= n && 1 <= y && y <= n;
}

bool CanGo(int x, int y) {
    if(!inRange(x,y)) return false;
    if(arr[x][y] == 1) return false;
    if(visited[x][y] == 1) return false;
    return true;
}

void Push(int x, int y) {
    visited[x][y] = 1;
    q.push(make_pair(x,y));
}

int BFS() {
    int cnt = 1;
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for(int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            if(CanGo(nx,ny)) {
                cnt++;
                Push(nx,ny);
            }
        }
    }
    return cnt;
}

void backtraking(int dol) {
    if(dol == m) {
        int sum = 0;
        for(int p = 0; p < k; p++) {
            int x = point[p].first;
            int y = point[p].second;

            if(CanGo(x,y)) {
                Push(x, y);
                sum += BFS();
            }
        }
        result = max(result, sum);
        for(int i = 1; i <= n; i++)
            for(int j = 1; j <= n; j++)
                visited[i][j] = 0;
        return;
    }

    for(int i = 1; i <= n; i++)
        for(int j = 1; j <= n; j++)
            if(arr[i][j] == 1) {
                // cout << "hlhl" << endl;
                arr[i][j] = 0;
                backtraking(dol+1);
                arr[i][j] = 1;
            }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k >> m;
    for(int i = 1; i <= n; i++)
        for(int j = 1; j <= n; j++)
            cin >> arr[i][j];
    for(int p = 0; p < k; p++) {
        int x,y;
        cin >> x >> y;
        point[p] = make_pair(x,y);
    }

    backtraking(0);

    // for(int i = 1; i <= n; i++) {
    //     for(int j = 1; j <= n; j++)
    //         cout << visited[i][j] << ' ';
    //     cout << endl;
    // }
    cout << result;
    return 0;
}