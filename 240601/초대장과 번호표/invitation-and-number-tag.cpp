#include <iostream>
#include <unordered_set>
#include <vector>
#include <algorithm>

using namespace std;

int n,g;
vector<int> group[100000];
unordered_set<int> result;

bool cmp(vector<int> a, vector<int> b) {
    if(a.size() == b.size()) {
        for(int i = 0; i<a.size(); i++)
            if(a[i] != b[i])
                return a[i] < b[i];
    }
    return a.size() < b.size();
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> g;
    for(int i = 0; i<g; i++) {
        int size;
        cin >> size;

        for(int j = 0; j<size; j++) {
            int tmp;
            cin >> tmp;

            group[i].push_back(tmp);
        }
        sort(group[i].begin(), group[i].end());
    }

    sort(group, group + g, cmp);
    
    result.insert(1);

    // for(int i = 0; i<g; i++) {
    //     for(auto a : group[i])
    //         cout << a << ' ';
    //     cout << endl;
    // }

    bool isBreak = false;
    while(!isBreak) {
        isBreak = true;

        for(int i = 0; i<g; i++) {
            int size = group[i].size();
            if(size == 0) continue;

            vector<int> tmp = group[i];

            for(int j = 0; j<group[i].size(); j++) {
                if(result.find(group[i][j]) != result.end()) {
                    size--;
                    group[i][j] = 0;
                }
            }

            if(size == 1) {
                for(int j = 0; j<group[i].size(); j++)
                    if(group[i][j] != 0)
                        result.insert(group[i][j]);
                group[i].clear();
                isBreak = false;
            }
            else
                group[i] = tmp;
        }
    }

    cout << result.size();
    // cout << endl;
    // for(auto a : result)
    //     cout << a << ' ';

    return 0;
}