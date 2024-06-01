#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

int n,m;
string A[500];
string B[500];
vector<int> idx;
bool visited[50];
unordered_set<string> idx_s;
int result = 0;

bool SameComb() {
    unordered_set<string> un_s;

    // A그룹 넣기
    for(int i = 0; i<n; i++) {
        string s;

        for(int j = 0; j<m; j++)
            if(visited[j] == true)
                s += A[i][j];

        un_s.insert(s);
    }

    // B그룹 비교
    for(int i = 0; i<n; i++) {
        string s;

        for(int j = 0; j<m; j++)
            if(visited[j] == true)
                s += B[i][j];

        if(un_s.find(s) != un_s.end())
            return true;
    }

    return false;
}

void Backtracking(int cnt) {
    if(cnt == 3) {
        string s;
        for(int i = 0; i<m; i++) {
            if(idx[0] == i || idx[1] == i || idx[2] == i)
                s += '1';
            else
                s += '0';
        }
        
        if(idx_s.find(s) != idx_s.end())
            return;
        idx_s.insert(s);

        // A그룹과 B그룹간에 겹치는 조합 찾기
        if(!SameComb())
            result++;
        return;
    }

    for(int i = 0; i<m; i++) {
        if(visited[i] == false) {
            visited[i] = true;
            idx.push_back(i);
            Backtracking(cnt+1);
            idx.pop_back();
            visited[i] = false;
        }
    }
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 0; i<n; i++)
        cin >> A[i];
    
    for(int i = 0; i<n; i++)
        cin >> B[i];
        
    Backtracking(0);
    
    cout << result;

    return 0;
}