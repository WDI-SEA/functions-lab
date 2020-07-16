// Question 1
function maxOfTwoNumbers() {
    const numOne = 100
    const numTwo = 200
    if (numTwo > numOne){
        console.log(numTwo + " is bigger than " +  numOne);
    } else {
        console.log(numTwo + " is smaller than "  +  numOne);
    }
    return;
}
maxOfTwoNumbers();

// Question 2
function maxOfThree() {
    const numOne = 100
    const numTwo = 200
    const numThree = 300
    if (numOne >= numTwo && numOne >= numThree ) {
        console.log(numOne + " is the biggest! ");
    } else {
        console.log('300 I am Sparta! Boot');
    }
    return;

}
maxOfThree();
// Question 3
function isCharacterAVowel() {
    const vowel = 'is';
    if (vowel[1] == 's'){
        console.log('True')
    } else {
        console.log('False')
    }
    return;
}
isCharacterAVowel();

// Question 4

function sum(arr){
    var s = 0;
    for (var i = 0; i < arr.length; i ++){
      s = s + arr[i]
      console.log(s)
    }
    return;
  }
  sum([1,2,3,4])

// Question 4

function multiplyArray(ar){
    var one = 1;
    for (var i = 0; i < ar.length; i ++){
      one = one * ar[i]
      console.log(one)
    }
    return;
  }
  multiplyArray([1,2,3,4])

  

// Question 5
function numberOfArguments(four) {
    return arguments.length;
    console.log(four);
  }
numberOfArguments('one','two', 'three', 'four');
  



// Question 6
// var reverseString = function (str){
  
// };
function reverseString(str) {
    var strArr = str.split('');
    var reverseStringArr = strArr.reverse();
    var reversedString = reverseStringArr.join('')
    
    return reversedString
    }
console.log(reverseString('Hello'));



// Question 7
function findLongestWord () {
  return
    var word = ["Cat","Fish",'Turtle'];

}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

