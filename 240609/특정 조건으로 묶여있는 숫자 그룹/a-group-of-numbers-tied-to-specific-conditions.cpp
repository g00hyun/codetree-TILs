#include <iostream>
#include <algorithm>
#include <map>
#include <vector>
#include <set>

using namespace std;

int n,k;
int arr[50000];
map<pair<int,int>,int> m;
vector<pair<int,int>> v;

bool cmp(pair<int,int> a, pair<int,int> b) {
    if(a.second - a.first == b.second - b.first)
        return a.first < b.first;

    return a.second - a.first > b.second - b.first;
}

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++)
        cin >> arr[i];

    sort(arr, arr+n);

    // for(int i = 0; i<n; i++)
    //     cout << arr[i] << ' ';
    // cout << endl;

    int j = 0;
    int cnt = 0;
    for(int i = 0; i<n; i++) {
        while(j < n && arr[j] - arr[i] <= k) {
            j++;
        }

        if(i < j)
            v.push_back(make_pair(i,j-1));
    }

    sort(v.begin(), v.end(), cmp);

    // for(auto it : v)
    //     cout << "(" << it.first << ',' << it.second << ")" << endl;
    
    set<int> s;
    
    for(int i = v[0].first; i <= v[0].second; i++)
        s.insert(i);

    // for(auto it : s)
    //     cout << it << ' ';
    // cout << endl;
    
    int idx;
    for(idx = 1; idx<v.size(); idx++)
        if(s.find(v[idx].first) == s.end() && s.find(v[idx].second) == s.end())
            break;

    // cout << idx << endl;
    // cout << "(" << v[0].first << ',' << v[0].second << ") / (" << v[idx].first << ',' << v[idx].second << ')' << endl;
    cout << (v[0].second - v[0].first + 1) + (v[idx].second - v[idx].first + 1);

    return 0;
}