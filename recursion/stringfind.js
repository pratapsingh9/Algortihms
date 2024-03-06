let count = 0;
const findstring = (string, index, target, count) => {
  if (index >= string.length) {
    return;
  }
  if (string[index] === target) {
    count++;
    console.log(count);
  }
  return findstring(string, index + 1, target, count);
};

// const resul = [1,2,3,4,5,6,7];
const result = [];
const template = (array, result = [], index = 0) => {
  if (index >= array.length) {
    return;
  }
  if (array[index] % 2 == 0) {
    result.push(array[index]);
    return template(array, index + 1);
  }
};
const arrayofyears = [
  2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 200040, 2012, 2016, 202,
  2020, 2024, 2028, 2032,
];

const ans = template(arrayofyears, result);
console.log(ans);
console.log(result);
// let ans = [];
const printing = (arr) => {
  let len = arr.length;
  for (let index = 0; index < len; index++) {
    console.log(arr[index]);
  }
};
const PrintDigit = (num) => {
  if (num == 0) {
    return;
  }
  let digit = num % 10;
  console.log(digit);
  PrintDigit(Math.floor(num / 10));
};

const chekc = (array, number, index, secondindex) => {
  if (array.length - 1 <= index) {
    return;
  }
};
