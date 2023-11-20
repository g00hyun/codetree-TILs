#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
int initArr[50][50];
int kFloodingArr[50][50];
pair<int, int> p;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

/* 
    1. Input
    2. k를 1씩 증가하면서 침수 배열 만들기
    3. 침수 배열에서 마을의 수 구하기
        a. kFlooding 배열 초기화
        b. 마을 수 세기
    4. k값에 따른 마을의 수가 최대 마을의 수보다 크다면 swap
    4. 2,3 내용 반복
*/

void Print() {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++)
            cout << kFloodingArr[i][j] << ' ';
        cout << endl;
    }
}

int MaximumValue() {
    int maximum = 0;

    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)
            maximum = max(maximum, initArr[i][j]);

    return maximum;
}

bool isFlooding() {
    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)
            if(kFloodingArr[i][j] != 0)
                return false;
    return true;
}

void Init() {
    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)
            kFloodingArr[i][j] = initArr[i][j];
}

void Flooding(int k) {
    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)
            if(kFloodingArr[i][j] <= k)
                kFloodingArr[i][j] = 0;
}

bool InRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool CanGo(int x, int y) {
    if(!InRange(x,y)) return false;
    if(kFloodingArr[x][y] == 0) return false;
    return true;
}

void dfs(int x, int y) {
    for(int i = 0; i<4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];

        if(CanGo(nx, ny)) {
            kFloodingArr[nx][ny] = 0;
            dfs(nx,ny);
        }
    }
}

void fillWater() {
    for(int k = 1; k <= MaximumValue(); k++) {
        Init();
        Flooding(k);

        int cnt = 0;
        for(int i = 0; i < n; i++)
            for(int j = 0; j < m; j++)
                if(kFloodingArr[i][j] != 0) {
                    cnt++;
                    kFloodingArr[i][j] = 0;
                    dfs(i,j);
                }

        if(cnt > p.second)
            p = make_pair(k, cnt);
    }
    
    // cout << "k : " << k << "/ cnt : " << cnt << endl;

}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i < n; i++)
        for(int j = 0; j < m; j++)
            cin >> initArr[i][j];

    p = make_pair(0,0);
    fillWater();
    cout << p.first << ' ' << p.second << endl;

    // Init();
    // Flooding(2);
    // Print();
    return 0;
}