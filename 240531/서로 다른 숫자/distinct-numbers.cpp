#include <iostream>
#include <unordered_set>

using namespace std;

int n;
unordered_set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int tmp;
        cin >> tmp;

        s.insert(tmp);
    }

    int result = 0;
    for(auto it = s.begin(); it != s.end(); it++)
        result++;

    cout << result;
    
    return 0;
}