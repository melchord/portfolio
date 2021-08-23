import { default as factorialize } from './component';

test('factorial of 3', () => {
  expect(factorialize(3)).toBe(6);
});

test('factorial of 5', () => {
  expect(factorialize(5)).toBe(120);
});
