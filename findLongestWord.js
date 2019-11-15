const findLongestWord = (arr) => {
    var longest = 0; 
    for(var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if(word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

console.log(findLongestWord(["a", "asgas", "asgsadhds"]));