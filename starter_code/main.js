// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1>num2) {
        return num1;
    } else if (num2>num1) {
        return num2;
    } else {
        return null;
    }
}
console.log(maxOfTwoNumbers(81, 18));

// Question 2
function maxOfThree(num1, num2, num3) {
    value = 0;
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
  console.log(sum);
}
sumArray(leArray);


// Question 4
function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i<array.length; i++) {
      product *= array[i];
    }
    console.log(product);
  }
  multiplyArray(leArray);


// Question 5 //This one was quite easy once I realized arguments.length was a method.
let numberOfArguments = function() {
  console.log(arguments.length);
}

numberOfArguments(1,2,3,"string","more string","even more string", 0);



// Question 6 //I've done this one before!//
let reverseString = function (string){
  stringArray=string.split("");
  stringReverse=stringArray.reverse();
  newString=stringReverse.join("");
  return newString;
};
console.log(reverseString("meow"));



// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

