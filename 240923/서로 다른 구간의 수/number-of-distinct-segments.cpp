#include <iostream>
#include <vector>
#include <tuple>
#include <unordered_set>
#include <algorithm>
using namespace std;

int n;
vector<tuple<int, int, int>> arr;

unordered_set<int> un_s;

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n;
    for(int i = 0; i<n; i++) {
        int start, finish;
        cin >> start >> finish;

        arr.push_back({start, 1, i});
        arr.push_back({finish, -1, i});
    }

    sort(arr.begin(), arr.end());

    int result = 0;
    for(auto i : arr) {
        auto [point, gradiant, line] = i;

        if(gradiant > 0) {
            if(un_s.size() == 0)
                result++;
            
            un_s.insert(line);
        }
        else
            un_s.erase(line);
    }

    cout << result;
    return 0;
}