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

// Question 5
function multiplyArray() {

}


// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

