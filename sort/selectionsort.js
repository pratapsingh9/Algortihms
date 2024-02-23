const array = [5,1,0,60,8,5050,102,321,6,50,64,650,74];

const SelectSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
          min = j;
        }
      }
      if (min !== i) {
        array[i] = array[i] + array[min];
        array[min] = array[i] - array[min];
        array[i] = array[i] - array[min];
        // let temp = array[i];
        // array[i] = array[j];
        // array[j] = temp;
      }
    }
    return array;
  };


console.log(SelectSort(array));