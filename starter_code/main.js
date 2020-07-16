
// Question 1
function maxOfTwoNumbers(x,y) {
if (x>y) {
    console.log(x);
} else {
    if (y>x){
        console.log(y);
    }
}
}
maxOfTwoNumbers(2,4);

// Question 2
function maxOfThree(x,y,z) {
    if (x>y && x>z) {
        console.log(x);
    } else if (y>x && y>z) {
        console.log(y);
        } else if(z>y && z>x){
                console.log(z);
            }
        }

maxOfThree(3,4,5);

// Question 3
function isCharacterAVowel(character) {
    if ((character=='a') || (character=='e') || (character=='i') || (character=='o') || (character=='u') || (character=='y')) {
    console.log(true);
    } else {
        console.log(false);
    }

}
isCharacterAVowel('a');
// Question 4
const numbers = [1, 2, 3, 4];
function sumArray(array) {
 let result = 0;
 for(let i =0; i< array.length; i++) {
     let num = array[i];

     result += num;
 }
return result;
}
console.log(sumArray(numbers));


// Question 4
function multiplyArray(array) {
        let result = 1;
        for(let i =0; i< array.length; i++) {
            let num = array[i];
       
            result *= num;
        }
       return result;
       }
       console.log(multiplyArray(numbers));



// Question 5
var numberOfArguments = function(array){
  result = array.length;
  console.log(result);
}
numberOfArguments(numbers);


// Question 6
const sentence = ('Hi how are you')
function reverseString (string) {
    var newString ='';
    for (var i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}
console.log(reverseString(sentence));

// Question 7
const words = ['apple', 'pineapple', 'car', 'four']
function findLongestWord (array) {
    var longestWord = array.sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}
console.log(findLongestWord(words));


// Question 8
function filterLongWords (word) {
    for (let count =0; count < word.length; count++){
        if (word[count].length > 4){
            console.log(word[count]);
        }
    }

}
filterLongWords(words);


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

