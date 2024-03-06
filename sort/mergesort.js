function mergeArray(array, startingIndex, midIndex, endingIndex) {
  let temp = new []();
  let i = startingIndex + 1;
  let j = midIndex + 1;
  let k = 0; //iteratior for temproraty index
  while (i <= mid && j <= endingIndex) {
    if (array[i] < array[j]) {
      temp[k] = array[i];
      i++;
      k++;
    }
  }
}

const mergesort = (array, startingIndex, endingIndex) => {
  let midIndex = startingIndex + (endingIndex - startingIndex) / 2;
  if (startingIndex > endingIndex) {
    return;
  }
  mergesort(array, startingIndex, midIndex);
  mergesort(array, midIndex + 1, endingIndex);
  mergeArray(array, startingIndex, midIndex, endingIndex);
};

const array = [1, 8, 0, 1, 45, 84, 65, 498, 4, 8, 4, 94, 9, 49, 81];

const ans = mergesort(array, 0, array.length - 1);
