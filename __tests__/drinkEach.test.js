const drinkEach = require("../drinkEach");

//You have a drinkEach(drink, Array<flavor>) function that takes a drink function and applies it to array of passed beverages. You might want to check that drink function was called exact number of times. You can do that with this test suite:

describe("drinkEach", () => {
    test('drinkEach drinks each drink', () => {
        const drink = jest.fn();
        drinkEach(drink, ['lemon', 'octopus']);
        expect(drink).toHaveBeenCalledTimes(2);
      });
});