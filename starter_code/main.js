// Question 1
function maxOfTwoNumbers(a, b) {
if (a > b) {
    let max2 = a;
    return (max2);
} else if (a <= b){
    let max2 = b;
    console.log(max2);
}
}
maxOfTwoNumbers(1, 10);

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
    console.log(max3);  
  }
maxOfThree(93, 67, 122);

// Question 3
function isCharacterAVowel(a) {
    let b = a.toLowerCase();
    if (b == 'a' || b == 'e' || b == 'i' 
    || b == 'o' || b == 'u') {
        console.log('True')
    } else {
        console.log('False')
    }
}
isCharacterAVowel('I');

// Question 4
function sumArray(data) {
    let arraySum = 0;

    for (let i = 0; i < data.length; i++) {
        arraySum = arraySum + data[i];
    }
    console.log(arraySum);
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Question 4
function multiplyArray(data) {
    let arrayMult = 1;

    for (let i = 0; i < data.length; i++) {
        arrayMult = arrayMult * data[i];
    }
    console.log(arrayMult);
}
multiplyArray([1, 2, 3, 4]);

// Question 5
var numberOfArguments = function(data){
  countInput = data.length;
  console.log(countInput);
}
numberOfArguments([1, 2, 3, 4, 5, 6, 7, 8]);


// Question 6
var reverseString = function (words){
 let backWords = words.split('').reverse().join('');
 console.log(backWords);
};
reverseString('Testing');

// Question 7
let randomWords = ['First', 'Backflip', 'fail', 'try', 'Rodeo'];

function findLongestWord (wordArray) {
    let longest = '1';

    for (let i = 0; i < wordArray.length; i++) {
       let wordLength =  wordArray[i].length;
       if (wordLength > longest.length) {
           longest = wordArray[i];
       }
    }
    console.log(longest);
};
findLongestWord(randomWords);

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
     console.log(newArray);
};
filterLongWords(randomWords, 4);

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

