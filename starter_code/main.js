// Question 1
function maxOfTwoNumbers(one,two) {
    if (one>two) {
        console.log("The largest number is " +one);
    } else {
        console.log("The largest number is " +two);

    }

}
// function called
maxOfTwoNumbers(200,55);

// Question 2
function maxOfThree(one,two,three) {
    if (one>two && one>three) {
        console.log("The largest number is " +one);
    } else if (two>one && two>three){
        console.log("The largest number is " +two);
    } else {
        console.log("The largest number is " +three);
    }

}
// function called
maxOfThree(20,50,85);

// Question 3
function isCharacterAVowel(char) {
    if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
        console.log("True");
    } else if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        console.log("True");
    } else {
        console.log("Flase");
    }


}
// function called
isCharacterAVowel("u");

// Question 4
function sumArray(array) {
    let result = 0;
    for (let i = 0 ; i <array.length ; i++) {
        result += array[i];

    }
    return result;
 
}
// calls the function and print the result in console
console.log(sumArray([1,2,9,4]));

// Question 4
function multiplyArray(array) {
    let result = 1;
    for (let i = 0 ; i <array.length ; i++) {
        result = result * array[i];

    }
    return result;

}
// calls the function and print the result in console
console.log(multiplyArray([1,2,7,5]));


// Question 5
var numberOfArguments = function(){
    argumentsArray = Array.from(arguments);
    console.log(argumentsArray.length);
}

// calls the function and print the result in console
numberOfArguments(2,9,5,6,8);



// Question 6
var reverseString = function (str){
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
}
return newString};
// calls the function and print the result in console
console.log(reverseString("hello"));


// Question 7

// var word= "";
function findLongestWord (array) {
    var longestWord= 0;
    for(let i=0; i<array.length; i++){
        if (array[i].length > longestWord) {
            longestWord = array[i].length;
        }
        
    }
//    word= array[i];
    return longestWord;
    
}

// calls the function and print the result in console
console.log(findLongestWord(['David', 'Subrata', 'Martin', 'Yoel', 'han']));
// console.log("The longest word is " +array[i]);




// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

