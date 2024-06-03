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

    auto it = s.rbegin();
    
    while(k--) {
        cout << *it-- << ' ';
    }
    return 0;
}