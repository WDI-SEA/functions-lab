 // Question 1
function maxOfTwoNumbers(numOne, numTwo) 
{
    if (numOne >= numTwo)
    {
        return numOne;
    }
    else
    {
        return numTwo;
    }
}

// Question 2
function maxOfThree(numOne, numTwo, numThree) 
{
    if (numOne >= numTwo && numOne >= numThree)
    {
        return numOne;
    }
    else if (numTwo >= numThree)
    {
        return numTwo;
    }
    else
    {
        return numThree;
    }
}

// Question 3
function isCharacterAVowel(character) 
{
    switch (character.toUpperCase())
    {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return true;
        default:
            return false;
    }
}

// Question 4
function sumArray(array) 
{
    var sum = 0;

    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum;
}


// Question 4
function multiplyArray(array) 
{
    var product = 1;

    for (let i = 0; i < array.length; i++)
    {
        product *= array[i];
    }

    return product;
}


// Question 5
var numberOfArguments = function()
{

}


// Question 6
var reverseString = function (notReverse)
{
    var reverse = "";

    for (let i = notReverse.length - 1; i >= 0; i--)
    {
        reverse += notReverse[i];
    }

    return reverse;
};


// Question 7
function findLongestWord (array) 
{
    var longest = "";

    for (let i = 0; i < array.length; i++)
    {
        if (array[i].length > longest.length)
        {
            longest = array[i];
        }
    }

    return longest;
}


// Question 8
function filterLongWords (array, num) 
{
    var longWords = [];

    for (let i = 0; i < array.length; i++)
    {
        
    }
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

console.log(maxOfTwoNumbers(10,10));
console.log(10);
console.log(maxOfTwoNumbers(10,12));
console.log(12);
console.log(maxOfTwoNumbers(15,12));
console.log(15);
console.log(maxOfTwoNumbers(15-134,12));
console.log(12);
console.log(maxOfTwoNumbers(0,0));
console.log(0);

console.log(maxOfThree(10,10,10));
console.log(10);
console.log(maxOfThree(10,12,11));
console.log(12);
console.log(maxOfThree(15,12,15));
console.log(15);
console.log(maxOfThree(15-134,12,12));
console.log(12);
console.log(maxOfThree(0,0,0));
console.log(0);
console.log(maxOfThree(1,0,0));
console.log(1);

console.log(isCharacterAVowel("A"));
console.log("true");
console.log(isCharacterAVowel("E"));
console.log("true");
console.log(isCharacterAVowel("a"));
console.log("true");
console.log(isCharacterAVowel("e"));
console.log("true");
console.log(isCharacterAVowel("B"));
console.log("false");
console.log(isCharacterAVowel("b"));
console.log("false");

console.log(sumArray([1,2,3,4]));
console.log(10);
console.log(sumArray([1,2,-3,4]));
console.log(4);
console.log(sumArray([0,1,2,3,4,5]));
console.log(15);

console.log(multiplyArray([1,2,3,4]));
console.log(24);
console.log(multiplyArray([0,1,2,3,4,5]));
console.log(0);
console.log(multiplyArray([1,2,3,4,5]));
console.log(120);
console.log(multiplyArray([1,2,3,4,-5]));
console.log(-120);



var pot = "pot";
console.log(reverseString(pot));
console.log("top");
console.log(reverseString("sag eroM"));
console.log("More gas");

console.log(findLongestWord(["potato","tomato","superduper","what"]));
console.log("superduper");
console.log(findLongestWord(["potato","tomato","lotamo","motawo"]));
console.log("potato");

