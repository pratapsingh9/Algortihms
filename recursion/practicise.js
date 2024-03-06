const fib = (n) => {
  if (n == 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

const factorial = (num) => {
  if (num > 0) {
    if (num == 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
};

const CountNumber = (num) => {
  if (num > 0) {
    if (num == 1) {
      return 1;
    }
    return num + CountNumber(num - 1);
  }
};


const CalculateTillValue = (n, target) => {
  if (n > 0) {
    if (n == target) {
      return n;
    }
    return n + CalculateTillValue(++n, target);
  }
};
// let finaldigit = [];
const printdigits = (num, target) => {
  let finaldigits = [];
  num = num.toString().split("");
  if (num.length > target) {
    finaldigit += num[target];
    console.log(finaldigit);
    return printdigits(num, target);
  }
};

console.log(printdigits(10));
