const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 25 / 5 to equal 55', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test('divide 99 / 3 to equal 33', () => {
  expect(calculator.divide(99, 3)).toBe(33);
});


test('multiply 9 * 9 to equal 81', () => {
  expect(calculator.multiply(9, 9)).toBe(81);
});

test('multiply 5 * 3 to equal 15', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('divide() lanza error cuando el divisor es 0', () => {
  expect(() => calculator.divide(10, 0)).toThrow("No se puede dividir por 0")
});