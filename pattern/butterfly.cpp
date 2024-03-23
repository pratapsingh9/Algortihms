#include <bits/stdc++.h>
using namespace std;
int butterflyPattern(int n)
{
    for (int i = 0; i < 2 * n; i++)
    {
        for (int j = 0; j < 2 * n; j++)
        {
            cout << "*" << endl;
        }
        cout << endl;
    }
}

int butterfly(int arr) {
    cout << arr << endl;
}

int main()
{
    butterflyPattern(4);
    return 0;
}