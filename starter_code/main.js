// Question 1
function getArrayMax(array) {
    return Math.max.apply(null,array);
}
var maxOfTwoNumbers=[35, 56];
var maxOfTwoNumbers=getArrayMax(maxOfTwoNumbers)
maxOfTwoNumbers

// Question 2
function getArrayMax(array) {
    return Math.max.apply(null,array);
}
var maxOfThree=[35, 56, 82];
var maxOfThree=getArrayMax(maxOfThree)
maxOfThree


// Question 3
function isCharacterAVowel(x) {  return /[aeiouAEIOU]/.test(x); }

var input = '';
while (input.length != 1) {
  input = prompt("Enter a character ");
}
alert(isCharacterAVowel(input));

// Question 4
function sumArray(array){
    var total = 0,
        len = array.length;
  
    for (var i = 0; i < len; i++){
      total += array[i];
    }
  
    return total;
  };
  
  var my_array = [1,2,3,4];
  
  console.log( sumArray( my_array ) );


// Question 4
function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
console.log(multiply[1,2,3]);


// Question 5
var numberOfArguments = 
function print_args() {
    for(var i=0; i<arguments.length; i++)
        console.log(arguments[i])
}



// Question 6
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('reversed string');

// Question 7
function findLongestWord(...strs) {
    return strs.sort(function(a, b) {return b.length - a.length})[0];
  }
  
  console.log(findLongestWord('john', 'johnsmith', 'solomonabraha'));


// Question 8
var filterLongWords = 

function(array, int){
    var length = array.length;
    var longestWords = [];
    for (i = 0; i < length; i++) {
      if (array[i].length > int) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  }


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount(string) {
    var freq = {};
    for (var i = string.length - 1; i >= 0; i--) {
        freq[string[i]] = 1 + (freq[string[i]] || 0);
    }    
    return freq;
}
console.log(charactersOccurencesCount('dlsdlkfjskkjjdddfjfjduter'))

