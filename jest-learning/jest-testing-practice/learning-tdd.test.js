const sum = require('./learning-tdd');
const capitalize = require(`./learning-tdd`);


test(`adds 1 + 2 to equal 3`, () => {
    expect(sum(1, 2)).toBe(3);
});

//this test is failing but after looking through the console.log it works fine....
test('capitalizes the first character of a string', () => {
    expect(capitalize(`linux`)).toBe('Linux')
});