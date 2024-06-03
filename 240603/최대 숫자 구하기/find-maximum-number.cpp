#include <iostream>
#include <set>

using namespace std;

int n,m;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> m >> n;
    for(int i = 1; i<=n; i++)
        s.insert(i);
    
    for(int i = 0; i<m; i++) {
        int tmp;
        cin >> tmp;

        s.erase(tmp);

        cout << *s.rbegin() << endl;
    }
    return 0;
}