
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumbers(9, 5));



function maxOfThree(num1, num2, num3) {
  let arr = [num1, num2, num3];
  let newArr = arr.sort();
  return newArr[2];
}

console.log(maxOfThree(8, 4, 6));



function isCharacterAVowel(letter) {
  if (letter === "a") {
    return true;
  } else if (letter === "e") {
    return true;
  } else if (letter === "i") {
    return true;
  } else if (letter === "o") {
    return true;
  } else if (letter === "u") {
    return true;
  } else {
    return false;
  }
}

console.log(isCharacterAVowel("z"));



function sumArr(numArr) {
  return numArr.reduce(function(a,b) {
    return a + b
  }, 0);
}

console.log(sumArr([2, 4, 16]));




function multArr(numArr) {
  return numArr.reduce(function(a, b) {
    return a * b
  });
}

console.log(multArr([2, 10, 5]));



function returnArgs() {
  let args = arguments.length;
  return args;
}

console.log(returnArgs("one", "two", "three", 5));



function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString("thisisaword"));



function findLongestWord(arr) {
  let longestWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
return longestWord;
}

console.log(findLongestWord(["here", "we", "goppppdpdppd", "looking"]));




function filterLongWords(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(filterLongWords([";jbcae", "akjbxliube", "ejde", "k"], 3));



function charactersOccurencesCount() {
  
}

