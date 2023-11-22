#include <iostream>
#include <vector>
#include <queue>
#include <utility>

using namespace std;

int n, k;
int arr[100][100];
vector<pair<int,int>> points;
queue<pair<int,int>> q;

int dx[4] = {1,-1,0,0};
int dy[4] = {0,0,1,-1};

void Print() {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++)
            cout << arr[i][j] << ' ';
        cout << endl;
    }
}

bool inRange(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

bool CanGo(int x, int y) {
    if(!inRange(x,y)) return false;
    if(arr[x][y] == 1) return false;
    return true;
}

void Push(int x, int y) {
    arr[x][y] = 1;
    q.push(make_pair(x,y));
}

int BFS() {
    int step = 1;
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();

        for(int dir = 0; dir < 4; dir++) {
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            if(CanGo(nx, ny)) {
                Push(nx, ny);
                step++;
            }
        }
    }
    return step;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++)
        for(int j = 0; j<n; j++)
            cin >> arr[i][j];
    
    for(int i = 0; i<k; i++) {
        int x,y;
        cin >> x >> y;
        points.push_back(make_pair(x,y));
    }

    int result = 0;
    for(int point = 0; point < points.size(); point++)
        for(int i = 0; i<n; i++)
            for(int j = 0; j<n; j++)
                if(i == points[point].first - 1 && j == points[point].second - 1 && CanGo(i,j)) {
                    Push(i,j);
                    result += BFS();
                }

    // Print();
    cout << result;

    return 0;
}