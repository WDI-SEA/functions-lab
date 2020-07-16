// Question 1
var firstNumber = 100;
var secondNumber = 200;
function maxOfTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}

maxOfTwoNumbers(firstNumber, secondNumber)



// Question 2
var thirdNumber = 300;
var fourthNumber = 400;
var fifthNumber = 500;

function maxOfThree(thirdNumber, fourthNumber, fifthNumber) {
  if (thirdNumber > fourthNumber && thirdNumber > fifthNumber) {
    console.log(thirdNumber);
  } else if (fourthNumber > thirdNumber && fourthNumber > fifthNumber) {
      console.log(fourthNumber);
  } else if (fifthNumber > thirdNumber && fifthNumber > fourthNumber) {
        console.log(fifthNumber);
    }
  }

  maxOfThree(thirdNumber,fourthNumber, fifthNumber)

// Question 3
var vowel = "a";
var isCharacterAVowel;
vowel.includes("a", "e", "i", "o", "u")

// Question 4
const array = [1,2,3,4]

function sumArray(array) {
  let result = 0;

  for(let i = 0; i < array.length; i++) {
    let num = array[i];

    result += num;
  }
  return result;
}

console.log(sumArray(array));

// Question 4
function multiplyArray(array) {
  let result = 0;

  for(let i=0; i < array.length; i++) {
    let num = array[i];
    result *= num;
  }
  return result;
}

console.log(multiplyArray(array));


// Question 5
for (var i = 0; i < 10; i++) {
  console.log(i);
}


// Question 6
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("What's up buttercup")



// Question 7
const words = ["super", "towers", "cupcake", "LeBron", "Pontificate"]

function findLongestWord (string) {
  var longestWord = 0;
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

findLongestWord(words)

// Question 8
function filterLongWords (array, i) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > i) {
      newArray.push(array[i]);
    }
  }
  return newArray
}
console.log(filterLongWords(["LeBron", "Kobe", "Jordan", "Gasol", "Bynum"]))


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}
