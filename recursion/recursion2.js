

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

const SwiperString = (string, start = 0, end = -1) => {
  if (start >= end) {
    return;
  } else {
    string[(start, end)] = string[(end, start)];
    console.log(string);
    return SwiperString(start, start + 1, end);
  }
};

function randomPassword() {
	console.log(
		Math.random().toString(36).slice(2) +
		Math.random().toString(36)
		.toUpperCase().slice(2));
}

const generaterandompassword = (length) => {
  let password = Math.random().length(length).toString().slice(2) + Math.random().toUpperCase().length(length)
}

randomPassword();


const stringLength = (str) => {
  if (str === "") {
    return 0;
  } else {
    return 1 + stringLength(str.substring(1));
  }
};

const print = func => console.log(func)


print(stringLength("checknumber123"))

print(randompasswordgenerator(15))

