const factorial = require('../factorial');

test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
});

test('Factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
});

test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Factorial de 10 debe ser 3628800', () => {
    expect(factorial(10)).toBe(3628800);
});

test('Factorial de número negativo debe lanzar un error', () => {
    expect(() => factorial(-3)).toThrow("No se puede calcular el factorial de un número negativo");
});


