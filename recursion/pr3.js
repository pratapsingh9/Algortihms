const findmax = (array, n, index, maxnum) => {
  if (index >= n) {
    return;
  }
  maxnum = Math.max(array[index], maxnum);

  return findmax(array, n, index + 1, maxnum);
};

const isArraySorted = (array, len, index) => {
  if (index >= len - 1) {
    console.log("array is sorted");
    return true;
  }
  if (array[index] < array[index + 1]) {
    return isArraySorted(array, len, index + 1);
  } else {
    console.log(`error happend at ${index} and ${index + 1} `);
    return false;
  }
};

