#include <iostream>
#include <set>

using namespace std;

int n,k;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;

    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        s.insert(tmp);
    }
    
    while(k--) {
        int m = *s.rbegin();
        s.erase(m);
        cout << m << ' ';
    }
    return 0;
}