#include <iostream>
#include <map>
using namespace std;

int n, k;
// int arr[1000000000];
map<int, int> m;

int dirToInt(char dir) {
    return dir == 'R' ? 1 : -1;
}

int main() {
    // 여기에 코드를 작성해주세요.
    int point = 0;
    cin >> n >> k;
    for(int i = 0; i < n; i++) {
        int len;
        char dir;

        cin >> len >> dir;

        int nextPoint = dirToInt(dir) * len + point;

        if(dir == 'R') {
            m[point]++;
            m[nextPoint]--;
        }
        else {
            m[point]--;
            m[nextPoint]++;
        }

        point = nextPoint;
    }

    bool isFirst = true;
    int nowIdx, nowCounting;
    int result = 0;
    bool isAdd = false;
    for(auto it : m) {
        if(isFirst) {
            isFirst = false;
            nowIdx = it.first;
            nowCounting = it.second;

            if(nowCounting >= k)
                isAdd = true;
            continue;
        }

        int nextIdx = it.first;
        int nextCounting = it.second;

        if(isAdd)
            result += nextIdx - nowIdx;
        
        isAdd = false;
        if(nowCounting + nextCounting >= k)
            isAdd = true;

        nowIdx = nextIdx;
        nowCounting += nextCounting;
    }

    cout << result;


    return 0;
}