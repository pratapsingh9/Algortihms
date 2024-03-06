const set = (arr, i = 0) => {
  if (arr.length < i) {
    return;
  }
  set(arr, i + 1);
  console.log(arr[i]);
};

const largestnumber = (array, largestindex = 0) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[largestindex]) {
      largestindex = index;
    }
  }
  return array[largestindex];
};

const LargestNumberIndex = (array, len, index, largestindex = 0) => {
  if (index >= len - 1) {
    return array[largestindex];
  }
  if (array[index] > array[largestindex]) {
    largestindex = index;
  }
  return LargestNumberIndex(array, len, index + 1, largestindex);
};

const values = [1, 2, 3, 4, 5, 8, 1, 549, 1];
console.log(LargestNumberIndex(values, values.length, 0));

function index(array) {
  let maxindex = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[maxindex]) {
      maxindex = index;
    }
  }
  return array[maxindex];
}

const array = [5, 7, 1, 50];

console.log();
