// Question 1
function maxOfTwoNumbers(firstNum, secondNum) {
  let myMax = 0;
  if (firstNum > secondNum) {
    myMax = firstNum;
  } else {
    myMax = secondNum;
  }
  return myMax;
}

console.log(" My max number is " + maxOfTwoNumbers(100, 200));

// Question 2
function maxOfThree(firstNum, secondNum, thirdNum) {
  let myMax = 0;
  if (firstNum < secondNum && secondNum > thirdNum) {
    myMax = secondNum;
  } else if (thirdNum > firstNum && thirdNum > secondNum) {
    myMax = thirdNum;
  } else {
    myMax = firstNum;
  }

  return myMax;
}

console.log(" My max number is " + maxOfThree(100, 500, 700));

// Question 3
function isCharacterAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}
console.log(" Is this character a vowel ? " + isCharacterAVowel("y"));

// Question 4
function sumArray(anArray) {
  let sumFinder = 0;

  for (let i = 0; i < anArray.length; i++) {
    sumFinder += anArray[i];
    //sumFinder = sumFinder + anArray [i]
  }

  return sumFinder;
}

console.log(sumArray([1, 2, 3, 4]));

// Question 4
function multiplyArray(anArray) {
  let multiplyFinder = 1;

  for (let i = 0; i < anArray.length; i++) {
    multiplyFinder *= anArray[i];
  }

  return multiplyFinder;
}
console.log(multiplyArray([1, 2, 3, 4]));

// Question 5
var numberOfArguments = function () {
  return arguments.length;
};

console.log(numberOfArguments(1, 2, 3, 4, 5, 6));

// Question 6
var reverseString = function (string) {
  let reverseMe = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseMe += string[i];
  }

  return reverseMe;
};

console.log(reverseString("tsioM"));

// Question 7
function findLongestWord(wordArray) {
  let thisWord = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > thisWord.length) {
      thisWord = wordArray[i];
    } else {
      continue;
    }
  }
  return thisWord;
}
console.log(findLongestWord(["bat", "granny", "DragonGrandMaster300"]));

// Question 8
function filterLongWords(array, y) {
  var newArray = []; //new array
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > y) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(filterLongWords(["bob", "robert", "bobert", "DOBBY"], 1));

// Bonus 1
//??????

// Bonus 2
function charactersOccurencesCount() {}
