import { expect, it } from 'vitest'
import { sum } from '../src/js/main.js';

it('sum', () => {
  // arrange (given)
  const firstNumber = 5;
  const secondNumber = 15;
  // act (when)
  const result = sum(firstNumber, secondNumber)
  // assert (then)
  expect(sum(firstNumber, secondNumber)).toBe(20);
})