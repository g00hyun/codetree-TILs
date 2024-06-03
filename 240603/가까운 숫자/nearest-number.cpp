#include <iostream>
#include <set>
#include <algorithm>

using namespace std;

int n;
set<int> s;
int minimum;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    s.insert(0);
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        if(i == 0)
            minimum = tmp;
        else {
            auto it = s.lower_bound(tmp);
            
            if(it != s.end()) {
                minimum = min({abs(*it) - tmp, abs(*(--it) - tmp), minimum});
            }
            else {
                it--;
                minimum = min(abs((*it) - tmp), minimum);
            }

        }
        
        cout << minimum << endl;

        s.insert(tmp);
    }
    return 0;
}