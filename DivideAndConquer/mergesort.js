const merge = arra;

const MergeSort = (array, si, ei) => {
  if (si >= ei) {
    return;
  }
  const mid = si + (ei - si) / 2;

  MergeSort(array, 0, mid);
  MergeSort(array, mid + 1, ei);
};

const printarray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
//time complexity wil be O(n log(n