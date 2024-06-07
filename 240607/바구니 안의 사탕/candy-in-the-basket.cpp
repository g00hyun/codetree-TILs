#include <iostream>
#include <map>
#include <algorithm>

using namespace std;

int n,k;
map<int,int> m;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    while(n--) {
        int a,b;
        cin >> a >> b;

        m[b] = a;
    }

    int result = 0;
    auto it2 = m.begin();
    for(auto it = m.begin(); it != m.end(); it++) {
        // cout << it->first << ' ';
        int tmp = 0;
        while(it2 != m.end() && it2->first - it->first <= 2*k) {
            tmp += it2->second;
            it2++;
        }

        // int sum = 0;
        // for(auto tmp = it; tmp != it2; tmp++)
        //     sum += tmp->second;
        // sum += it2->second;

        result = max(result, tmp);
    }

    // cout << endl;
    cout << result;

    return 0;
}