const sumArray = (arr) => {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const multiplyArray = (arr) => {

    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    return product;
}

console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));