#include <iostream>
#include <set>

using namespace std;

int n;
set<int> s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;

    while(n--) {
        string tmp;
        cin >> tmp;

        if(tmp == "add") {
            int val;
            cin >> val;

            s.insert(val);
        }
            
        if(tmp == "remove") {
            int val;
            cin >> val;

            s.erase(val);
        }
        if(tmp == "find") {
            int val;
            cin >> val;

            (s.find(val) != s.end()) ? cout << "true" << endl : cout << "false" << endl;
        }
        if(tmp == "lower_bound") {
            int val;
            cin >> val;

            s.lower_bound(val) != s.end() ? cout << *s.lower_bound(val) << endl : cout << "None" << endl;
        }
        if(tmp == "upper_bound") {
            int val;
            cin >> val;

            s.upper_bound(val) != s.end() ? cout << *s.upper_bound(val) << endl : cout << "None" << endl;
        }

        if(tmp == "largest")
            s.size() != 0 ? cout << *s.rbegin() << endl : cout << "None" << endl;

        if(tmp == "smallest")
            s.size() != 0 ? cout << *s.begin() << endl : cout << "None" << endl;

    }
    return 0;
}