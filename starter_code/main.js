// Question 1
function maxOfTwoNumbers(argOne, argTwo) {
  if (argOne > argTwo) {
    return argOne;
  } else {
    return argTwo;
  }
}

// Question 2
function maxOfThree(argOne, argTwo, argThree) {
  if (argOne > argTwo && argOne > argThree) {
    return argOne;
  } else if (argTwo > argOne && argTwo > argThree) {
    return argTwo;
  } else { 
    return argThree;
  }
}

// Question 3
function isCharacterAVowel(argOne) {
  const characterArg = argOne.toLowerCase()
  if ((characterArg === "a" || characterArg === "e" || characterArg === "i" || characterArg === "o" || characterArg === "u") && characterArg.length == 1) {
    return true;
  } else {
    return false;
  }
}

// Question 4
function sumArray(argArr) {
  let argSum = 0;

  for(let i = 0; i < argArr.length; i++) {
    argSum += argArr[i]
  }
  
  return argSum;
}


// Question 4
function multiplyArray(argArr) {
  let argMult = 1;
  
  for(let i = 0; i < argArr.length; i++) {
    argMult *= argArr[i]
  }

  return argMult;
}


// Question 5
var numberOfArguments = function(args){
  let argLength = arguments.length;

  return argLength;
}

// Question 6
var reverseString = function (str){
  let splitString = str.split("");

  let reversedArray = splitString.reverse();

  let reversedString = reversedArray.join("");

  return reversedString;
};

// Question 7
function findLongestWord (argArr) {
  let largestArg = 0;

  for(let i = 0; i < argArr.length; i++) {
    if (argArr[i].length > largestArg) {
      largestArg = argArr[i];
    }
  }

  return largestArg;
}

// Question 8
function filterLongWords (argArr, argInt) {
  let newArray = [];
  for(let i = 0; i < argArr.length; i++) {
    if ((argArr[i].length <= argInt)) {
      newArray.append(argArr[i])
    }
  }

  return newArray
}


// Bonus 2
function charactersOccurencesCount(argString) {
  let countedArray = [];
  let lowerString = argString.toLowerCase();

  for(let i = 0; i < lowerString.length; i++) {
    let stringWord = lowerString.charAt(i);
    if (!(stringWord in countedArray)) {
      countedArray[stringWord] = 0;
    }
    countedArray[stringWord]++
  }
  
  return countedArray;
}

