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

console.log(charactersOccurencesCount("general"));