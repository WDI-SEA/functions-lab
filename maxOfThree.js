const maxOfThree = (num1, num2, num3) => {
    
    var largest = num1;
    
    if (num2 > num1) {
        largest = num2;
    } 

    if (largest < num3) {
        largest = num3;
    }

    console.log(largest);
    return largest;
}

maxOfThree(1,2,3);
maxOfThree(4,2,3);
maxOfThree(1,5,3);