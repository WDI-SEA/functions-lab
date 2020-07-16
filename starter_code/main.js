// Question 1
function maxOfTwoNumbers(oneNum, twoNum) {


 if (oneNum > twoNum) {
     console.log(oneNum + " is the larger number");
 } else {
     console.log(twoNum + " is actually the largest one.")
 }
 
}
maxOfTwoNumbers(10,9);


// Question 2
function maxOfThree(oneNum, twoNum, threeNum) {

    if ((oneNum >= twoNum) && oneNum >= threeNum) {
        console.log("The " + oneNum + " is largest."); 
    } else if ((twoNum >= oneNum) && (twoNum >= threeNum)) {
        console.log("The " + twoNum + " is largest.");
    } else {
        console.log("The " + threeNum + " is largest.");
    }

}
maxOfThree(10,20,30);

// Question 3
function isCharacterAVowel(char) {
    if (char === "a" || "e" || "i" || "o" || "u") {
      console.log ("True");
    } else {
      console.log ("False");
    }
  }

  isCharacterAVowel("a");

// Question 4
function sumArray(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
      let num = array[i];
  
      result += num;
    }
   
  console.log(result);
  
  }
  
  sumArray([1,2,3,4]);

// Question 4
function multiplyArray(array) {
    let result = 1;
    for (i = 0; i < array.length; i++) {
      let num = array[i];

      result *= num;
    }
  console.log(result);

}

multiplyArray([1,2,3,4]);


// Question 5
var numberOfArguments = function(){
    let count = 0;
    for (var i = 0; i < arguments.length; i++){
      count += 1; // count = count + 1 
    }
  return count;
  }

  console.log(numberOfArguments(1,2,3,4,5));
  

//   //or 
  
//   var numberOfArguments = function() {
//     return arguments.length;
//   }
//   numberOfArguments(1,2,3,4,5);


// Question 6
var reverseString = function (str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("jag testar"));


// Question 7
function findLongestWord () {
    var word = ""
    for (i = 0; i < arguments.length; i++){
      if (arguments[i].length > word.length) {
        word = arguments[i];
      }
    }
  return word;
}

console.log(findLongestWord("Hello", "Goodbye", "Morning", "Butterfly"));


// Question 8
const arr = ['run', 'stop', 'go', 'jump', 'Goodbye'];
let j = 4;
let newArr = [];
//for loop and a if statement 
function filterLongWords (array, num){
  for (var i = 0; i < array.length; i++){
    let words = array[i]; 
    if(words.length > num){
      newArr.push(words);
    } 
  } 
return newArr;

}
console.log(filterLongWords(arr, j));


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

