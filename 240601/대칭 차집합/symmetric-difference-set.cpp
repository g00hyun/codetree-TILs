#include <iostream>
#include <unordered_set>

using namespace std;

int a,b;
unordered_set<int> un_s_a;
unordered_set<int> un_s_b;
int arr_a[200000];
int arr_b[200000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> a >> b;

    for(int i = 0; i<a; i++) {
        cin >> arr_a[i];
        un_s_a.insert(arr_a[i]);
    }
    
    for(int i = 0; i<b; i++) {
        cin >> arr_b[i];
        un_s_b.insert(arr_b[i]);
    }
    
    int cnt_a = 0;
    for(int i = 0; i<a; i++)
        if(un_s_b.find(arr_a[i]) != un_s_b.end())
            cnt_a++;
    
    int cnt_b = 0;
    for(int i = 0; i<b; i++)
        if(un_s_a.find(arr_b[i]) != un_s_a.end())
            cnt_b++;

    cout << a + b - cnt_a - cnt_b;

    return 0;
}