const filterLongWords = (arr, i) => {
    const newArr = [];
    for(var c = 0 ; c < arr.length; c++) {
        var word = arr[c];
        if(word.length > i) {
            newArr.push(word);
        }
    }
    return newArr;
}

console.log(filterLongWords(["a", "asgas", "asgsadhds"], 3));