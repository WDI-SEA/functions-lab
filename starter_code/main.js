// // Question 1

function maxOfTwoNumbers(a, b) {
    if (a > b) { 
        return a;
            } else {
            return b;
            }
        }

console.log(maxOfTwoNumbers(9, 16));

// Question 2



//edited to delete equal signs, becasue that doesnt tell us greater necessarily.

function maxOfThree(a, b, c) {
    if ((a > b) && (a > c)) { 
        return a;
            } else if ((b > a) && (b > c)) {
            return b;
                } else {
                return c;
            }
        }

console.log(maxOfThree(12, 32, 64));


// Question 3
var vow = ["a", "e", "i", "o", "u"];
function isCharacterAVowel(){


    for (var i = 0; i <= vow.length; i++){
        if (letter !== vow[i]) {
        return false;
            }else{
                return true;
            }
        }
    }

var letter= "c";
console.log(isCharacterAVowel());


// Question 4
function sumArray(nums) {
	var total = 0;
	for (var i = 0; i < nums.length; i++) {
		total += nums[i];
	}
	return total;
}
  console.log(sumArray([5,7,13]));


// Question 4
function multiplyArray(nums) {
	var total = 1;
	for (var i = 0; i < nums.length; i++) {
		total = (total * nums[i]);
	}
	return total;
}
  console.log(multiplyArray([3,12,16]));


// Question 5
var  arguments= [1,4,6,9]
var numberOfArguments = function(){
    return arguments.length;
  
}
console.log(arguments.length)



// Question 6
var reverseString = function (string){
    var text = '';
      for (var i = string.length - 1; i >= 0; i--) {
          text += string[i];
      }
      return text.toLowerCase();
  }
  console.log(reverseString("luna"));

// Question 7

//still working on this. I misunderstood the question and created a function
//for a string, not an array. Tried subbing in array and it did not run. 
//including the code I did work on, knowing it's not correct, but to show I tried.

// function findLongestWord(string) {
//   let stringSplit = string.split(' ');
//     let longWord = 0;
//         for(let i = 0; i < stringSplit.length; i++){
//             if(stringSplit[i].length > longWord){
//             longWord = stringSplit[i].length;
//        }
//     }
//     return longWord;
//   }
//   findLongestWord("My name is Elizabeth, but you can call me Lizz");

 function findLongestWord(wArray){
     let word="";

     for(let i = 0; i < wArray.length; i++){
         if(wArray[i].length > word.length ){
             word= wArray[i];
         }else{
            continue;
        } 
 }
    return word;
}
console.log(findLongestWord("butterscotch", "whippersnapper", "obtuse",))


// Question 8
//I dont even know where to start on this one.
//i partnered with some classmates and I got this far, but it
//only returns empty brackets. I would love to have someone 
//walk me through my error on this one.
function filterLongWords (lis, x) {
    let nArray =[];
    for(let i=0; i< lis.length; i++){
        if(lis[i].length > x){
            nArray.push(lis[i]);
        }
    }
  return nArray;
}

console.log(filterLongWords(["abracadabra", "caboodle","bandersnatch", "coffee"]));
// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  

