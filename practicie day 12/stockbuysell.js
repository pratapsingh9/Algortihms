const buttblesort = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    for (let secondindex = index + 1; secondindex < arr.length; secondindex++) {
      if (arr[secondindex] < arr[index]) {
        [arr[secondindex], arr[index]] = [arr[index], arr[secondindex]];
      }
    }
  }
  return arr;
};
