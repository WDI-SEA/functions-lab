const isCharacterAVowel = (char) => {

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char)) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

isCharacterAVowel('a');