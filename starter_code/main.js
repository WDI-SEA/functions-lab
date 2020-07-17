// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(45, 53));
console.log(maxOfTwoNumbers(117, 1));

// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        } else {
            return num3;
        }
    } else if (num2 > num1) {
        if (num2 > num3) {
            return num2;
        } else {
            return num3;
        }
    }
}

console.log(maxOfThree(304,2000,1000));

// Question 3
function isCharacterAVowel(char) {
    let vowels = 'aeiou';

    let index = vowels.indexOf(char);
    console.log(index);

    if (index === -1) {
        return false;
    } else {
        return true;
    }
}
console.log(isCharacterAVowel('w')); //false
console.log(isCharacterAVowel('e')); //true

// Question 4
function sumArray(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        let num = array(i); //1, 2, 3

        // result += num;
        result = result + num; // 1, 3, 6
    }

    return result;
}

console.log(sumArray([1,2,3]));
const numbers = [1,5,6,7,8];
console.log(sumArray(numbers));


// Question 4
function multiplyArray(array) {
    let result = 1;

    for(let i = 0; i < array.length; i++) {
        let num = array(i); // 5, 5, 5

        result *= num; // 5, 25, 125
    }

    return result;
}

console.log(multiplyArray([5,5,5]));


// Question 5
var numberOfArguments = function(){
    console.log(arguments);
    return arguments.length;
}

console.log(numberOfArguments(1,2,3,4,5,6));


// Question 6
var reverseString = function (string){
    // let splitString = string.split('');
    // console.log(splitString);
    // let reverseString = splitString.reverse();
    // console.log(reverseString);
    // let joinString = reverseString.join('');
    // console.log(joinString);
    let result = string.split('').reverse().join('');
    console.log(result);
};

console.log(reverseString('rome'));





// Question 7
const instructors = ['rome', 'pete', 'taylor', 'adam']
function findLongestWord (arrayOfWords) {
    let result = '';

    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords(i); // rome, pete, taylor, adam

        if (word.length > result.length) {
            result = word; // taylor
        }
    }

    return result.length;
}

console.log(findLongestWord(instructors));


// Question 8
const cars = ['Tesla', 'Ford', 'Ferrari', 'Honda'];
//4

function filterLongWords (arrayOfWords, n) {
    const result = [];

    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i]; // Tesla, Ford, Ferrari, Honda

        if (word.length > n) {
            result.push(word); // {'Tesla', 'Ferrari', 'Honda'}
        }
    }

    return result;
}

console.log(filterLongWords(cars, 4));


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount(string) {
    const result = {};

    let lowerString = string.toLowerCase();
    
    for(let i = 0; i < lowerString.length; i++) {
        let char = lowerString[i]; // general

        if (char === ' ') {
            continue;
        } else if (result[char] === undefined) {
            result[char] = 1;
        } else {
            result[char] += 1;
        }
    }

    return result;
}

let x = charactersOccurencesCount('General Assembly');
console.log(x);

if (light === 'yellow') {
    
}