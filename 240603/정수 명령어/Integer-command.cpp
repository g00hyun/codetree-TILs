#include <iostream>
#include <set>

using namespace std;

int t,k;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> t;

    while(t--) {
        s.clear();
        cin >> k;

        while(k--) {
            char c;
            int val;
            cin >> c >> val;

            if(c == 'I') {
                s.insert(val);
            }

            if(c == 'D') {
                if(s.size() != 0) {
                    if(val == 1) {
                        s.erase(*s.rbegin());
                    }
                    else {
                        s.erase(*s.begin());
                    }
                }
            }
        }

        if(s.size())
            cout << *s.rbegin() << ' ' << *s.begin() << endl;
        else
            cout << "EMPTY" << endl;
    }
    return 0;
}