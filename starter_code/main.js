// Question 1
var result1 = 10;
var result2 = 20;
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2 || num2 > num1) {
  return num2;
} else {
  return num1;
  }
} 
console.log(maxOfTwoNumbers(10, 20))
// Question 2
var result1 = 60;
var result2 = 30;
var result3 = 80;
function maxOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
  return num1;
} else if (num2 > num1 && num2 > num3){
  return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
}
console.log(maxOfThree(60, 30, 80));

// Question 3
function isCharacterAVowel(input) {
    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
      return true;
    } else {
      return false;
      }
    }
    console.log(isCharacterAVowel("e"));

// Question 4
function sumArray(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4]));


// Question 4
function multiplyArray(array) {
    var multiply =  1;
    for (let i = 0; i < array.length; i++) {
      multiply *= array[i];
    }
    return multiply;
  }
  console.log(multiplyArray([1,2,3,4]));


// Question 5
var numberOfArguments = function(){
    return arguments.length
   
   }
   console.log(numberOfArguments(20));



// Question 6
let input = "Batallones"
var reverseString = function (string){
    let result = string.split("")
    let reversedString = result.reverse();
    let joinedString = reversedString.join("")
    return joinedString

};
console.log(reverseString("Batallones"));

// Question 7
function findLongestWord (array) {
    let longest = array[0];
    for (let i = 0; i < array.length; i++) {
      if(array[i].length > longest.length) {
        longest = array[i];
      }
    }
    return longest;
  }
  console.log(findLongestWord(['Levin', 'Francis', 'Tim', 'Ko']));


// Question 8
function filterLongWords (array, n) {
    var newArr = []; //new array 
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > n) {
        newArr.push(array[i]);
      }
    }
    return newArr
  }
  console.log(filterLongWords(['Levine', 'Francis', 'Tim', 'Ko'], 1));
                                  0           1        2      3

// Bonus 1
//??????
// function stringToObject (string) {
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
//   console.log(stringToObject("Javascript"))

// Bonus 2
function charactersOccurencesCount(string) {
    let obj = {}
    let result1 = string.split("")
    for (let i = 0; i < string.length; i++) {
      let str1 = string[i];
      if(obj[str1] === undefined) {
        obj[str1] = 1;
      } else {
        obj[str1]++
      }
    }
    return obj;
}
  console.log(charactersOccurencesCount("Javascript"));
