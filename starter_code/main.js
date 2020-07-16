// Question 1
function maxOfTwoNumbers(a, b ) {
if (a > b) {
    return(a);
}
else {
    return(b);
}
}
console.log(maxOfTwoNumbers(2, 4));

// Question 2
function maxOfThree(a, b, c ){
    if ( a > c){
        return(a);
    }
    else {
        return(c);
    }
    if ( b > c){
        return(b);
    }
    else {
        return(c);
    }
}
console.log(maxOfThree(2, 4, 6));
   
    
// Question 3
function isCharacterAVowel( [a, b, c, d]) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < vowels.length; i++ ){
        if (vowels === vowels[i]){
            return true;
        }
    }
    return false;

}
console.log(isCharacterAVowel(['a', 'b', 'c', 'd']));

// Question 4
function sumArray(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++){
        sum += num[i]
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));


// Question 4
function multiplyArray(num) {
    var sum = 1;
    for (var i = 0; i < num.length; i++){
        sum = (sum * num[i]);
    }
    return sum;
}
console.log(multiplyArray([1, 2, 3, 4]));

// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (str){
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--){
    newString += str [i];
  }
  return newString;
}
console.log(reverseString("jag testar"));


// Question 7
function findLongestWord (array) {
   var longestword = "";
   array.forEach(function(word){
       if(word.length > longestword.length){
           longestword = word;
       }
   });
   return longestword; 
}
var word = findLongestWord([ 'Florida', 'texas', 'California']);
console.log(word);

  
// Question 8
function filterLongWords (str) {
  var longestword = str.split('').sort(function(a, b){
      return b.length - a.length;
  });
  return longestword[0].length;
}
console.log()


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

