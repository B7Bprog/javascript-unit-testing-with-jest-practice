
const sumOfNum = require('../sumOfNum');

describe ('sumOfNum', () => {
    test ('testing sum of single digits', () => {
            //Arrange
            const firstDigit = 5;
            const secondDigit = 4;
            const expected = 9;
            //Actual
            const actual = sumOfNum(firstDigit, secondDigit);
            //Assert
            expect(actual).toBe(expected);
    })
})