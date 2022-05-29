const getDomainName = require('../getDomainName');

describe('getDomainName', () => {
    test('Test if function return type is a string', () =>{
        //Arrange
        const url = 'http://google.co.jp';
        const expected= 'string';
         //Act
        const actual = getDomainName(url);
        //Assert
        expect(typeof actual).toBe(expected);
    });
    test('Test if we get the right domain out of a url ', () =>{
        //Arrange
        const url = 'http://google.co.jp';
        const expected = 'google';
        //Act
        const actual = getDomainName(url);
        //Assert
        expect(actual).toBe(expected);
    });
    test('Test if we get the right domain out of another url ', () =>{
        //Arrange
        const url = 'https://youtube.com';
        const expected = 'youtube';
        //Act
        const actual = getDomainName(url);
        //Assert
        expect(actual).toBe(expected);
    });
    test('Test if we get the right domain out of another url with digits ', () =>{
        //Arrange
        const url = 'https://you32tube.com';
        const expected = 'you32tube';
        //Act
        const actual = getDomainName(url);
        //Assert
        expect(actual).toBe(expected);
    });
    test('Test if we get the right domain out of another url with only digits ', () =>{
        //Arrange
        const url = 'https://123.com';
        const expected = '123';
        //Act
        const actual = getDomainName(url);
        //Assert
        expect(actual).toBe(expected);
    });
});