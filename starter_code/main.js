// Question 1
//take two numbers as args and returns the largest of the two
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;

    }else if (num2 > num1){
        return num2;

    }else{
        console.log('The two numbers are equal!');
    }
}
// console.log(maxOfTwoNumbers(2, 7));

// Question 2
//take three numbers as args and return the largest
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1;

    }else if (num2 > num1 && num2 > num3) {
        return num2;

    }else if (num3 > num1 && num3 > num2) {
        return num3;

    }else{
        console.log('Beats me!')
    }
}
// console.log(maxOfThree(0, 1, 100));

// Question 3
// takes one char as arg and returns true if arg is a vowel

function isCharacterAVowel(char) { // includes() to see if array includes
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char)){
        return true;

    }else{
        return false;
    }
}
// console.log(isCharacterAVowel('e'))



// Question 4
///Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
function sumArray(someArray) {
    let sumTracker = 0; 

    for (var i = 0; i < someArray.length; i++){
        sumTracker += someArray[i];
    }

    return sumTracker;
}

// console.log(sumArray([1, 2, 3, 4]))

// Question 4
function multiplyArray(someArray) {
    let multiplyTracker = 1; //counter must be set at 1, as multiplying by zero will cause multiplyTracker to return 0

    for (var i = 0; i < someArray.length; i++){
        multiplyTracker *= someArray[i];
    }

    return multiplyTracker;
}

// console.log(multiplyArray([1, 2, 3, 4]))



// Question 5
//a function that returns the number of arguments passed to the function when called
var numberOfArguments = function(){
    return arguments.length;
}
// console.log(numberOfArguments(1, 2, 3, 4, 5, 'sandwich', 7));


// Question 6
// function `reverseString` that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj"
var reverseString = function (string){
    let backwardsString = '';

    for (var i = string.length - 1; i >= 0; i--){ //decrementing for loop
        backwardsString += string[i];
    }

    return backwardsString;
}
// console.log(reverseString('decrementing'))



// Question 7
// function `findLongestWord` that takes an array of words 
// and returns the length of the longest word in the array

function findLongestWord (wordArray) {
    let currentWord = '';
    for (var i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > currentWord.length){
            currentWord = wordArray[i];
        }
    }

    return currentWord;
}
// console.log(findLongestWord(['ant', 'bananas', 'apple', 'troglodyte']))

// Question 8
//function `filterLongWords` that takes an array of words and a number `i` and 
//returns a new array of words that are longer than `i` characters long
function filterLongWords (wordArray, num) {
    let wordsLongerThanNum = [];
    for (var i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > num){
            wordsLongerThanNum.push(wordArray[i]); //push() appends new item to an array.
        }
    }

    return wordsLongerThanNum;
}
// console.log(filterLongWords(['and', 'suck', 'a', 'banana', 'ay', 'anxiety'], 3))

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

