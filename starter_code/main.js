// Question 1
function maxOfTwoNumbers(firstNum,secondNum) {
    if (firstNum > secondNum) {
        console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
    return;

}
maxOfTwoNumbers(77,100)

// Question 2
function maxOfThree(firstNum,secondNum,thirdNum) {
    return Math.max (firstNum, secondNum, thirdNum);
    
}
console.log(maxOfThree (44,122,999))

// Question 3
function isCharacterAVowel(char) {
    var char = char.toLowerCase();
    if (char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u") {
        return "True" ;
    } else {
        return "False"
    }

}
console.log("char B is " + isCharacterAVowel("B"))
console.log("char a is " + isCharacterAVowel("a"))

// Question 4
function sumArray(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        
        total += numbers[i];
    }
    return total;
 
}
console.log(sumArray([1,2,3,4]));


// Question 4
function multiplyArray(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total = (total * numbers[i]);
    }
    return total;

}
console.log(multiplyArray([1,2,3,4]))

// Question 5
var numberOfArguments = function add(x,y){
    console.log(x+y)
  }
numberOfArguments(2,5);



// Question 6
var reverseString = function reverse(str){
    var text = '';
    for (var i = str.length -1; i >=0; i--) {
        text += str[i];
        continue
    }
    console.log(text);
  
}
reverseString("jag testar");


// Question 7
function findLongestWord (str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
        }
    }
    console.log(longestWord);
  
}
findLongestWord("Web Development Course");


// Question 8
function filterLongWords(words, maxLength) {
    var splitString = words.split(" ");
    var longWords = [];
    // could be more dry using code above
    for (var i = 0; i < splitString.length; i++) {
  
      var word = splitString[i];
  
      if (word.length > maxLength) {
        longWords.push(word);
      }
    }
    return longWords;
  }
  
  console.log(filterLongWords('Web Development Course', 8));
  


// Bonus 1
//??????
function charFreq(inputString) {
    var inputString = inputString.toLowerCase();
    var frequency = {}
    var splitCharacters = inputString.split("");
    for (var i = 0; i < splitCharacters.length; i++) {
      
      if (frequency[splitCharacters[i]]) {
        frequency[splitCharacters[i]]++;
      } else {
        frequency[splitCharacters[i]] = 1;
      }
    }
    return frequency;
  }
  
  console.log(charFreq("General Assembly"));

// Bonus 2
// function charactersOccurencesCount(string) {
//     let obj = {}
//     let result1 = string.split("")
//     for (let i = 0; i < string.length; i++) {
//       let str1 = string[i];
//       if(obj[str1] === undefined) {
//         obj[str1] = 1;
//       } else {
//         obj[str1]++
//       }
//     }
//     return obj;
// }
// console.log(charactersOccurencesCount("hello world"));

