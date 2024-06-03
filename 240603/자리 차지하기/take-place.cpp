#include <iostream>
#include <set>

using namespace std;

int n,m;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> m;
    for(int i = 1; i<=m; i++)
        s.insert(i);

    int result = 0;
    while(n--) {
        int tmp;
        cin >> tmp;

        auto it = s.lower_bound(tmp);

        if(*it != tmp) it--;

        if(*it > tmp) break;

        s.erase(*it);
        result++;
    }

    cout << result;
    return 0;
}