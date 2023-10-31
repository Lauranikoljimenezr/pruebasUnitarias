const esPar = require('../esPar');

test('Verificar si 4 es un número par', () => {
    expect(esPar(4)).toBe(true);
});

test('Verificar si 7 es un número par', () => {
    expect(esPar(7)).toBe(false);
});

test('Verificar si 0 es un número par', () => {
    expect(esPar(0)).toBe(true);
});

test('Verificar si -10 es un número par', () => {
    expect(esPar(-10)).toBe(true);
});

test('Verificar si 15 es un número par', () => {
    expect(esPar(15)).toBe(false);
});
