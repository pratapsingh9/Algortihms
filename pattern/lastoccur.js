const lastoccure = (string, target, index = string.length - 1, lastindex) => {
  if (index < 0) {
    return lastindex;
  }
  if (string[index] == target) {
    lastindex = index;
    return lastindex;
  } else {
    return lastoccure(string, target, index - 1, lastindex);
  }
};

let f = "[";
let j = "]";

const valid = (string) => {
  return string;
};

console.log(valid("pratap singh sisodiya"));

const validchekc = (string, firstindex = 0, lastindex = string.length - 1) => {
  const length = string.length;
  console.log(string);
  if (length % 2 != 0) {
    return " backchodi mat kar lwde ";
  }
  if (firstindex > length / 2 - 1 || lastindex < length / 2) {
    return true;
  }
  if (string[firstindex] == f && string[lastindex] == j) {
    return validchekc(string, firstindex + 1, lastindex - firstindex);
  } else {
    return false;
  }
};
let string = "pratap singh sisodiya";
console.log(validchekc("[[]]"))
// console.log
