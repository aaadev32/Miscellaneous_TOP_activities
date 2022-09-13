function sum(a, b) {
    return a + b;
}

function capitalize(str) {
    const upperStr = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(upperStr);
    return upperStr;
}

function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length; i >= 0; i--) {
        if (str[i] != undefined) {
            reverseStr += str[i];
        }
    }
    console.log(reverseStr);
    return reverseStr;
}
let calculator = {
    add: function (n1, n2) {
        return n1 + n2;
    }
    , subtract: function (n1, n2) {
        return n1 - n2;
    }
    , multiply: function (n1, n2) {
        return n1 * n2;
    }
    , divide: function (n1, n2) {
        return n1 / n2;
    }

}
capitalize('linux');
reverseString('doodad');
console.log(calculator.multiply(5, 5));
console.log(calculator.subtract(5, 2));
console.log(calculator.divide(5, 3));

module.exports = sum, capitalize, reverseString, calculator.add(), calculator.subtract(), calculator.multiply(), calculator.divide();

