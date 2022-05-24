
const sumOfNum = require('../sumOfNum');

describe ('sumOfNum', () => {
    test ('testing sum of single digits', () => {
            //Arrange
            const firstDigit = 5;
            const secondDigit = 4;
            const expected = 9;
            //Actual
            const actual = sumOfNum(firstDigit, secondDigit);
            //Expect
            expect(actual).toBe(expected);
    })
})