// Question 1
function maxOfTwoNumbers(a, b) {
    let max2 = null;
if (a > b) {
    max2 = a;
} else if (a <= b){
    max2 = b;
}
    return (max2);
}
console.log(maxOfTwoNumbers(1, 10));

// Question 2
function maxOfThree(x, y, z) {
    let max3 = null;

      if (x > y) {
          max3 = x;
      } else {
          max3 = y;
      }
      if(z > max3) {
         max3 = z;
      }
    return (max3);  
  }
console.log(maxOfThree(93, 67, 122));

// Question 3
function isCharacterAVowel(a) {
    let b = a.toLowerCase();

    if (b == 'a' || b == 'e' || b == 'i' 
    || b == 'o' || b == 'u') {
        return ('True')
    } else {
        return ('False')
    }
}
console.log(isCharacterAVowel('I'));

// Question 4
function sumArray(data) {
    let arraySum = 0;

    for (let i = 0; i < data.length; i++) {
        arraySum = arraySum + data[i];
    }
    return (arraySum);
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question 4
function multiplyArray(data) {
    let arrayMult = 1;

    for (let i = 0; i < data.length; i++) {
        arrayMult = arrayMult * data[i];
    }
    return (arrayMult);
}
console.log(multiplyArray([1, 2, 3, 4]));

// Question 5
var numberOfArguments = function(data){
  countInput = data.length;
  return (countInput);
}
console.log(numberOfArguments([1, 2, 3, 4, 5, 6, 7, 8]));


// Question 6
var reverseString = function (words){
 let backWords = words.split('').reverse().join('');
 return (backWords);
};
console.log(reverseString('Testing'));

// Question 7
let randomWords = ['Learnt', 'First', 'Backflip', 'fail', 'try', 'Rodeo'];

function findLongestWord (wordArray) {
    let longest = '1';

    for (let i = 0; i < wordArray.length; i++) {
       let wordLength =  wordArray[i].length;
       if (wordLength > longest.length) {
           longest = wordArray[i].length; //I had this outputing the longest word. updated to output length.
       }
    }
    return (longest);
};
console.log(findLongestWord(randomWords));

// Question 8
function filterLongWords (wordArray, number) {
    let newArray = [];
    let newArrayCounter = 0;

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > number) {
            newArray[newArrayCounter] = wordArray[i];
            newArrayCounter += 1;
        }
     }
     return (newArray);
};
console.log(filterLongWords(randomWords, 4));

// Bonus 1
// const letErRip = 'Mississippi'

// function objectCharacterCounts(word) {
//     const wordBreakdown = {};
//     let splitWord = word.split('');
    
//     for (i = 0; i < word.length; i++) {
//         let elementKey = splitWord[i];
//         wordBreakdown.push(elementKey);
//     }
//     console.log(wordBreakdown);
//     console.log(splitWord[0]);
// }
// objectCharacterCounts(letErRip);

// Bonus 2
// function charactersOccurencesCount(word) {
//     let splitWord = word.split('');

//     for (i = 0; i > word.length; i++){
//         let letter = word.charAt(i);
//         console.log(letter);
//     }
// }
// charactersOccurencesCount(letErRip);