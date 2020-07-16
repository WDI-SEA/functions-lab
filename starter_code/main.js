// Question 1
function maxOfTwoNumbers(firstNum, secondNum) {
    if (firstNum > secondNum) {
        console.log(firstNum + " is larger than " +secondNum);
    } else {
        console.log(firstNum + " is less than " +secondNum);
    }
    return Math.max(firstNum, secondNum);
}
console.log(maxOfTwoNumbers(20, 100));

// Question 2
function maxOfThree(num1,num2,num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxOfThree(1, 10, 3));

// Question 3
//Write a function isCharacterAVowel that takes a character (i.e., a string of length 1) and returns true if it is a vowel and false otherwise.
function isCharacterAVowel(letter) {
    if (letter === 'a' || 'e' || 'i' || 'o' || 'u') {
        return "True - the letter is a vowel";
    } else {
        return "False - the letter is not a vowel";
    }
}
console.log(isCharacterAVowel("e"));

// Question 4
function sumArray(numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}
console.log(sumArray([1,2,3,4]));

// Question 4
function multiplyArray(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    }
    return total;
}
console.log(multiplyArray([1, 2, 3, 4]));

// Question 5
//arguments.length
var numberOfArguments = function(){
    return arguments.length;
}
console.log(numberOfArguments("one", "two", "three", 40, 8));


// Question 6 **
var reverseString = function (string){
    var length = string.length;
    var reversed = [];
    var joined = ("");
    for (i = length; i > 0; i--){
      reversed.push(string.charAt(i-1));
    };
    for (i = 0; i < (length) ; i++){
      joined += (reversed[i]);
    }
    return joined;
  }
  console.log(reverseString("hello"));

// Question 7
function findLongestWord (string) {
    let longestWord = ""; //undefined
    for (let i = 0; i <string.length; i++){ //
        if (string[i].length > longestWord.length) {
            longestWord = string[i];
        }
    }
  return longestWord;
}
console.log(findLongestWord(["one", "two", "twenty"]));

// Question 8 **
//takes an array of words and a number i and returns a new array of words that are longer than i characters long
function filterLongWords (array, num) {
    let newArray = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            newArray.push(arr[i]);
        }
    }
    return newArray
}
console.log(filterLongWords(["one", "two", "three"], 6));

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

