// Question 1
function maxOfTwoNumbers() {
    const first = "3";
    const second = "5";
    
    if(first < second){
        console.log(second + " is the largest number")
    }else{
        console.log(first + " is the largest number")
    }
}
maxOfTwoNumbers();

// Question 2
function maxOfThree() {
    const first = 3;
    const second = 5;
    const third = 7;

    if(first < second && third < second){
        console.log(second + "is the largest number");
    }else if(second < first && third < first){
        console.log(first + "is the largest number");
    }else{
        console.log(third + "is the largest number");
    }

}
maxOfThree()

// Question 3

function isCharacterAVowel(str) {
    for (let i = 0; i< str.length; i++) {
    if(str = 'a'|| 'i' || 'e' || 'o' ||' u'){
        console.log("True");
    } else {
        console.log("False");
    }
    }
}
const myLetter = "a"
isCharacterAVowel(myLetter)

// Question 4

const addNumbers = [1, 3, 5, 7]
function sumArray(sum) {
    let result = 0;

    for(let i = 0; i<sum.length; i++){
        let num = sum[i];

        result += num;
    }
    return result;
}
console.log(sumArray(addNumbers));

// Question 4

const multipleNumbers = [1, 2, 3, 4]
function multiplyArray(multiple) {
    let result = 1;

    for(let i = 1; i<multiple.length; i++){
        let num = multiple[i];

        result *= num;
    }
    return result;
}

let myResult = multiplyArray(multipleNumbers);
console.log(myResult);

// Question 5
const first = "A"
const second = "B"
function argument(a,b){
    return arguments.length;
}
var numberOfArguments = argument(first,second)
console.log(numberOfArguments)




// Question 6
function reverse(string){
    myArray = string.split('')
    reverse = myArray.reverse()
    answer = reverse.join('');
    return answer;
};
const a = "hello";
var reverseString = reverse(a)
console.log(reverseString);

// Question 7
const things = ["toy", "flower", "tree", "thisishusttest"]
function findLongestWord(word) {
    var longestWord = word[0]
    for (let i=0; i<word.length; i++){
        if(longestWord.length < word[i].length){
            longestWord=word[i]
        }
        else{
            longestWord=longestWord
        }
    }
    return longestWord
}
var answer = findLongestWord(things)
console.log(answer)

// Question 8

const longString = ["yellow", "red", "purple", "obviously long" ];
const number = 3
const arr = [];
function filterLongWords(words) {
    var longWord = words [0]
    for (let i=0; i<words.length; i++){
        if(words[i].length > number){
            arr.push(words[i])
        }else{
        longWord=longWord
        }
    }
    return longWord

}
console.log(filterLongWords(longString));


