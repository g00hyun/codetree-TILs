#include <iostream>
#include <set>
#include <algorithm>
#include <climits>

using namespace std;

int n,m;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;

    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        s.insert(tmp);
    }

    int minimum = INT_MAX;
    for(auto it = s.begin(); it != s.end(); it++) {
        auto findVal = s.lower_bound(*it + m);

        if(findVal != s.end())
            minimum = min(minimum, *findVal - *it);
    }

    (minimum == INT_MAX) ? cout << -1 : cout << minimum;

    return 0;
}