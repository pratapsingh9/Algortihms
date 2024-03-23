const { BubbleSortAccesnding } = require("../sort/bubblesort");
const FindMixMax = (array) => {
  const len = array.length;
  BubbleSortAccesnding(array);
  const small = array[0];
  let largest = array[len - 1];
  return [small, largest];
};

const array = [1, 2, 3, 4, 5, 6];

function reverarrat(arr, len) {
  let reverarray = [];
  for (let index = 0; index < array.length; index++) {
    reverarrat[index] = arr[len - index - 1];
  }
  return reverarrat;
}

const isPalindorm = (num) => {
  num = num.toString();
  const Reversedd = num.split("");
  let newStrgin = "";
  //first approach
  for (let index = Reversedd.length - 1; index >= 0; index--) {
    newStrgin += Reversedd[index];
  }
  //Second Approach
  const length = Reversedd.length;
  for (let index = 0; index < length; index++) {
    newStrgin += Reversedd[length - index - 1];
  }
  return newStrgin == num;
};

const reverstring = (str) => {
  let starting = 0;
  let ending = str.length - 1;
  str.split("");

  while (startin < ending) {
    let temp = str[starting];
    str[starting] = str[ending];
    str[ending] = temp;
  }
  return str.join("");
};

const sorts = [1, 2, 1, 4];
const findans = (sol , index,secondindex) => {
  if (sol === undefined) {
    return "array is well sorted and no number repedtaed";
  }
  if(sol[index]  < sol[secondindex]) {
    return findans(sol ,index+1)
  }
};

const arrays = [1, 2, 78, 2, 3, 3, 4, 5, 6];


const findsort = (array,index=0,secondindex=index+1) => {
  if(array == null) {
    return null;
  }
  if(array.length-1<secondindex) {
    return true;
  }
  if(array[index] <= array[secondindex]) {
    return findsort(array, index+1,secondindex+1);
  }
  else{
    return false;
  }
}




console.log(findsort(arrays))