// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
        return num1;
    } else {
        console.log(num2);
        return num2;
    }
}

// Question 2
function maxOfThree(num1, num2, num3) {
    var largest = num1;
    
    if (num2 > num1) {
        largest = num2;
    } 

    if (largest < num3) {
        largest = num3;
    }

    console.log(largest);
    return largest;
}

// Question 3
function isCharacterAVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char)) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

// Question 4
function sumArray(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
    return sum;
}


// Question 4
function multiplyArray(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    console.log(product);
    return product;
}


// Question 5
var numberOfArguments = function(a, b, c) {
    return arguments.length;
}



// Question 6
var reverseString = function (str){
    var reverse = "";
    for(var i = str.length-1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
};


// Question 7
function findLongestWord (arr) {
    var longest = 0; 
    for(var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if(word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}


// Question 8
function filterLongWords (arr) {
    const newArr = [];
    for(var c = 0 ; c < arr.length; c++) {
        var word = arr[c];
        if(word.length > i) {
            newArr.push(word);
        }
    }
    return newArr;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount(str) {
    var obj = {}
    for(var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if(!(c in obj)) {
            obj[c] = 0;
        }
        obj[c]++; 
    }
    return obj;
}

