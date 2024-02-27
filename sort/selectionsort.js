const array = [3,6,2,1,8,7,4,5,3,1];


const SelectSorts = (array) => {
  const len = array.length;
  for(let i = 0; i < len; i++) {
    let min = i;
    for(let j = i+1; j<len; j++) {
      let seconindex = j;
      if(array[min] > array[seconindex]) {
        min = j;
      }
    }
    if(min !== i) {
      let temp = array[i];
      array[i] = array[min]
      array[min] = temp
    }
  }
  return array
}

const SelectSortDescending = (array) => {
  const len = array.length;
  for(let i = 0; i < len ; i++) {
    let min = i;
    for(let j = i+1; j<len; j++) {
      if(array[min] < array[j]) {
        min = j;
      }
    }
    if(min !== i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
  }
  return array;
}



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
}

console.log(SelectSorts(array))

console.log(SelectSort(array));

console.log(SelectSortDescending(array));