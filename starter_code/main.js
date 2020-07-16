// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2){
        return num1;
    }
    else {
        return num2;
    }
}

// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            return num1;
        }
        else{
            return num3;
        }
    }
    else{
        if (num2 >= num3){
            return num2;
        }
        else{
            return num3;
        }
    }
}

// Question 3
function isCharacterAVowel(character) {
    const vowels = ['a','e','i','o','u'];
    // if(vowels.includes(character)){
    //     console.log("true!");
    // }
    // else{
    //     console.log("false!");
    // }
    return vowels.includes(character);
}

// Question 4
function sumArray(numbers) {
    var result = 0;
    for (let i = 0; i < numbers.length; i++){
        var item = numbers[i];
        result += item;
    }
    return result;
}


// Question 4
function multiplyArray(numbers) {
    var result = 0;
    for (let i=0; i<numbers.length; i++){
        var item = numbers[i];
        result *= item;
    }
    return result;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}


// Question 6
var reverseString = function (word){
  return word.split("").reverse().join("");
};


// Question 7
function findLongestWord (words) {
    var longest = 0;
    for (let i = 0; i < words.length; i++){
        var item = words[i];
        if (longest < item.length){
            longest = item.length;
        }
    }
    return longest;
}


// Question 8
function filterLongWords (arr,i) {
    var newArr = [];
    for (let x = 0; x < arr.length; x++){
        var item = arr[x];
        if (item.length > i) {
            newArr.push(item);
        }
    }
    return newArr;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount(str) {
    // split string into array
    let arr = str.toLowerCase().split("");
    // create empty object
    var charactersCount = {};

    while(arr.length != 0) {
        var count = 1;
        var item = arr[0];

        if (item == ' ') {
            arr.shift()
        }
        else{
            for (let i = 1; i < arr.length; i++){
                if (arr[i] == item) {
                    count += 1;
                    arr[i] = ' ';
                    console.log(arr);
                }
            }
            charactersCount[item] = count;
            arr.shift();
        }        
    }
    return charactersCount;
}

