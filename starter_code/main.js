// Question 1 // I managed to slim this down a bit
function maxOfTwoNumbers(num1, num2) {
  if (num1>num2) {
    return num1;
    } else {
      return num2
  }
}
console.log(maxOfTwoNumbers(81, 18));

// Question 2
function maxOfThree(num1, num2, num3) {
   let value;
    if (num1>num2) {
       value = num1;
    } else {
       value = num2;
    } if (num3>value) {
       value = num3;
    }
    return value;
  }
  console.log(maxOfThree(81, 18, 322));

// Question 3 //I love Booleans
const vowels = ["a", "e", "i", "o", "u"];
function isCharacterAVowel(string) {
  for (let i = 0; i<vowels.length; i++) {
    if(string === vowels[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isCharacterAVowel("t"));

// Question 4
let leArray = [1,2,3,4,5];
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray(leArray));

//Alternate way for both multiply and sum
//I dont quite fully understand callbacks and arrow functions yet though so i don't want to claim credit!


let sum = leArray.reduce((acc, val) => {
  return acc + val;
});
console.log(sum);

let mult = leArray.reduce((acc, val) => {
  return acc * val;
});
console.log(mult);

// Question 4
function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i<array.length; i++) {
      product *= array[i];
    }
    return product;
  }
  console.log(multiplyArray(leArray));


// Question 5 //This one was quite easy once I realized arguments.length was a method.
let numberOfArguments = function() {
  return arguments.length;
}

console.log(numberOfArguments(1,2,3,"string","more string","even more string", 0));



// Question 6 //I've done this one before!//
let reverseString = function (string){
  stringArray=string.split("");
  stringReverse=stringArray.reverse();
  newString=stringReverse.join("");
  return newString;
};
console.log(reverseString("meow"));



// Question 7 //I've done this one before too!//
anArray = ['tahoe', 'trailer', 'cool ranch doritos for life', 'donkey kong']

function findLongestWord (array) {
  let wordLength= 0;
  for (let i = 0; i<array.length; i++) {
    let newNew= array[i];
    if (array[i].length>wordLength) {
      wordLength=newNew.length;
    }
  }return wordLength;
}
console.log(findLongestWord(anArray));


// Question 8 //I love arrays so much (jk)//
let arr = ['taco', 'bell', 'chili cheese fries', 'am', 'taco taco'];
let j =5;
let newArr = [];
function filterLongWords (array, num) {
  for (let i=0; i<array.length;i++) {
    let arr2 = array[i];
    if (arr2.length>num) {
      newArr.push(arr2);
    }
  }return newArr;
}
console.log(filterLongWords (arr, j));


// Bonus 1
 
function charOccursCount(string) {
  let chars = {};
  let strLc = string.toLowerCase();
  for (let i = 0; i <strLc.length; i++) {
    if (typeof chars[strLc.charAt(i)] == 'undefined') {
      chars[strLc.charAt(i)] =1;
    } else {
      chars[strLc.charAt(i)] = chars[strLc.charAt(i)] +1;
    }
  } return chars;
}

console.log(charOccursCount('General Assembly'));

