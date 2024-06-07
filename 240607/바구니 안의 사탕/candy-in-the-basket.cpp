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
    int tmp = 0;
    for(auto it = m.begin(); it != m.end(); it++) {
        while(it2 != m.end() && it2->first - it->first <= 2*k) {
            tmp += it2->second;
            it2++;
        }

        result = max(result, tmp);

        tmp -= it->second;
    }
    
    cout << result;

    return 0;
}