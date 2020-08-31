import { coinCounter } from '../src/main.js'

describe ('coinCounter', () => {

  //Quarters Test
  test('This will give you the value of the input in coin denominations', () => {
    expect(coinCounter(4.99).toBe("Pennies: 4, Dimes: 2, Quarters: 19"))
  });

  //NaN Test
  test('This will return nothing if the input is not a number', () => {
    expect(coinCounter('string').toBeUndefined())
  });

  // //Nickel Test
  // test('This will give you the value of the input in nickels', () => {

  // });

  // //Pennies Test
  // test('This will give you the value of the input in pennies', () => {

  // });

});