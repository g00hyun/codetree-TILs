#include <iostream>
#include <unordered_map>
#include <algorithm>
#include <vector>

using namespace std;

unordered_map<int, int> un_m;
int n, k;
int maximum = 0;

bool cmp(pair<int,int> a, pair<int,int> b) {
    if(a.second == b.second)
        return a.first > b.first;
    return a.second > b.second;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        un_m[tmp]++;
    }

    vector<pair<int,int>> v(un_m.begin(), un_m.end());
    sort(v.begin(), v.end(), cmp);

    for(int i = 0; i<k; i++)
        cout << v[i].first << ' ';
    return 0;
}