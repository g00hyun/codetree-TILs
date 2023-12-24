#include <iostream>
#include <vector>
#include <queue>
#include <string.h>

using namespace std;

int n, r1, r2, c1, c2;
int step[100][100];
queue<pair<int,int>> q;

int dx[8] = {1,1,-1,-1,2,2,-2,-2};
int dy[8] = {2,-2,2,-2,1,-1,1,-1};

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

bool Cango(int x, int y) {
    if(!inRange(x,y)) return false;
    if(step[x][y] != -1) return false;
    return true;
}

void Push(int x, int y, int s) {
    q.push(make_pair(x,y));
    step[x][y] = s;
}

void BFS() {
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        int s = step[x][y];
        q.pop();

        for(int i = 0; i<8; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(Cango(nx,ny)) {
                Push(nx,ny,s+1);
            }
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    cin >> r1 >> c1 >> r2 >> c2;
    r1--, r2--, c1--, c2--;

    for(int i = 0; i<n; i++)
        memset(step[i], -1, sizeof(int)*n);

    Push(r1,c1,0);
    BFS();

    // for(int i = 0; i<n; i++) {
    //     for(int j = 0; j<n; j++)
    //         cout << step[i][j] << ' ';
    //     cout << endl;
    // }
    cout << step[r2][c2];

    
    return 0;
}