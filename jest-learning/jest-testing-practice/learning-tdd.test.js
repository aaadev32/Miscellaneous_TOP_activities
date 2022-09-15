const testDoc = require('./learning-tdd');

test(`adds 1 + 2 to equal 3`, () => {
    expect(testDoc.sum(1, 2)).toBe(3);
});

//this test is failing but after looking through the console.log it works fine....
test('capitalizes the first character of a string', () => {
    expect(testDoc.capitalize(`linux`)).toBe('Linux');
});

test('take a string and reverse its characters', () => {
    expect(testDoc.reverseString('doodad')).toBe('dadood');

});
describe('calculator funtion tests', () => {
    test('calculator object addition function test', () => {
        expect(testDoc.calculator.add(5, 7)).toBe(12);
    });
    test('calculator object subtraction function test', () => {
        expect(testDoc.calculator.subtract(17, 7)).toBe(10);
    });
    test('calculator object multiplication function test', () => {
        expect(testDoc.calculator.multiply(6, 9)).toBe(54);
    });
    test('calculator object division function test', () => {
        expect(testDoc.calculator.divide(15, 3)).toBe(5);
    });
});

describe('caesar function tests', () => {
    test('caesar function wraps alphabetically correct', () => {
        expect(testDoc.caesar('zappa', 1)).toBe('abqqb');
        expect(testDoc.caesar('zappa', -1)).toBe('yzooz');
    });
    test('caesar function is case sensitive', () => {
        expect(testDoc.caesar('fOoBAr', 0)).toBe('fOoBAr');
    });
    test('caesar function respects punctuation', () => {
        expect(testDoc.caesar('don\'t!', 1)).toBe('epo\'u!');
    });
    test('works with large shift factors', () => {
        expect(testDoc.caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
    });
    test('works with large negative shift factors', () => {
        expect(testDoc.caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
    });
});
let data = testDoc.analyzeArray([1, 2, 3]);
console.log(data)
describe('analyze array function tests', () => {
    test('properly acquires average', () => {
        expect(data).toHaveProperty('max', 3);
        expect(data).toHaveProperty('average', 2);
        expect(data).toHaveProperty('min', 1);
        expect(data).toHaveProperty('length', 3);


    })
});