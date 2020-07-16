// Question 1
const numbers = [6, 8];
function maxOfTwoNumbers(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++){
        if (numbers[i] > result) {
            result = numbers[i];
        } else{

        }
    }
    return result;
}

console.log(maxOfTwoNumbers(numbers));

// Question 2
const numbersTwo = [5, 7, 2];
function maxOfThree(array) {
    let resultTwo = 0;

    for (let i = 0; i < array.length; i++){
        if (numbersTwo[i] > resultTwo) {
            resultTwo = numbersTwo[i];
        } else{

        }
    }
    return resultTwo;
}

console.log(maxOfThree(numbersTwo));

// Question 3
const letter = "A";
function isCharacterAVowel() {
    let answer;
    if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
console.log(isCharacterAVowel(letter));


// Question 4
const num = [1, 2, 3, 4];

 function sumArray(array) {
     let result = 0;

     for(let i = 0; i < array.length; i++) {
         let num = array[i];

         result += num;
     }

     return result;
 }

 console.log(sumArray(num));


// Question 4
const numTwo = [1, 2, 3, 4];

 function multiplyArray(array) {
     var result = 1;

     for(let i = 0; i < array.length; i++) {
         result *= array[i];
     }

     return result;
 }

 console.log(multiplyArray(numTwo));


// Question 5
const items = ['1', '2', '3']
var numberOfArguments = function(array){
  totalArguments = 0;
  for(let i = 0; i < array.length; i++) {
      totalArguments = i + 1;
  }
  return totalArguments;
}

console.log(numberOfArguments(items))



// Question 6
const str = "Hello";
function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }
  console.log(reverse(str))

// Question 7
const words = ['Buckle', 'Ditch', 'Arrow']
function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }

  console.log(findLongestWord(words))


// Question 8
function filterLongWords () {
  
}
const wordsTwo =['Bee', 'Deer', 'Ant', 'Moose', 'Bagder']
var filterLongWords = function(array, int){
    var longestWords = [];
    for (i = 0; i < array.length; i++) {
      if (array[i].length > 4) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  }
  console.log(filterLongWords(wordsTwo))


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
//INCREDIBLY FRUSTRATING 
var strTwo = "Hello World, This is not easy?".split('');
function charactersOccurensesCount() {
    for (var i = 0; i < array.length; i++) {
        
    }
}


//var res = strTwo.split();
console.log(strTwo)
