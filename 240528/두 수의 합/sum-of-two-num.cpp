#include <iostream>
#include <unordered_map>

using namespace std;

unordered_map<int, int> un_m;
int n,k;
int arr[100000];

int main() {
    // 여기에 코드를 작성해주세요.
    cin >> n >> k;
    for(int i = 0; i<n; i++)
        cin >> arr[i];
    
    for(int i = 0; i<n-1; i++)
        for(int j = i+1; j<n; j++)
            un_m[arr[i] + arr[j]]++;
    
    cout << un_m[k];
    return 0;
}