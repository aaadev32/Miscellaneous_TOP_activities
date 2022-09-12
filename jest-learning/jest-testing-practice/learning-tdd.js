function sum(a, b) {
    return a + b;
}

function capitalize(str) {
    const upperStr = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(upperStr);
    return upperStr;
}

module.exports = sum, capitalize;

capitalize('linux');
