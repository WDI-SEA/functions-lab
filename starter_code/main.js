// Question 1
function maxOfTwoNumbers(numOne, numTwo) {
    if (numOne > numTwo) {
        console.log(numOne);
    } else {
        console.log(numTwo);
    }
};
maxOfTwoNumbers(29, 18);

// Question 2
function maxOfThree(numThree, numFour, numFive) {
    if (numThree > numFour && numThree > numFive) {
        console.log(numThree);
    } else if (numFour > numThree && numFour > numFive) {
            console.log(numFour);
    } else if (numFive > numThree && numFive > numFour) {
            console.log(numFive);
    }
};
maxOfThree(49, 38, 27)

// Question 3
function isCharacterAVowel(character) {
    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
        console.log("TRUE");
    } else {
        console.log("FALSE");
    }
};
isCharacterAVowel("e");

// Question 4

const sumArray = arr => arr.reduce((a,b) => a + b, 0);

console.log(sumArray([5,6,7,8]));

// Question 4

let numbers = [5,6,7,8];
    console.log(numbers.reduce((a,b) => a*b))

// Question 5
var numberOfArguments = function(){
    console.log(arguments.length);
}
numberOfArguments();

// Question 6

function reverseString(str) {
    if(!str || str.length < 2 ||  
        typeof str!== "string") { 
    return "Not valid";  
} 
const revArray = []; 
const length = str.length - 1; 
for(let i = length; i >= 0; i--) { 
    revArray.push(str[i]); 
} 
  return revArray.join(""); 
}
reverseString("hello");
// I think I'll try this in the morning

// Question 7

let arr = ["Hi", "my", "name", "is", "David"]
let result = arr.reduce((r, e) => r.length < e.length ? e : r, "");
console.log(result)


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

