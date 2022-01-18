// Reverse a String
function reverse(str) {
  let newStr = "";
  arrStr = [...str];

  for (i = str.length - 1; i > -1; i--) {
    newStr += arrStr[i];
  }

  return newStr;
}

//Number to String
function numberToString(num) {
  return num.toString();
}

//ENCODE
function duplicateEncode(word) {
  let arr = [...word.toUpperCase()];

  let newstr = "";

  for (i = 0; i < arr.length; i++) {
    let newWord = arr.filter((letter) => letter == word.toUpperCase()[i]);

    let num = newWord.length;

    if (num == 1) {
      newstr += "(";
    } else if (num > 1) {
      newstr += ")";
    }
  }

  return newstr;
}

//sum of numbers in between
function getSum(a, b) {
  let sum = 0;
  let biggerNum;
  if (a > b) {
    biggerNum = a;
    smallerNum = b;
  } else if (b > a) {
    biggerNum = b;
    smallerNum = a;
  } else {
    return a;
  }

  for (i = smallerNum; i < biggerNum + 1; i++) {
    sum += i;
  }

  return sum;
}

//PIN validation
function validatePIN(pin) {
  let arr = [...pin];

  let hasInvalid = arr.some((element) => isNaN(parseInt(element)));

  let areAllNumbers = !hasInvalid;

  let isValidLength = false;

  if (pin.length == 4 || pin.length == 6) {
    isValidLength = true;
  }

  return areAllNumbers && isValidLength;
}

//Convert decimal to binary
function addBinary(a, b) {
  return (a + b).toString(2);
}

//find the smallest int
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];

    for (let i = 0; i < args.length; i++) {
      if (min > args[i]) {
        min = args[i];
      }
    }

    return min;
  }
}

var summation = function (num) {
  let sum = 0;

  for (i = 1; i < num + 1; i++) {
    sum += i;
  }

  return sum;
};

function longest(s1, s2) {
  let combinedStr = s1 + s2;

  let combinedArr = [...combinedStr];

  let filtered = new Set(combinedArr);

  let filteredStr = "";
  filtered.forEach((value) => {
    filteredStr += value;
  });

  return filteredStr;
}

function abbrevName(name) {
  {
    const splited = name.split(" ");

    const firstname = splited[0];

    const lastname = splited[1];

    const initial =
      firstname[0].toUpperCase() + "." + lastname[0].toUpperCase();

    return initial;
  }
}

//Ends with
function endsWith(str, ending) {
  let splitedArr = str.split(str[str.length - ending.length - 1]);

  if (ending == splitedArr[splitedArr.length - 1]) {
    return true;
  }

  return false;
}

var isSquare = function (n) {
  const isFloat = Math.sqrt(n).toString().includes(".");
  if (!isFloat && n > -1) {
    return true;
  }
  return false;
};

function isValidWalk(walk) {
  if (walk.length == 10 && walk[walk.length - 1] == "s") {
    return true;
  }
  return false;
}

const binaryArrayToNumber = (arr) => {
  let string = "";

  arr.forEach((thing) => {
    string += thing.toString();
  });

  return parseInt(string, 2);
};

function wave(str) {
  let arr = [];

  let newStr = str.replace(" ", "");

  for (let i = 0; i < newStr.length; i++) {
    arr.push(newStr.replace(newStr[i], newStr[i].toUpperCase()));
  }
  return arr;
}

function solution(string) {
  let index;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() == string[i]) {
      index = i;
    }
  }

  let newString = string.split(string[index]);

  let finalString = newString[0] + " " + string[index] + newString[1];

  return finalString;
}

function reverseWords(str) {
  let newstr = "";
  const words = str.split(" ");

  console.log(words);

  words.forEach((word) => {
    for (i = word.length; i > -1; i--) {
      word += word[i];
    }
    newstr += " " + word;
  });

  return newstr;
}

// algorithms big 0 notation
// sum of array

const sumofarr = (arr) => {
  let result = 0;

  arr.map((item) => (result += item));

  return result;
};

// time complexity
// T = O(n) = n so linear time complexity

function sumTwoSmallestNumbers(allnumbers) {
  let numbers = allnumbers.filter((allnums) => allnums > 0);

  if (numbers.length < 4) {
    return;
  }
  let min1 = numbers[0];
  let min2 = numbers[1];

  min1 = Math.min(...numbers);
  let index = numbers.indexOf(min1);
  // let numbers2 = numbers.splice()

  let numbers2 = numbers.filter((num) => numbers.indexOf(num) != index);

  min2 = Math.min(...numbers2);

  console.log(min1, min2);

  return min1 + min2;
}

// the example
// Let P be the Principal = 1000.00
// Let I be the Interest Rate = 0.05
// Let T be the Tax Rate = 0.18
// Let D be the Desired Sum = 1100.00

// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    let interestamount = principal * interest;

    let taxamount = principal * interest * tax;

    let added = interestamount - taxamount;

    principal += added;

    years++;
  }

  return years;
}

function likes(names) {
  if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]},${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]},${names[1]} and ${names.length - 2} like others this `;
  } else {
    return `no one likes this`;
  }
}

function tribonacci(signature, n) {
  if (n < 1) {
    return [];
  }

  if (n == 1) {
    return [signature[0]];
  }

  for (let i = 1; i < n + 1; i++) {
    if (signature.length >= n) {
      return signature;
    }

    let num =
      signature[signature.length - 1] +
      signature[signature.length - 2] +
      signature[signature.length - 3];
    signature.push(num);
  }

  return signature;
}

function rowSumOddNumbers(n) {
  //calculate the first  number
  let firstnth = 0;

  for (let i = n; i > 0; i--) {
    firstnth += i;
  }
  let firstnum = (firstnth - 1) * 2 - 1;

  console.log(firstnum);

  let lastnumnth = firstnth + n - 1;

  let lastnum = lastnumnth * 2 - 1;

  console.log(lastnum);
  let sum = 0;

  for (i = firstnum; i < lastnum; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }

  return sum;
}

function highAndLow(numbers) {
  let string = "";

  let numarr = numbers.split(" ");

  if(numarr.length == 1) {
    return `${numarr[0]} ${numarr[0]}`
  }

  let min = parseInt(numarr[0]);

  let max = parseInt(numarr[1]);

  for (let i = 0; i < numarr.length; i++) {
    if (parseInt(numarr[i]) > max) {
      max = numarr[i];
    }
  }

  for (let i = 0; i < numarr.length; i++) {
    if (parseInt(numarr[i]) < min) {
      min = numarr[i];
    }
  }

  string = `${max} ${min}`;

  return string
}

