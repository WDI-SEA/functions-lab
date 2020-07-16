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
var pot = "pot";
console.log(reverseString(pot));

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

