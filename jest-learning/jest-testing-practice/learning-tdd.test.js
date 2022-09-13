const sum = require('./learning-tdd');
const capitalize = require(`./learning-tdd`);
const reverseString = require('./learning-tdd');
const calculator = require('./learning-tdd')

test(`adds 1 + 2 to equal 3`, () => {
    expect(sum(1, 2)).toBe(3);
});

//this test is failing but after looking through the console.log it works fine....
test('capitalizes the first character of a string', () => {
    expect(capitalize(`linux`)).toEqual('Linux')
});

test('take a string and reverse its characters', () => {
    expect(reverseString('doodad')).toEqual('dadood')
});

test('calculator object addition function test', () => {
    expect(calculator.add(5, 7)).toBe(12)
});
test('calculator object subtraction function test', () => {
    expect(calculator.subtract(17, 7)).toBe(10)
});
test('calculator object multiplication function test', () => {
    expect(calculator.multiply(6, 9)).toBe(54)
});
test('calculator object division function test', () => {
    expect(calculator.divide(15, 3)).toBe(5)
});