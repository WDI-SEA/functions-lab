// Question 1
function maxOfTwoNumbers(firstArg,secondArg) {

	if(firstArg>secondArg) {
	    return firstArg;
}   else {

	    return secondArg;
}
}
console.log(maxOfTwoNumbers(10, 15));

// Question 2
function maxOfThree(firstPeram,secondPeram,thirdPeram) {
	if((firstPeram>secondPeram) && (firstPeram>thirdPeram)){
		return firstPeram;
} 
	else if((secondPeram>firstPeram) && (secondPeram>thirdPeram)) {
        return secondPeram;
}
	else if ((thirdPeram>firstPeram) && (thirdPeram>secondPeram)) {
		return thirdPeram;
	}
}
console.log(maxOfThree(10,12,14));


// Question 3
function isCharacterAVowel(charParam) {
		var lowerCaseParam = charParam.toLowerCase();
		if(lowerCaseParam === "a" || lowerCaseParam==="i" || lowerCaseParam==="o" || lowerCaseParam==="u" || lowerCaseParam==="e"){
			return true;
		}
			return false;
		
}
console.log(isCharacterAVowel("A"))

// Question 4
const numbers = [1, 2, 3, 4];
function sumArray(array) {
	let result = 0;

	for(let i = 0; i < array.length; i++) {
		let num = array[i];

		result += num;
	}

	return result;
}

console.log(sumArray(numbers));


 



// Question 4
function multiplyArray(multiplyNumbers) {
    var total = 1;
	for (var i = 0; i < multiplyNumbers.length; i++) {
		total = (total * multiplyNumbers[i]);
	}
	return total;
}

console.log(multiplyArray([1,2,3,4]));



// Question 5
var numberOfArguments = function(){
	return	arguments.length;

	
}
console.log(numberOfArguments(50, 3, 4))



// Question 6
var reverseString = function (string){
	var words = '';
	
	for (var i = string.length - 1; i >= 0; i--) {
		words += string[i];
}
	
	return words;
}
console.log(reverseString("ratset gaj"));




// Question 7
function findLongestWord(array) {
    let longestWord = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord) {
           longestWord = array[i].length;
        }
    }
    return longestWord;
}

let array = ["Sweden", "Germany", "Egypt", "Alaska", "Madagascar"];

console.log(findLongestWord(array));

// Question 8
function filterLongWords (array, n ) {
	var newArray = [];
	for (let i = 0; i < array.length; i++){
		if (array[i].length > n) {
			newArray.push(array[i]);
		}
	}
	 return newArray
}
console.log(filterLongWords(['Nick', 'Joey', 'Andy', 'Tanner'], 3));


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

