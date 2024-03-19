#include <iostream>
#include <vector>

using namespace std;

int n;
vector<int> v[100001];
int parents[100001];

void DFS(int node) {
    for(int i = 0; i < v[node].size(); i++) {
        int nextNode = v[node][i];

        if(parents[nextNode] == 0) {
            parents[nextNode] = node;
            DFS(nextNode);
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n-1; i++) {
        int n1, n2;
        cin >> n1 >> n2;

        v[n1].push_back(n2);
        v[n2].push_back(n1);
    }

    parents[1] = -1;
    DFS(1);

    for(int i = 2; i<=n; i++)
        cout << parents[i] << endl;

    return 0;
}