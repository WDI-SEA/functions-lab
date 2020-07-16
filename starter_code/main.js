// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        console.log("Neither is higher than other one");
    }

}
console.log(maxOfTwoNumbers (4, 2));
// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3 && num2 > num1) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        console.log("There was a problem: some numbers might be equal to another")
    }

}
console.log(maxOfThree(7, 9, 10));
// Question 3
function isCharacterAVowel(char1) {
    var vowList = 'aeiouAEIOU';
    num1 = 0 ;
    while (num1 < 10) {
        if (char1 == vowList[num1]) {
            return true;
            break
        } else {
            num1 +=1 ;
        }
        return false;
    }
}
console.log(isCharacterAVowel("b"));
// Question 4
function sumArray(array1) {
    var total1 = 0;
    for (var i = 0; i < array1.length; i ++) {
        const num1 = array1[i];
        total1 += num1;
    }
    return total1;

}


// Question 4
function multiplyArray(array1) {
    var total1 = 1;
    for (var i = 0; i < array1.length; i ++) {
        num1 = array1[i];
        total1 = num1 * total1;
    }
    return total1;
}
console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));

// Question 5
var numberOfArguments = function(){
    return arguments.length;
}



// Question 6
var reverseString = function (strin1){
    let revStr = "";
    for (var i = 0; i < strin1.length; i ++) {
        var strIndex = strin1.length -1 - i;
        revStr += strin1[strIndex];
    }
    return revStr;
}

console.log(reverseString("coco"));

// Question 7
function findLongestWord (array1) {
    var longArr = 0;
    var longestArr;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i].length > longArr) {
            longArr = array1[i].length;
            longestArr = array1[i];
        }
    }
    return longestArr;
}
console.log(findLongestWord(["Bob", "Shark", "Tony", "Martin"]));

// Question 8
function filterLongWords (array1, i) {

    var newArray = [];
    for (var x = 0; x < array1.length; x ++) {
        var strin1 = array1[x];
        if (strin1.length > i) {
            newArray.push(strin1);
        }
    }
    return newArray;
}

console.log(filterLongWords(["Bob", "Shark", "Tony", "Martin"], 4));
// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}
