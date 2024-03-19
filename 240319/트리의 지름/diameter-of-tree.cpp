#include <iostream>
#include <vector>

using namespace std;

int n;
vector<pair<int,int>> v[100001];
bool visited[100001];
int sum;
int nodeVal[100001];

void DFS(int node) {
    for(int i = 0; i<v[node].size(); i++) {
        int nextNode = v[node][i].first;
        int weight = v[node][i].second;

        if(!visited[nextNode]) {
            visited[nextNode] = true;
            sum += weight;
            nodeVal[nextNode] = sum;
            DFS(nextNode);
            sum -= weight;
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n-1; i++) {
        int n1, n2, val;
        cin >> n1 >> n2 >> val;

        v[n1].push_back(make_pair(n2, val));
        v[n2].push_back(make_pair(n1, val));
    }

    visited[1] = true;
    DFS(1);

    int selectNode;
    for(int i = 1; i<=n; i++) {
        int val = -1;
        if(val < nodeVal[i]) {
            val = nodeVal[i];
            selectNode = i;
        }   
    }
    
    fill(visited, visited+n, false);
    fill(nodeVal, nodeVal+n, 0);

    visited[selectNode] = true;
    DFS(selectNode);

    int result = -1;
    for(int i : nodeVal)
        result = max(result, i);

    cout << result;

    return 0;
}