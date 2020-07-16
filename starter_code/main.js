// Question 1
function maxOfTwoNumbers(num1, num2) {

    let max;

    if(num1>num2){
        max= num1
    } else{
        max= num2
    }
    return max;


}


// Question 2
function maxOfThree(num1, num2, num3) {

    

    if(num1> num2 && num1>num3){
        return num1;
    } else if (num2> num1 && num2>num3){
        return num2;
    } else if(num3> num1 && num3>num2){
        return num3;
    }
}
console.log(maxOfThree(2, 4, 6));

// Question 3
function isCharacterAVowel() {
    const vowels= ['a','e','i','o','u','y'];
    for (let i = 0; i <= vowels.length; i++){
     if (letter== vowels[i]){
        return true;
    } else{
        return false;
    }
}
}
let letter= 'a'
isCharacterAVowel();


// Question 4
function sumArray() {
    var sum= 0; 
    for(let i=0; i < num.length; i++){
        sum += num[i];
    }
    return sum;

}
console.log(sumArray([2, 4, 6, 8]));

// Question 4
function multiplyArray() {
    var sum= 1;
    for(let i=0; i < num.length; i++){
        sum = (sum* num[i]);

}
return sum;
}
console.log(multiplyArray([1, 2, 3, 4]));

// Question 5
var numberOfArguments = function(){
  return arguments.length;
}

console.log(numberOfArguments(2, 4, 6));


// Question 6
var reverseString = function (){
  let words= ''; 
  for(let i= string.length -1; i<=0; i--){
      words += string[i];
};
return words.toLowerCase

console.log(reverseString(nevets));


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

