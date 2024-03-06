function binarysearch(array, start, end, key) {
  let mid = Math.floor(start + (end - start) / 2);
  if (start >= end) {
    return;
  }
  if (array[mid] == key) {
    return mid;
  }
  if (array[mid] < key) {
    return binarysearch(array, mid + 1, end, key);
  } else if (array[mid] > key) {
    return binarysearch(array, start, mid - 1, key);
  }
}

function substring(string, resultString, index = 0) {
  //base case
  if (index >= string.length) {
    console.log(resultString);
  }
  //exclude string
  substring(string, resultString, index + 1);
  resultString = resultString + string[index];
  substring(string, resultString, index + 1);
  //incllude string
}

console.log(substring("singh"));
