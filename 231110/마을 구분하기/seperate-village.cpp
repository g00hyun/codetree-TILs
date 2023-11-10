#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n;
int arr[25][25];
vector<int> city;
int cnt;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

bool InRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

bool CanGo(int x, int y) {
    if(!InRange(x,y)) return false;
    if(arr[x][y] == 0) return false;
    return true;
}

void dfs(int x, int y) {
    for(int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];

        if(CanGo(nx, ny)) {
            cnt++;
            arr[nx][ny] = 0;
            dfs(nx,ny);
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];

    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            if(arr[i][j] == 1) {
                cnt = 0;
                arr[i][j] = 0;
                cnt++;
                dfs(i,j);
                city.push_back(cnt);
            }
    
    sort(city.begin(), city.end());

    cout << city.size() << endl;
    for(auto people : city)
        cout << people << endl;

    return 0;
}