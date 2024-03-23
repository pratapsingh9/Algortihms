const insetionsort = (array) => {
  for (let index = 0; index < array.lenght; index++) {
    let currenindex = array[index];
    let secondindex = index - 1;
    while (secondindex >= 0 && array[secondindex] > currenindex) {
      array[secondindex + 1] = array[secondindex];
      secondindex--;
    }
    array[secondindex] = currenindex
  }
  return array
};

const array = [1, 8, 0, 1, 45, 84, 65, 498, 4, 8, 4, 94, 9, 49, 81];

const ans = insetionsort(array);

console.log(ans);
const stockbuy  = (array) => {

}