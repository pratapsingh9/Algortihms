
const checkPalindorme = (string, start = 0) => {
  if (string === "") {
    return false;
  }
  if (start < string.length - 1) {
    if (string[start] !== string[string.length - 1 - start]) {
      return false;
    } else if (string[start] == string[string.length - 1 - start]) {
      console.log(`palindorome is thered`);
    }
    checkPalindorme(string, start + 1);
  }
};

// const rebui

const SwiperString = (string, start = 0, end = -1) => {
  if (start >= end) {
    return;
  } else {
    string[(start, end)] = string[(end, start)];
    console.log(string);
    return SwiperString(start, start + 1, end);
  }
}

const randomPassword = () => {
  let password = Math.random().toString().slice(2) + Math.random().toString(36).toUpperCase().slice();
  return password
}
const generaterandompassword = (length) => {
  let password =
    Math.random().length(length).toString().slice(2) +
    Math.random().toUpperCase().length(length);
};

randomPassword();

const stringLength = (str) => {
  if (str === "") {
    return 0;
  } else {
    return 1 + stringLength(str.substring(1));
  }
};

const print = (func) => console.log(func);

const findmaxadjacents = (array) => {
  let include = 0;
  let exclude = 0;
  for (let i = 0; i < array.length; i++) {
    let newexclude = Math.max(include, exclude);
    include = exclude + array[i];
    exclude = newexclude;
  }8
  return Math.max(include, exclude);
};

const answer = findmaxadjacents([0,67,8,5,4,3])

console.log(answer)