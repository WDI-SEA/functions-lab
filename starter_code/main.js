
// Question 1
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(numOne, numTwo) {
    if (numOne > numTwo) {
        return numOne
    } else {
        return numTwo
    }
}

// console.log(maxOfTwoNumbers(30, 30))

// Question 2
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(numOne, numTwo, numThree) {
    // if (numOne > numTwo && numOne > numThree) {
    //     return numOne
    // } else if (numTwo > numOne && numTwo > numThree) {
    //     return numTwo
    // } else {
    //     return numThree
    // }
    const biggerNum = maxOfTwoNumbers(numOne, numTwo)
    const biggestNum = maxOfTwoNumbers(biggerNum, numThree)
    return biggestNum
}

// console.log(maxOfThree(7, 7, 5))

// Question 3
// Write a function isCharacterAVowel that takes a character (i.e., a string of length 1) and returns true if it is a vowel and false otherwise.
function isCharacterAVowel(char) {
    // if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || ...) {
    //     return true
    // }
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    if (vowels.indexOf(char) === -1) {
        return false
    } else {
        return true
    }
}

console.log(isCharacterAVowel('U'))

// Question 4
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    return sum
}

console.log(sumArray([1, 2, 3, 4]))

function multiplyArray(nums) {
    let product = 1

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
    }

    return product
}

console.log(multiplyArray([1, 2, 3, 4]))

// Question 5
// Write a function that returns the number of arguments passed to the function when called.

function numArgs(...args) {
    // return arguments.length
    console.log(args)
    // using the spread operator
    return args.length
}

console.log(numArgs(10, 50, 70, 5)) // variadic argument function
// how the spread operator works
// const arrOne = ['one', 'two', 3]
// const fruits = ['mango', 'banana']
// // combine two arrays with the spread operator
// const combined = [...arrOne, ...fruits]
// console.log(combined)

// Question 6
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString(str) {
    let rString = ''
    for (let i = str.length - 1; i > -1; i--) {
        console.log(i, rString)
        rString += str[i]
    }

    return rString
}

// console.log(reverseString('hello'))

// console.log('hello'[3])

// Question 7
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
function findLongestWord(words) {
    // keep track of longest word
    let longest = words[0]
    // loop over array of words, if one is longer than the longest, it will replace the longests
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }

    return longest.length
}

console.log(findLongestWord(['hello', 'a', 'b', 'abc', 'sadlkjfhgsadfasdf']))



// Question 8
// Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.

function filterLongWords(words, number) {
    const longWords = []
    // loop to the end of words
        // if a word's lenght is greater or equal to number, push it to longWords array
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= number) {
            longWords.push(words[i])
        }
    }

    return longWords
        
}