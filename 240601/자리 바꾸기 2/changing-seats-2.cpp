#include <iostream>
#include <unordered_set>
#include <vector>

using namespace std;

int n, k;
vector<pair<int, int>> order;
unordered_set<int> result[100001];
int arr[100001];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 1; i<=n; i++) {
        arr[i] = i;
        result[i].insert(i);
    }

    for(int i = 0; i<k; i++) {
        int a,b;
        cin >> a >> b;

        order.push_back(make_pair(a,b));
    }

    // for(int i = 1; i<=n; i++)
    //     cout << arr[i] << ' ';
    // cout << endl;

    for(int r = 0; r<3; r++) {
        for(int i = 0; i<k; i++) {
            int a,b;
            a = order[i].first, b = order[i].second;

            int tmp;
            tmp = arr[a];
            arr[a] = arr[b];
            arr[b] = tmp;

            // for(int i = 1; i<=n; i++)
            //     cout << arr[i] << ' ';
            // cout << endl;

            // cout << "Index: " << arr[a] << " / Value: " << a << endl; 
            // cout << "Index: " << arr[b] << " / Value: " << b << endl; 
            // cout << endl;

            result[arr[a]].insert(a);
            result[arr[b]].insert(b);
        }
    }

    for(int i = 1; i<=n; i++)
        cout << result[i].size() << endl;

    return 0;
}