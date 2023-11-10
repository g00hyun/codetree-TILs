#include <iostream>
#include <vector>

using namespace std;

int n,m;
vector<int> g[1001];
bool visited[1001];
int cnt = 0;

void dfs(int node) {
    for(int i = 0; i<g[node].size(); i++) {
        int next_node = g[node][i];
        
        if(!visited[next_node]) {
            cnt++;
            visited[next_node] = true;
            dfs(next_node);
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<m; i++) {
        int a,b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }

    visited[1] = true;
    dfs(1);

    cout << cnt;

    return 0;
}