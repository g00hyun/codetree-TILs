#include <iostream>
#include <queue>
#include <algorithm>
#include <string.h>
#include <climits>

using namespace std;

int n, h, m;
int arr[100][100];
int step[100][100];
int result[100][100];
queue<pair<int,int>> q;

int dx[4] = {0,0,1,-1};
int dy[4] = {1,-1,0,0};

void InitStep() {
    for(int i = 0; i<n; i++)
        memset(step[i], -1, sizeof(int)*n);
}

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

bool Cango(int x, int y) {
    if(!inRange(x,y)) return false;
    if(arr[x][y] == 1) return false;
    if(step[x][y] != -1) return false;
    return true;
}

void Push(int x, int y,int s) {
    q.push(make_pair(x,y));
    step[x][y] = s;
}

void BFS() {
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for(int i = 0; i<4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(Cango(nx,ny)) {
                Push(nx,ny,step[x][y] + 1);
            }
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> h >> m;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];

    // InitStep();

    // for(int i = 0; i<n; i++)
    //     memset(result[i], -1, sizeof(int)*n);

    // Push(1,3,0);
    // BFS();

    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++) {
            if(arr[i][j] == 2) {
                InitStep();

                Push(i,j,0);
                BFS();

                result[i][j] = INT_MAX;
                for(int a = 0; a<n; a++) {
                    for(int b = 0; b<n; b++) {
                        if(arr[a][b] == 3)
                            result[i][j] = min(result[i][j], step[a][b]);
                    }
                }
            }
        }
    }

    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++)
            cout << result[i][j] << ' ';
        cout << endl;
    }


    return 0;
}