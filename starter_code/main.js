// Question 1
const otherNum =[10, 20];
function maxOfTwoNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        
        if (num < 20) {
            console.log(num + " is greater. ")
        } else {
            console.log(num + " is lesser. ")
        }
    }
}

maxOfTwoNumbers(otherNum);

// // Question 2

const otherNum1 =[10, 20,30];
 function maxOfThree(array) {
    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        
        if (num1 < 30) {
            console.log(num1 + " is greater. ")
        } else {
            console.log(num1 + " is lesser. ")
        }
    }
}

maxOfThree(otherNum1);


// // Question 3
 function isCharacterAVowel(char) {

      let vowels = 'aeiou';

      let index = vowels.indexof(char); // console.log(index);

        if (index  === -1) {
            return false;
        } else {
            return true;
        }
     }
    
console.log(isCharacterAVowel('a'));
console.log(isCharacterAVowel('y'));

// // Question 4
 function sumArray(array) {
     var sum = 0; // need to define to 0 
     for (var i = 0; i < array.length; i++) {
         sum += array[i];
     }
     return sum; // print result
 
 }
 console.log(sumArray([1,2,3,4])); // 10

// // Question 4
 function multiplyArray(array) {
     var mul = 1; // multiply 1, can't be 0
     for (var i = 0; i < array.length; i++) {
         mul *= array[i];
     }
     return mul;
 }
 console.log(multiplyArray([1,2,3,4])); //24 


// // Question 5
 var numberOfArguments = function (){
  console.log(arguments);
  var sum = 0;
  
  for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}

console.log(numberOfArguments(3,4,7)); // 14


// // Question 6
 //var reverseString = function (){
  
    var reverse = function(string) {
        var length = string.length;
        var reversed = [];
        var join = ("");
        for (i = length; i > 0; i--){
          reversed.push(string.charAt(i-1));
        };
        for (i = 0; i < (length) ; i++){
          join += (reversed[i]);
        }
        return join;
      }
console.log(reverse("lion"));

// // Question 7
const name = ["ahyu", "uai", "oiutrafs"];
var findLongestWord = function(array) {
    var elements = array.length;
    var count = 0;
    for (i = 0; i < elements; i++) {
      if (array[i].length > count) 
        count = array[i].length;
    }
    return count;
  }
  console.log(findLongestWord(name));
// // Question 8

const name = ["philip", "mei", "louis", "larry"];
var filterLongWords = function(array, int){
    var length = array.length;
    var longestWords = [];
    for (i = 0; i < length; i++) {
      if (array[i].length > int) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  }

console.log(filterLongWords(name, 3));
// // Bonus 1
 //??????


// // Bonus 2
 function charactersOccurencesCount() {
  
 }

