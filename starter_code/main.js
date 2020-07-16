// Question 1
function maxOfTwoNumbers(numberOne, numberTwo) {
     if (numberOne > numberTwo) {
         console.log(numberOne + " is larger than " + numberTwo);
         return numberOne;
    } else if (numberOne < numberTwo) {
        console.log(numberTwo + " is larger than " + numberOne);
        return numberTwo;
    }
} 
maxOfTwoNumbers(20, 10);

// Question 2
function maxOfThree(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log(numberOne + " is largest.");
        return numberOne; 
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log(numberTwo + " is largest.");
        return numberTwo;
    } else {
        console.log(numberThree + " is largest.");
        return numberThree;
    }
}
maxOfThree(1, 2, 3);

// Question 3
function isCharacterAVowel(letter) {
    const vowels = ["a", "e", "i", "o", "u"];

    for(i=0; i < vowels.length; i++) {
        if(letter===vowels[i]) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isCharacterAVowel("a"));

// Question 4
function sumArray(adding) {
    let total = 0 
    for(i=0; i < adding.length; i++) {
        let num = adding[i];
        total += num;
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4]));


// Question 4
function multiplyArray(multiplying) {
    let product = 1
    for(i=0; i < multiplying.length; i++) {
        let numTwo = multiplying[i];
        product *= numTwo;
    }
    return product;
}
console.log(multiplyArray([1, 2, 3, 4]));


// Question 5
var numberOfArguments = function(argument){
    let passedArguments = 0;
    for (i =0; i < arguments.length; i++) {
        let passed = argument[i];
        passedArguments += passed;
    console.log("Passed argument one: " + argument);
    }
    return passedArguments;
}
numberOfArguments([1, 2, 3, 4, 5]);
  
// Question 6
var reverseString = function (thisString){
    let newString = "";
  for (i=thisString.length - 1; i >= 0; i--) {
    newString += thisString[i];
  }
  return newString;
}
console.log(reverseString("Hello"));

// Question 7
function findLongestWord (long) {
    let longestWord = 0;
  for (i=0; i < long.length; i++) {
      if (long[i].length > longestWord) {
          longestWord = long[i].length;
          console.log("The longest word has " + longestWord + " letters.")
      }
  }
return longestWord;
}
findLongestWord(["hello", "my", "name", "is", "Tanner"]);


// Question 8
function filterLongWords (longWords, word) {
  let length = longWords.length;
  let longerWords = [];
  for (i = 0; i < length; i++) {
      if (longWords[i].length > word) {
          longerWords[longerWods.length] = longwords[i];
      }
  }
  return longerWords;
}
console.log(filterLongWords(["Hello my name is Tanner", "tanner"]))

