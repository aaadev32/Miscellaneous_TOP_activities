function sum(a, b) {
    return a + b;
}

function capitalize(str) {
    const upperStr = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(upperStr);
    return upperStr;
}

function reverseString(str) {
    let reverseStr = "";
    console.log(str.length)
    for (let i = str.length; i >= 0; i--) {
        if (str[i] != undefined) {
            reverseStr += str[i];
        }
    }
    console.log(reverseStr);
    return reverseStr;
}
//capitalize('linux');
reverseString('doodad');
module.exports = sum, capitalize, reverseString;

