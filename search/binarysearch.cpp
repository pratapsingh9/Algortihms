// Binary Search in C++
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int solve(int n, int x, int y, int z)
{
  if (n == 0)
  {
    return 0;
  }
  if (n < 0)
  {
    return INT_MIN;
  }
  int ans1 = solve(n - x, x, y, x);
  int ans2 = solve(n - y, x, y, x);
  int ans3 = solve(n - z, x, y, x);

  int answer = max(ans1, max(ans2, ans3));
  return answer;
}



int binarySearch(int array[], int x, int low, int high)
{
  while (low <= high)
  {
    int mid = low + (high - low) / 2;
    if (array[mid] == x)
      return mid;
    if (array[mid] < x)
      low = mid + 1;
    else
      high = mid - 1;
  }
  return -1;
}

int selectionsort(int* array[], int n)
{
  for (int i = 0; i < n; i++){
    int index = i;
    for (int j = i + 1; j < n; j++){
      int secondindex = j;
      if (array[index] > array[secondindex]) {
        index = secondindex;
      }
    }
    if(index != i) {
      int temp = array[index];
      array[index] = array[i];
      array[i] = temp;
    }
  }
  return array;
}


int main()
{
  int array[]  = {9,8,7,6,5,4,43,214,23};
  cout << array << endl;
  return 0;
}