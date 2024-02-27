const PrintDeccreasing = (num) => {
  if (num === 1) {
    console.log(num);
  } else {
    console.log(num);
    PrintDeccreasing(num - 1);
  }
};

const array = [1, 10, 2, 30];

const FirstOccurnce = (array, key, index) => {
  if (index === array.length - 1) {
    return index;
  }
  if (index > array.length - 1) {
    return false;
  }
  if (array[index] === key) {
    return index;
  }
  return FirstOccurnce(array, key, index + 1);
};

//cont array  = [1,2,3,4,5,6,7,8,9,10]

const IsArraySorted = (array, index) => {
  if (array.length - 1 === index) {
    return true;
  }
  if (array[index] > array[index + 1]) {
    console.log(
      "array is not sorted btw" +
        " " +
        `${index + 1} Value` +
        ` ${index + 2} Value`
    );
  }
  return IsArraySorted(array, index + 1);
};

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

//find last occureneccence of index in the array
const LastOccurence = (arr, key, index) => {
  let length = arr.length;
  if (arr.length - 1 === 0) {
    return "Single index not capable for Calculation";
  }
  if (index > -length) {
    if (arr[index] === key) {
      return `value is preset at ${index}`;
    }
    return LastOccurence(arr, key, --index);
  }
};

const powers = (num, power) => {
  if (power === 1) {
    return num;
  } else if (power > 1) {
    return num * powers(num, power - 1);
  }
};

const WaysToTile = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (num === 2) return 2;
  else {
    return WaysToTile(num - 1) + WaysToTile(num - 2);
  }
};

const RemoveDuplicaton = (str, index = 0, newString = "") => {
  if (index === str.length) {
    return newString;
  }
  if (!newString.includes(str[index])) {
    newString += str[index];
  }

  return RemoveDuplicaton(str, index + 1, newString);
};

const FindDuplicaton = (n) => {
  if (n <= 1) {
    return 1;
  }
  return FindDuplicaton(n - 1)  + (n-1) * FindDuplicaton(n-2);
};

console.log(FindDuplicaton(4));
