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
const calculator = {
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

function caesar(str, cipher) {
    let unicode = [];
    let encipheredUnicode = [];
    let result = '';
    let plaintext = str;



    //creates unicode array
    for (let i = 0; i < plaintext.length; i++) {

        unicode[i] = plaintext.charCodeAt(i);

    }

    //creates an enciphered unicode array if the unicode is a lower or uppercase char else the unicode value is unchanged
    for (let i = 0; i < unicode.length; i++) {

        //this if statement will select lowercase letters for enciphering
        if (unicode[i] >= 97 && unicode[i] <= 122) {

            encipheredUnicode[i] = unicode[i] + cipher;


            while (encipheredUnicode[i] > 122 || encipheredUnicode[i] < 97) {

                if (unicode[i] + cipher > 122) {
                    encipheredUnicode[i] -= 26;
                } else if (unicode[i] + cipher < 97) {
                    encipheredUnicode[i] += 26;
                }
            }

            //this else if statement selects uppercase letters for enciphering
        } else if (unicode[i] >= 65 && unicode[i] <= 90) {

            encipheredUnicode[i] = unicode[i] + cipher;

            while (encipheredUnicode[i] > 90 || encipheredUnicode[i] < 65) {
                if (unicode[i] + cipher > 90) {

                    encipheredUnicode[i] -= 26;
                } else if (unicode[i] + cipher < 65) {
                    encipheredUnicode[i] += 26
                }
            }
        } else {
            //makes the cipher leave whitespace and punctuation unchanged
            encipheredUnicode[i] = unicode[i];
        }
    }

    for (let i = 0; i < encipheredUnicode.length; i++) {
        let tempChar = '';
        let tempConcat = '';
        tempChar = String.fromCharCode(encipheredUnicode[i]);

        result += tempConcat.concat(tempChar);

    }
    return result;
}
module.exports = { sum, capitalize, reverseString, calculator, caesar };

