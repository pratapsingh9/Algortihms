const PrintDeccreasing = (num) => {
  if (num === 1) {
    console.log(num);
  } else {
    console.log(num);
    PrintDeccreasing(num - 1);
  }
};

const IsArraySorted = (array, index) => {
  if(array.length - 1 === index) {
    return true;
  }
  if(array[index] > array[index+1]) {
    console.log("array is not sorted btw"  + " "+  `${index+1} Value` +  ` ${index+2} Value`);
  }
  return IsArraySorted(array, index + 1);
};

const array = [1,10,2,30];
console.log(IsArraySorted(array, 0));

const PrintIncreasing = (num, taregt) => {
  if (num > taregt) {
    return;
  }
  console.log(num);

  PrintIncreasing(++num, taregt); //num++ leads to infinte loop in this
};

const FindSum = (num) => {
  if (num == 1) {
    return 1;
  }
  return num + FindSum(num - 1);
};
// // PrintDeccreasing(8);
